import connect from '@vkontakte/vk-connect';
import { ThymeleafParamName, getThymeleafParam, getThymeleafParamInt } from './thymeleaf-utils';
import TemporaryAccessDeclined from '../panels/TemporaryAccessDeclined';
import TemporaryAccessProvided from '../panels/TemporaryAccessProvided';
import render from './render';
import request from './request';

export function requestAccess() {
	const appId = getThymeleafParamInt(ThymeleafParamName.APP_ID);
	const scope = getThymeleafParam(ThymeleafParamName.ACCESS_REQUEST_SCOPE);
	connect.send("VKWebAppGetAuthToken", { "app_id": appId, "scope": scope });
}

export function handleAccessProvided(data) {
	const scope = getThymeleafParam(ThymeleafParamName.ACCESS_REQUEST_SCOPE);
	if (scope !== data.scope) {
		renderTemporaryAccessDeclined();
		return;
	}
	const methodUrn = getThymeleafParam(ThymeleafParamName.SET_ACCESS_TOKEN_METHOD_URN);
	const parameters = { access_token: data.access_token };
	request({
		methodUrn: methodUrn, parameters: parameters, dataHandler: () => {
			render(TemporaryAccessProvided);
		}
	});
}

export function handleTemporaryAccessDeclined() {
	renderTemporaryAccessDeclined();
}

function renderTemporaryAccessDeclined() {
	render(TemporaryAccessDeclined);
}