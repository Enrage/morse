function morse_decode(morseStr, el) {
	let morseArr = {
		'.-': 'a',
		'-...': 'b',
		'-.-.': 'c',
		'-..': 'd',
		'.': 'e',
		'..-.': 'f',
		'--.': 'g',
		'....': 'h',
		'..': 'i',
		'.---': 'j',
		'-.-': 'k',
		'.-..': 'l',
		'--': 'm',
		'-.': 'n',
		'---': 'o',
		'.--.': 'p',
		'--.-': 'q',
		'.-.': 'r',
		'...': 's',
		'-': 't',
		'..-': 'u',
		'...-': 'v',
		'.--': 'w',
		'-..-': 'x',
		'-.--': 'y',
		'--..': 'z'
	};

	let words = morseStr.split('   ');
	let letters = [];
	let translate = [];

	for (let key in words) {
		letters = words[key].split(' ');
		translate[key] = [];
		for (let i in letters) {
			translate[key] += morseArr[letters[i]];
		}
	}
	let text = translate.join(' ');

	if (text === 'undefined') {
		text = 'Введите код морзе!';
		document.getElementById('error').textContent = text;
		document.getElementById('error').style.display = 'block';
	} else {
		document.getElementById(el).innerHTML = text;
		document.getElementById('success').style.display = 'block';
	}
}

let button = document.getElementById('submit');
button.addEventListener('click', function(e) {
	e.preventDefault();
	document.getElementById('error').textContent = '';
	document.getElementById('error').style.display = 'none';
	document.getElementById('result').innerHTML = '';
	document.getElementById('success').style.display = 'none';
	let morseStr = document.getElementById('morse_str').value.trim();
	morse_decode(morseStr, 'result');
});