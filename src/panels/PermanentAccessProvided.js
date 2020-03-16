import React from 'react';
import Message from './Message';
import { createRegisteredDependentRedirectButton } from './utils';
import kindImg from '../img/kind.png';
import { ThymeleafParamName, getThymeleafParam } from '../utils/thymeleaf-utils';

const PermanentAccessProvided = () => {
	const textHeader = getThymeleafParam(ThymeleafParamName.PERMANENT_ACCESS_PROVIDED_HEADER);
	const text = getThymeleafParam(ThymeleafParamName.PERMANENT_ACCESS_PROVIDED_TEXT);
	const buttons = [createRegisteredDependentRedirectButton()];
	return <Message marginTopPc='20' marginTopMobile='20' textHeader={textHeader} emoticon={kindImg} text={text} buttons={buttons} />;
};

export default PermanentAccessProvided;