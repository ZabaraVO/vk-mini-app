import React from 'react';
import thumbupImg from '../img/thumbup.png';
import MenuButton from './MenuButton';
import RedirectButton from './RedirectButton';
import RedirectButtonType from './RedirectButtonType';
import PermanentAccessInstruction from './PermanentAccessInstruction';
import Message from './Message';
import { ThymeleafParamName, getThymeleafParam } from '../utils/thymeleaf-utils';
import render from '../utils/render';

const TemporaryAccessProvided = () => {
	const textHeader = getThymeleafParam(ThymeleafParamName.TMP_ACCESS_PROVIDED_HEADER);
	const text = getThymeleafParam(ThymeleafParamName.NEED_REPEAT_ACCESS_PROVISION_TEXT);
	const buttonText = getThymeleafParam(ThymeleafParamName.PERMANENT_ACCESS_BUTTON_TEXT);
	const permanentAccessButton = <MenuButton text={buttonText} onClick={renderPermanentAccessInstruction} />
	const redirectButton = <RedirectButton type={RedirectButtonType.DIALOG} />;
	const buttons = [permanentAccessButton, redirectButton];
	return <Message marginTopPc='17' marginTopMobile='15' textHeader={textHeader} emoticon={thumbupImg} text={text} buttons={buttons} />;
};

function renderPermanentAccessInstruction() {
	render(PermanentAccessInstruction);
}

export default TemporaryAccessProvided;