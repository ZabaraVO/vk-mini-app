import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import InformationPanel from './panels/InformationPanel';
import ContentPanel from './panels/ContentPanel';
import { ThymeleafParamName, getThymeleafParam } from './utils/thymeleaf-utils';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.informationPanelId = 'information';
		this.contentPanelId = 'content';
		this.state = {
			activePanel: this.contentPanelId
		}
	};

	changeActivePannel(panelId) {
		this.setState({ activePanel: panelId });
	};

	render() {
		const ComponentWrapper = ({ tag }) => {
			const Tag = tag;
			return <Tag />;
		}
		const content = <ComponentWrapper tag={this.props.type} />;
		const panelHeaderText = getThymeleafParam(ThymeleafParamName.PANEL_HEADER_TEXT);
		const contentPanel = <ContentPanel id={this.contentPanelId} headerText={panelHeaderText}
			content={content} infoPanelActviator={() => this.changeActivePannel(this.informationPanelId)} />;
		const informationPanel = <InformationPanel id={this.informationPanelId}
			panelHeaderText={panelHeaderText} contentPanelActviator={() => this.changeActivePannel(this.contentPanelId)} />;
		return (
			<View activePanel={this.state.activePanel} >
				{contentPanel}
				{informationPanel}
			</View>
		);
	}
}

export default App;