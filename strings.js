let name = "Giovanni"
let lastname = "Huerta"
let age = 20;

console.log("soy "+ name + ' y mi apellido es ' + lastname )

console.log("I'm " + name + " " + lastname);
console.log('I\'m ' + name + " " + lastname);

// Imprimir Soy Giovanni y tengo 20 años //
// Strings Templates o Strings Literals
// placeholder ${}
console.log(`Soy ${ name } ${ lastname} y tengo ${ age } años`);

// Metodos y atributos para Strings
const texto = "Este es un texto";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
