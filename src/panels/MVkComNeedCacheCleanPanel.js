import React from 'react';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import styles from './style.module.css';
import { handleLineBreakers } from './utils';
import { exists } from '../utils/utils';

class MVkComNeedCacheCleanPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.buttonClick = this.buttonClick.bind(this);
	};

	getValue(isMobile) {
		if (!exists(this.state.currentIsMobile)) {
			return false;
		}
		const currentIsMobile = this.state.currentIsMobile;
		if (isMobile) {
			return currentIsMobile;
		}
		return !currentIsMobile;
	}

	buttonClick(isMobile) {
		this.setState({ currentIsMobile: isMobile });
	};

	createTextContainer(text, isMobile) {
		return (
			<Div className={`${styles.text}`} {...(!this.getValue(isMobile) && { style: { display: 'none' } })}>
				{handleLineBreakers(text)}
			</Div>
		);
	};

	getButtonLevel(isMobile) {
		return this.getValue(isMobile) ? { level: "primary" } : { level: "secondary" };
	}

	render() {
		return (
			<div>
				<Div className={styles.flex}>
					<Button size="l" stretched {...(this.getButtonLevel(true))} onClick={() => this.buttonClick(true)} style={{ marginRight: 8, width: '50%' }}>Телефон</Button>
					<Button size="l" stretched {...(this.getButtonLevel(false))} onClick={() => this.buttonClick(false)} style={{ width: '50%' }}>Компьютер</Button>
				</Div>
				{this.createTextContainer(this.props.mobileText, true)}
				{this.createTextContainer(this.props.pcText, false)}
			</div>
		);
	}
};

export default MVkComNeedCacheCleanPanel;