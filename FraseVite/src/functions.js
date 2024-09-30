'use strict'

function letters(cadena) {
	return cadena.length
}

function words(cadena) {
	return (cadena.trim().split(' ')).length
}

function upperString(cadena) {
	return cadena.toUpperCase()
}

function titleString(cadena) {
	// Fragmenta la cadena en palabras, y con map, recorre cada palabra y la convierte en un array de letras, poniendo en mayúscula la primera letra de cada palabra, juntando el resto de la palabra y cuando no hay mas palabras las une con el join a un espacio.
	return cadena.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

function backwardsLetters(cadena) {
	// Con split, fragmenta la cadena en letras, con reverse, invierte el orden de las letras y con join, las une.
	return cadena.split('').reverse().join('')
}	

function backwardsWords(cadena) {
	// igual que la anterior pero cambiado el separado para que sea un espacio.
	return cadena.split(' ').reverse().join(' ')
}

function palindrome(cadena) {
	// Se crea una cadena limpia para usar de base y evitar repeticion de codigo, eliminando todos los espacion usando un expresion regular, que tube que buscar, y se pone en mayusculas, luego se llama a la funcion backwardsLetters hecha anterior mente
	const cadenaComparar = cadena.replace(/\s/g, "").toUpperCase()
	return cadenaComparar === backwardsLetters(cadenaComparar)
}

export {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
