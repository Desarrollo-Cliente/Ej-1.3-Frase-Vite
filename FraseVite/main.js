import { letters, words, upperString, titleString, backwardsLetters, backwardsWords, palindrome } from './src/functions.js'
document.querySelector('#app').innerHTML = 
`
<h1>Funciones de cadenas</h1>
`
const prompt2 = prompt('Introduce una cadena de texto: ');
console.log(letters(prompt2));
console.log(words((prompt2)));
console.log(upperString((prompt2)));
console.log(titleString((prompt2)));
console.log(backwardsLetters((prompt2)));
console.log(backwardsWords((prompt2)));
console.log(palindrome((prompt2)));