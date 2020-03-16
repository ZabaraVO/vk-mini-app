import React from 'react';

import Message from './Message';
import kindImg from '../img/kind.png';
import RedirectButton from './RedirectButton';
import RedirectButtonType from './RedirectButtonType';
import { ThymeleafParamName, getThymeleafParam } from '../utils/thymeleaf-utils';

const UnregisteredUserMessage = () => {
	const textHeader = getThymeleafParam(ThymeleafParamName.UNREGISTERED_USER_MESSAGE_HEADER);
	const text = getThymeleafParam(ThymeleafParamName.UNREGISTERED_USER_MESSAGE_TEXT);
	const buttons = [<RedirectButton type={RedirectButtonType.DIALOG} />];
	return <Message marginTopPc='20' marginTopMobile='20' textHeader={textHeader} emoticon={kindImg} text={text} buttons={buttons} />;
}

export default UnregisteredUserMessage;