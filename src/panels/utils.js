import React from 'react';
import { exists, getLines, strIsBlank } from '../utils/utils';
import { ThymeleafParamName, getThymeleafParamBool } from '../utils/thymeleaf-utils';
import RedirectButtonType from './RedirectButtonType';
import RedirectButton from './RedirectButton';
import styles from './style.module.css';

export function handleLineBreakers(str) {
	if (strIsBlank(str)) {
		return str;
	}
	const lines = getLines(str);
	return (
		lines.length === 1 ? str : lines.map((line) => {
			if (strIsBlank(line)) {
				return <br />
			}
			return <div>{line}</div>
		})
	);
}

export function createRegisteredDependentRedirectButton() {
	const isRegistered = getThymeleafParamBool(ThymeleafParamName.IS_REGISTERED);
	const redirectButtonType = isRegistered ? RedirectButtonType.DIALOG : RedirectButtonType.GROUP;
	return <RedirectButton type={redirectButtonType} />
}

export function createButton(htmlTagName, button, classNames, attributes) {
	const CustomTag = htmlTagName;
	return (
		<CustomTag className={`${styles.wrapper} ${styles.flex} ${exists(classNames) && classNames}`} {...(attributes)}>
			{button}
		</CustomTag>
	);
}