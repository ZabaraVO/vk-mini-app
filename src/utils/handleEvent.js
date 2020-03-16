import start from './start';
import { handleAccessProvided, handleTemporaryAccessDeclined } from './accessRequest';

function handleEvent(event) {
	const detail = event.detail;
	switch (detail.type) {
		case 'VKWebAppViewRestore':
			handleViewRestore();
			break;
		case 'VKWebAppAccessTokenReceived':
			handleAccessProvided(detail.data);
			break;
		case 'VKWebAppAccessTokenFailed':
			handleTemporaryAccessDeclined();
			break;
		default:
			break;
	}
}

function handleViewRestore() {
	start();
}

export default handleEvent;