// Capitalizes even letters and adds 5 to UTF-8 code of other characters
function melisasCrypter(string) {
	return string
		.split('')
		.map(
			(letter, index) =>
				index % 2 === 0 ? String.fromCodePoint(letter.codePointAt(0) + 5) : letter.toUpperCase()
		)
		.join('');
}

function melisasDeCrypter(encryptedString) {
	return encryptedString
		.split('')
		.map((letter, index) => {
			return index % 2 === 0
				? String.fromCodePoint(letter.codePointAt(0) - 5)
				: letter.toLowerCase();
		})
		.join('');
}

console.log(melisasCrypter('booger'));

console.log(melisasDeCrypter(melisasCrypter('booger')));
