import React from 'react';
import RedirectButton from './RedirectButton';
import RedirectButtonType from './RedirectButtonType';
import Message from './Message';
import { ThymeleafParamName, getThymeleafParam } from '../utils/thymeleaf-utils';

const PermanentAccessDeclined = () => {
	const textHeader = getThymeleafParam(ThymeleafParamName.PER_ACCESS_DECLINED_HEADER);
	const text = getThymeleafParam(ThymeleafParamName.NEED_REPEAT_ACCESS_PROVISION_TEXT);
	const retryButton = <RedirectButton type={RedirectButtonType.PERMANENT_ACCESS} />;
	const redirectButton = <RedirectButton type={RedirectButtonType.DIALOG} />;
	const buttons = [retryButton, redirectButton];
	return <Message marginTopPc='25' marginTopMobile='20' textHeader={textHeader} text={text} buttons={buttons} />;
}

export default PermanentAccessDeclined;