import $ from 'jquery';
import { strIsBlank, exists } from './utils';

export const ThymeleafParamName = {
	TOKEN: 'token',
	PERMANENT_ACCESS_PROVIDE_RESULT: 'permanent-access-provide-result',
	ERROR: 'error',
	IS_REGISTERED: 'is-registered',
	PLATFORM_TYPE: 'platform-type',
	ERROR_HEADER: 'error-header',
	ERROR_TEXT: 'error-text',
	DIALOG_URL: 'dialog-url',
	GROUP_URL: 'group-url',
	PANEL_HEADER_TEXT: 'panel-header-text',
	DIALOG_REDIRECT_BUTTON_TEXT: 'dialog-redirect-button-text',
	GROUP_REDIRECT_BUTTON_TEXT: 'group-redirect-button-text',
	TMP_ACCESS_PROVIDED_HEADER: 'tmp-access-provided-header',
	NEED_REPEAT_ACCESS_PROVISION_TEXT: 'need-repeat-access-provision-text',
	PERMANENT_ACCESS_BUTTON_TEXT: 'permanent-access-button-text',
	NEED_CACHE_CLEAN_HEADER: 'need-cache-clean-header',
	NEED_CACHE_CLEAN_PC_TEXT: 'need-cache-clean-pc-text',
	NEED_CACHE_CLEAN_MOBILE_TEXT: 'need-cache-clean-mobile-text',
	NEED_CACHE_CLEAN_COMMON_TEXT: 'need-cache-clean-common-text',
	API_URL: 'api-url',
	GET_ACCESS_TYPE_METHOD_URN: 'get-access-type-method-urn',
	REFRESH_TOKEN_METHOD_URN: 'refresh-token-method-urn',
	SET_ACCESS_TOKEN_METHOD_URN: 'set-access-token-method-urn',
	PERMANENT_ACCESS_PROVIDED_HEADER: 'permanent-access-provided-header',
	PERMANENT_ACCESS_PROVIDED_TEXT: 'permanent-access-provided-text',
	UNREGISTERED_USER_MESSAGE_HEADER: 'unregistered-user-message-header',
	UNREGISTERED_USER_MESSAGE_TEXT: 'unregistered-user-message-text',
	ACCESS_REQUEST_SCOPE: 'access-request-scope',
	APP_ID: 'app-id',
	TMP_ACCESS_DECLINED_HEADER: 'tmp-access-declined-header',
	TMP_ACCESS_DECLINED_TEXT: 'tmp-access-declined-text',
	RETRY_PROVIDE_TMP_ACCESS_BUTTON_TEXT: 'retry-provide-tmp-access-button-text',
	PERMANENT_ACCESS_URL: 'permanent-access-url',
	PER_ACCESS_REDIRECT_BUTTON_TEXT: 'per-access-redirect-button-text',
	PER_ACCESS_DECLINED_HEADER: 'per-access-declined-header',
	PER_ACCESS_INSTRUCTION_HEADER: 'per-access-instruction-header',
	PER_ACCESS_INSTRUCTION_INTRO: 'per-access-instruction-intro',
	PER_ACCESS_INSTRUCTION_CLARIFICATION_HEADER: 'per-access-instruction-clarification-header',
	PER_ACCESS_INSTRUCTION_CLARIFICATION_TEXT: 'per-access-instruction-clarification-text',
	PER_ACCESS_INSTRUCTION_MOBILE_TEXT: 'per-access-instruction-mobile-text'
};

export function getThymeleafParam(paramName) {
	return getThymeleafParamWithDefault(paramName, null);
}

export function getThymeleafParamWithDefault(paramName, defaultValue) {
	const el = getThymeleafParamContainer(paramName);
	if (!el || strIsBlank(el.text())) {
		return defaultValue;
	}
	return el.text();
}

export function setThymeleafParam(paramName, value) {
	const el = getThymeleafParamContainer(paramName);
	if (!exists(el)) {
		return;
	}
	el.text(value);
}

function getThymeleafParamContainer(paramName) {
	return $('#th-' + paramName);
}

export function getThymeleafParamBool(paramName) {
	const strRes = getThymeleafParamWithDefault(paramName, 'false');
	if (strRes === 'true') {
		return true;
	}
	return false;
}

export function getThymeleafParamInt(paramName) {
	const strRes = getThymeleafParam(paramName);
	if (!exists(strRes)) {
		return null;
	}
	return parseInt(strRes, 10);
}