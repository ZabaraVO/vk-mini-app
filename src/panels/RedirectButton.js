import React from 'react';
import ButtonTemplate from './ButtonTemplate';
import styles from './style.module.css';
import { ThymeleafParamName, getThymeleafParam, getThymeleafParamInt } from '../utils/thymeleaf-utils';
import { exists } from '../utils/utils';
import PlatformType from '../utils/PlatformType';
import RedirectButtonType from './RedirectButtonType';
import { createButton } from './utils';

const RedirectButton = ({ type }) => {
	let urlThParamName;
	let buttonTextThParamName;
	switch (type) {
		case RedirectButtonType.DIALOG:
			urlThParamName = ThymeleafParamName.DIALOG_URL;
			buttonTextThParamName = ThymeleafParamName.DIALOG_REDIRECT_BUTTON_TEXT;
			break;
		case RedirectButtonType.GROUP:
			urlThParamName = ThymeleafParamName.GROUP_URL;
			buttonTextThParamName = ThymeleafParamName.GROUP_REDIRECT_BUTTON_TEXT;
			break;
		case RedirectButtonType.PERMANENT_ACCESS:
			urlThParamName = ThymeleafParamName.PERMANENT_ACCESS_URL;
			buttonTextThParamName = ThymeleafParamName.PER_ACCESS_REDIRECT_BUTTON_TEXT;
			break;
		default:
			break;
	}

	if (!exists(urlThParamName) || !exists(buttonTextThParamName)) {
		return null;
	}

	const href = getThymeleafParam(urlThParamName);
	const text = getThymeleafParam(buttonTextThParamName);
	if (!exists(href) || !exists(text)) {
		return null;
	}

	const permanentAccessProvideResult = getThymeleafParamInt(ThymeleafParamName.PERMANENT_ACCESS_PROVIDE_RESULT);
	const openInNewTab = getThymeleafParamInt(ThymeleafParamName.PLATFORM_TYPE) !== PlatformType.MOBILE
		&& !exists(permanentAccessProvideResult);
	const attributes = { href: href, target: openInNewTab ? "_blank" : undefined }
	return createButton('a', <ButtonTemplate text={text} />, styles.buttonLink, attributes);
};

export default RedirectButton;