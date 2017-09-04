"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//··············································································
//tipos de datos
let mensaje = "franco";
let cualquiera;
cualquiera = new Date();
console.log(cualquiera + " " + mensaje);
//··············································································
//string literales
//cualquier codigo js puede ejecutarse dentro de los string literales
let minombre = "franco";
let miapellido = "sabino";
let miedad = 27;
let stringliteral = `Hola, 
                                Soy ${minombre} ${miapellido} 
                                y tengo ${miedad} años`;
console.log(stringliteral);
//··············································································
//funciones de fecha vs funciones comunes
//··············································································
//desestructuracion de objetos
let cliente = {
    nombre: "franco",
    apellido: "sabino",
    edad: 27
};
//podemos hacer esto con tres variables
let n = cliente.nombre;
let a = cliente.apellido;
let e = cliente.edad;
//pero la desestructuracion del objeto se hace
//no interesa el orden de como se desestructura, si deben tener los mismos nombres
//despues de los : en la desestructuracion del objeto, pasa a ser alias
let { nombre, edad, apellido } = cliente;
console.log(nombre, edad, apellido);
//··············································································
//desestructuracion de arreglos
//a diferencia de la desestructuracion de objetos, en los arreglos es secuencial
let hermanos = ["tomas", "belen"];
//hermano1 tomo tomas y hermano2 tomo belen
let [hermano1, hermano2] = hermanos;
console.log(hermano1, hermano2);
//si quiero mostrar solo belen
let [, hermano3] = hermanos;
console.log(hermano3);
//··············································································
//promesas
//da la posibilidad de ejecutar una tarea cuando una tarea asincrona es terminada
let promesa = new Promise(function (resolve, reject) {
    //hacemos la tarea asincrona
    //podemos hacer cualquier cosa aqui dentro y se ejecutara asincronicamente
    setTimeout(
    //aqui dentro pongo una funcion flecha
    () => {
        console.log("Promesa terminada...");
        //llamamos al resolve para indicar que la PROMESA termino de forma correcta
        resolve();
        //se puede llamar tambien al reject para indicar que termino MAL
        //reject();
    }, 1500);
});
//para observar que el programa sigue la ejecucion y la promesa es asincrona
console.log("Paso 1");
//llamamos a la ejecucion de la promesa
promesa.then(
//funcion a ejecutar cuando se resuelve la promesa de forma correcta = resolve
//funcion flecha
() => console.log("Todo anduvo correctamente"), 
//funcion a ejecutar cuando se resuelve la promesa de forma incorrecta = reject
//funcion flecha
() => console.error("Todo anduvo mal"));
//para observar que el programa sigue la ejecucion y la promesa es asincrona
console.log("Paso 2");
function saberNombre(animal) {
    console.log("El nombre animal es :" + animal.nombre);
}
function saberTipo(animal) {
    console.log("El tipo animal es :" + animal.tipo);
}
//objeto humano de tipo Carnivoro que es interface
let humano = {
    nombre: "razahumana",
    tipo: "humanos"
};
saberNombre(humano);
saberTipo(humano);
//······································································
//Importacion de modulos en typescript
//da la posibilidad de importar objetos desde distintas carpetas
//para que una clase sea exportable debe tener el prefijo "export"
//si tenemos que importar muchas clases de una carpeta, conviene hacer un nuevo archivo
//en esa carpeta que "exporte todas las clases de ese paquete" y en el lugar donde necesito utilizar
//los archivos solo importo el nuevo archivo (dentro tiene las exportaciones de las clases)
//······································································
//decoradores de clase
let Villano = class Villano {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
Villano = __decorate([
    consola
], Villano);
//esta funcion recibe un constructor pero no se sabe de que tipo
function consola(constructor) {
    console.log(constructor);
    console.log("Se esta ejecutando la funcion");
}
