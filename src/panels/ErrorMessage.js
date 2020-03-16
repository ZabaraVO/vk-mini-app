import React from 'react';
import styles from './style.module.css';
import { ThymeleafParamName, getThymeleafParamWithDefault } from '../utils/thymeleaf-utils';
import Message from './Message';
import sadImg from '../img/sad.png';
import { createRegisteredDependentRedirectButton } from './utils';

const ErrorMessage = () => {
	const errorHeaderThParamName = ThymeleafParamName.ERROR_HEADER;
	const textHeader = getThymeleafParamWithDefault(errorHeaderThParamName, 'Извините,\nчто-то пошло не так');
	const errorTextThParamName = ThymeleafParamName.ERROR_TEXT;
	const text = getThymeleafParamWithDefault(errorTextThParamName, 'Скоро всё исправим');
	const content = <div className={`${styles.container} ${styles.text} ${styles.errorText}`}>{text}</div>
	const buttons = [createRegisteredDependentRedirectButton()];
	return <Message marginTopPc='15' marginTopMobile='20' textHeader={textHeader} emoticon={sadImg} content={content} buttons={buttons} />;
};

export default ErrorMessage;