import axious from 'axios';
import ErrorMessage from '../panels/ErrorMessage';
import NeedCacheCleanMessage from '../panels/NeedCacheCleanMessage';
import { exists, isString, strIsBlank } from './utils';
import { ThymeleafParamName, getThymeleafParam, setThymeleafParam } from '../utils/thymeleaf-utils';
import render from './render';
import ApiError from './ApiError';

function request({ methodUrn, parameters, dataHandler, apiErrorHandlers }) {
	requestWithRepeatedFlag({ methodUrn: methodUrn, parameters: parameters, dataHandler: dataHandler, repeated: false, apiErrorHandlers: apiErrorHandlers });
}

function requestWithRepeatedFlag({ methodUrn, parameters, dataHandler, repeated, apiErrorHandlers }) {
	const apiUrl = getThymeleafParam(ThymeleafParamName.API_URL);
	const params = createParamsContainer(parameters);
	axious.post(apiUrl + methodUrn, null, {
		params: params
	})
		.then((response) => {
			const data = getResponseData(response);
			exists(dataHandler) && dataHandler(data);
		})
		.catch((e) => {
			const data = getResponseData(e.response);
			switch (data) {
				case ApiError.TOKEN_NOT_RELEVANT:
					render(NeedCacheCleanMessage);
					return;
				case ApiError.TOKEN_EXPIRED:
					handleExpiredToken(methodUrn, dataHandler, repeated, apiErrorHandlers);
					return;
				default:
					break;
			}

			const apiErrorHandler = getApiErrorHandler(data, apiErrorHandlers);
			if (exists(apiErrorHandler)) {
				apiErrorHandler();
				return
			}

			renderErrorMessage();
		});
}

function createParamsContainer(parameters) {
	const defaultParams = { token: getThymeleafParam(ThymeleafParamName.TOKEN) };
	const res = exists(parameters) ? Object.assign(defaultParams, parameters) : defaultParams;
	return res;
}

function handleExpiredToken(methodUrn, dataHandler, repeated, apiErrorHandlers) {
	if (repeated === true) {
		renderErrorMessage();
		return;
	}
	requestWithRepeatedFlag(getThymeleafParam(ThymeleafParamName.REFRESH_TOKEN_METHOD_URN), (data) => {
		setThymeleafParam(ThymeleafParamName.TOKEN, data);
		requestWithRepeatedFlag(methodUrn, dataHandler, true, apiErrorHandlers);
	}, true);
}

function renderErrorMessage() {
	render(ErrorMessage);
}

function getApiErrorHandler(errorCode, apiErrorHandlers) {
	if (!exists(errorCode) || !exists(apiErrorHandlers)) {
		return null;
	}
	for (let apiErrorHandler of apiErrorHandlers) {
		if (apiErrorHandler.errorCode !== errorCode) {
			continue;
		}
		return apiErrorHandler.hadler;
	};
	return null;
}

function getResponseData(response) {
	if (!exists(response)) {
		return null;
	}
	const res = response.data;
	if (!exists(res)) {
		return null;
	}
	if (isString(res) && strIsBlank(res)) {
		return null;
	}
	return res;
}

export default request;