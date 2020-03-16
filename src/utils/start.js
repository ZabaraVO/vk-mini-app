import ErrorMessage from '../panels/ErrorMessage';
import UnregisteredUserMessage from '../panels/UnregisteredUserMessage';
import TemporaryAccessProvided from '../panels/TemporaryAccessProvided';
import { ThymeleafParamName, getThymeleafParam, getThymeleafParamBool, getThymeleafParamInt, setThymeleafParam } from './thymeleaf-utils';
import { exists, strContains } from './utils';
import render from './render';
import request from './request';
import { requestAccess } from './accessRequest';
import VkDataAccessType from './VkDataAccessType';
import ApiError from './ApiError';
import ApiErrorHandler from './ApiErrorHandler';
import PermanentAccessProvided from '../panels/PermanentAccessProvided';
import platform from 'platform';
import PlatformType from './PlatformType';
import PermanentAccessProvideResult from './PermanentAccessProvideResult';
import PermanentAccessDeclined from '../panels/PermanentAccessDeclined';

function start() {
	checkPlatformType();

	if (getThymeleafParamBool(ThymeleafParamName.ERROR)) {
		render(ErrorMessage);
		return;
	}

	const permanentAccessProvideResult = getThymeleafParamInt(ThymeleafParamName.PERMANENT_ACCESS_PROVIDE_RESULT);
	if (exists(permanentAccessProvideResult)) {
		handlePermanentAccessProvideResult(permanentAccessProvideResult);
		return;
	}

	handleAccessType();
}

function checkPlatformType() {
	let platformType = getThymeleafParam(ThymeleafParamName.PLATFORM_TYPE);
	if (exists(platformType)) {
		return;
	}
	const os = platform.os.toString().toLowerCase();
	if (strContains(os, "android") || strContains(os, "ios")) {
		platformType = PlatformType.MOBILE;
	} else {
		platformType = PlatformType.PC;
	}
	setThymeleafParam(ThymeleafParamName.PLATFORM_TYPE, platformType);
}

function handlePermanentAccessProvideResult(value) {
	switch (value) {
		case PermanentAccessProvideResult.SUCCESS:
			render(PermanentAccessProvided);
			return;
		case PermanentAccessProvideResult.DECLINED:
			render(PermanentAccessDeclined);
			return;
		default:
			return;
	}
}

function handleAccessType() {
	const methodUrn = getThymeleafParam(ThymeleafParamName.GET_ACCESS_TYPE_METHOD_URN);
	const userNotRegisteredHandler = new ApiErrorHandler(ApiError.USER_NOT_REGISTERED, () => {
		render(UnregisteredUserMessage);
	});
	request({
		methodUrn: methodUrn,
		dataHandler: (data) => {
			switch (data) {
				case VkDataAccessType.NONE:
					requestAccess();
					break;
				case VkDataAccessType.TEMPORARY:
					render(TemporaryAccessProvided);
					break;
				case VkDataAccessType.PERMANENT:
					render(PermanentAccessProvided);
					break;
				default:
					break;
			}
		},
		apiErrorHandlers: [userNotRegisteredHandler]
	});
}

export default start;