import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { exists } from '../utils/utils';
import { ThymeleafParamName, getThymeleafParamInt } from '../utils/thymeleaf-utils';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

const ContentPanel = ({ id, headerText, content, infoPanelActviator }) => {
	const permanentAccessProvideResult = getThymeleafParamInt(ThymeleafParamName.PERMANENT_ACCESS_PROVIDE_RESULT);
	const showPanelHeader = !exists(permanentAccessProvideResult);
	return (
		<Panel id={id}>
			{showPanelHeader &&
				<PanelHeader>
					{headerText}
				</PanelHeader>}
			<div style={{ position: "absolute", color: "#d5d5d5", marginTop: "10px", right: "10px", cursor: "pointer" }} onClick={infoPanelActviator} >
				<Icon28InfoOutline width={50} height={50} />
			</div>
			{content}
		</Panel>
	);
};

export default ContentPanel;
