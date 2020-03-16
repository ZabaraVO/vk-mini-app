import React from 'react';
import styles from './style.module.css';
import { ThymeleafParamName, getThymeleafParamWithDefault } from '../utils/thymeleaf-utils';
import Message from './Message';
import infoImg from '../img/info.png';
import { createRegisteredDependentRedirectButton } from './utils';
import { Link } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { PanelHeaderBack } from '@vkontakte/vkui';

const InformationPanel = ({ id, panelHeaderText, contentPanelActviator }) => {
	const content =
		<div className={styles.container}>
			<Link href="https://vk.com/dev/uprivacy" target="_blank">Политика конфиденциальности</Link>
			<p><Link href="https://vk.com/dev/uterms" target="_blank">Пользовательское соглашение</Link></p>
		</div>;
	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={contentPanelActviator} />}>
				{panelHeaderText}
			</PanelHeader>
			<Message marginTopPc='25' marginTopMobile='25' textHeader="Информация" content={content} />
		</Panel>);
};

export default InformationPanel;