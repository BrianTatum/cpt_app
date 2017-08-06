export function	nameValid(name) {
	return /^[a-zA-Z]+$/.test(name);
}

export function	emailValid(email) {
	return /^[a-zA-Z0-9\-_\.]+@[a-zA-Z0-9]+(\.[a-zA-A0-9]+)?\.(org|net|com)$/.test(email);
}