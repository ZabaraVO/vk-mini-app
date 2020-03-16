const LINE_BREAKER = '\n';

export function exists(obj) {
	return obj !== undefined && obj !== null;
}

export function strIsBlank(str) {
	return !exists(str) || str === '';
}

export function getLines(str) {
	if (strIsBlank(str)) {
		return str;
	}
	return str.split(LINE_BREAKER);
}

export function isString(val) {
	return typeof val === 'string';
}

export function strContains(str, substr) {
	if (strIsBlank(str) || !exists(substr)) {
		return false;
	}
	return str.indexOf(substr) !== -1;
}