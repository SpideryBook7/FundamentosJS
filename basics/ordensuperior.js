// Funciones de Orden Superior
// High Order Functions
// Funciones que reciben como parametros
// màs funciones

const myFunctionWhithBigName = () =>{
    console.log('Funcion Inicial');
}

console.log(myFunctionWhithBigName);
myFunctionWhithBigName();

const myFun =  myFunctionWhithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Funcion Uno');
}

const funTwo = (nombre) =>{
    console.log("hi " + nombre);
    console,log("Ejecuta Funcion Dos");
}

funOne();
funTwo('Gus');

const funThree = (otherFunction) =>{
    console.log('Inicia Funcion tres');
    otherFunction();
    console.log('Termina Funciòn Tres');
}

funThree(funOne);
funThree(() => console.log('Funcion de Flecha'));