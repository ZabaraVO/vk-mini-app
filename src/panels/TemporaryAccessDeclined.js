import React from 'react';
import RedirectButton from './RedirectButton';
import RedirectButtonType from './RedirectButtonType';
import MenuButton from './MenuButton';
import Message from './Message';
import { requestAccess } from '../utils/accessRequest';
import { ThymeleafParamName, getThymeleafParam } from '../utils/thymeleaf-utils';

const TemporaryAccessDeclined = () => {
	const textHeader = getThymeleafParam(ThymeleafParamName.TMP_ACCESS_DECLINED_HEADER);
	const text = getThymeleafParam(ThymeleafParamName.TMP_ACCESS_DECLINED_TEXT);
	const retryButtonOnClick = () => { requestAccess() };
	const buttonText = getThymeleafParam(ThymeleafParamName.RETRY_PROVIDE_TMP_ACCESS_BUTTON_TEXT);
	const retryButton = <MenuButton text={buttonText} onClick={retryButtonOnClick} />
	const redirectButton = <RedirectButton type={RedirectButtonType.DIALOG} />;
	const buttons = [retryButton, redirectButton];
	return <Message marginTopPc='15' marginTopMobile='10' textHeader={textHeader} text={text} buttons={buttons} />;
}

export default TemporaryAccessDeclined;