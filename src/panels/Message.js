import React from 'react';
import styles from './style.module.css';
import { ThymeleafParamName, getThymeleafParamInt } from '../utils/thymeleaf-utils';
import { exists } from '../utils/utils';
import { handleLineBreakers } from './utils';
import PlatformType from '../utils/PlatformType';

const Message = ({ marginTopPc, marginTopMobile, textHeader, emoticon, text, content, buttons }) => {
	const thPlatformType = getThymeleafParamInt(ThymeleafParamName.PLATFORM_TYPE);
	const isMobile = thPlatformType !== PlatformType.PC;
	const marginTop = isMobile === true ? marginTopMobile : marginTopPc;
	return (
		<div style={{ marginTop: (marginTop + 'vh') }}>
			<div className={styles.container}>
				{exists(textHeader) && <div className={styles.textHeader}>{handleLineBreakers(textHeader)}</div>}
				<img className={styles.emoticon} src={emoticon} alt="" />
				{exists(text) && <div className={`${styles.wrapper} ${styles.text}`}>{handleLineBreakers(text)}</div>}
			</div>
			{exists(content) && <div className={styles.wrapper}>{content}</div>}
			{
				exists(buttons) && buttons.map((button) => {
					if (!exists(button)) {
						return [];
					}
					return (button);
				})
			}
		</div>
	);
};

export default Message;