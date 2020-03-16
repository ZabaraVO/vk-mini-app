import React from 'react';
import { ThymeleafParamName, getThymeleafParam, getThymeleafParamInt } from '../utils/thymeleaf-utils';
import PlatformType from '../utils/PlatformType';
import Message from './Message';
import RedirectButton from './RedirectButton';
import RedirectButtonType from './RedirectButtonType';
import { handleLineBreakers } from './utils';
import styles from './style.module.css';
import { exists } from '../utils/utils';

const PermanentAccessInstruction = () => {
	const textHeader = getThymeleafParam(ThymeleafParamName.PER_ACCESS_INSTRUCTION_HEADER);
	const intro = getThymeleafParam(ThymeleafParamName.PER_ACCESS_INSTRUCTION_INTRO);
	const clarificationHeader = getThymeleafParam(ThymeleafParamName.PER_ACCESS_INSTRUCTION_CLARIFICATION_HEADER);
	const clarificationText = getThymeleafParam(ThymeleafParamName.PER_ACCESS_INSTRUCTION_CLARIFICATION_TEXT);
	const platformType = getThymeleafParamInt(ThymeleafParamName.PLATFORM_TYPE);

	let mobileText;
	if (platformType === PlatformType.MOBILE) {
		mobileText = getThymeleafParam(ThymeleafParamName.PER_ACCESS_INSTRUCTION_MOBILE_TEXT);
	}

	const perAccessButton = <RedirectButton type={RedirectButtonType.PERMANENT_ACCESS} />;
	const dialogButton = <RedirectButton type={RedirectButtonType.DIALOG} />;
	const buttons = [perAccessButton, dialogButton];
	const content = (
		<div>
			{createTextContainer(handleLineBreakers(intro))}
			<div className={styles.text} style={{ textAlign: 'center', fontWeight: 'bold' }}>{clarificationHeader}</div>
			{createTextContainer(handleLineBreakers(clarificationText))}
			{exists(mobileText) && createTextContainer(handleLineBreakers(mobileText))}
		</div>
	);

	return <Message marginTopPc='10' marginTopMobile='3' textHeader={textHeader} content={content} buttons={buttons} />;
}

function createTextContainer(text) {
	return <div className={`${styles.text} ${styles.bigTextContainer}`} >{text}</div>
}

export default PermanentAccessInstruction;