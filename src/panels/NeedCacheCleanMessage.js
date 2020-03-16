import React from 'react';
import Message from './Message';
import { ThymeleafParamName, getThymeleafParam, getThymeleafParamInt } from '../utils/thymeleaf-utils';
import { exists } from '../utils/utils';
import PlatformType from '../utils/PlatformType';

const NeedCacheCleanMessage = () => {
	const textHeader = getThymeleafParam(ThymeleafParamName.NEED_CACHE_CLEAN_HEADER);
	const platformType = getThymeleafParamInt(ThymeleafParamName.PLATFORM_TYPE);
	let text;
	if (platformType === PlatformType.PC) {
		text = getThymeleafParam(ThymeleafParamName.NEED_CACHE_CLEAN_PC_TEXT);
	} else {
		text = getThymeleafParam(ThymeleafParamName.NEED_CACHE_CLEAN_MOBILE_TEXT);
	}
	if(exists(text)){
		text += getThymeleafParam(ThymeleafParamName.NEED_CACHE_CLEAN_COMMON_TEXT);
	}	
	return <Message marginTopPc='15' marginTopMobile='15' textHeader={textHeader} text={text} />;
}

export default NeedCacheCleanMessage;