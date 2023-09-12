// funciones en javascript

/*
function nombre(params){
    body function
}

const nombre = function (params){
    body function
}
*/

// funciones sin parametros y sin retorno
function saludo(){
    console.log('Helloo!');
}
saludo();

// funciones con parametros sin retorno
const saludaA = function(name){
    console.log('Hola ' + name);
}
saludaA('Clark Kent');

// funciones con parametros  con retorno
const fact = function(num){
    if(num = 0) return 1;
    fact(num -1) * num;
}
const result = fact(5);
console.log(result);

// arrow function o funciones de flecha
// sin parametros y sin retorno
const saludaEnChino =()=> {
    console.log('Ni Hao');
}
saludaEnChino();

// con 1 parametro sin retorno
const mayuscula = (word) => {
    console.log(world.toUpperCase());
}
mayuscula('hola');

const minuscula = word => {
    console.log(world.toLowerCase());
}
minuscula('HELLO');

// dos o mas parametros y con retorno
const fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}
const nombrreCompleto = fullName('Bruce', 'Waine');
consolr.log(nombreCompleto);

// si el return es la unica linea se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/*function duplica(num){
    return num * 2;
}*/

