"use strict";
//··············································································
//tipos de datos
var mensaje = "franco";
var cualquiera;
cualquiera = new Date();
console.log(cualquiera + " " + mensaje);
//··············································································
//string literales
//cualquier codigo js puede ejecutarse dentro de los string literales
var minombre = "franco";
var miapellido = "sabino";
var miedad = 27;
var stringliteral = "Hola, \n                                Soy " + minombre + " " + miapellido + " \n                                y tengo " + miedad + " a\u00F1os";
console.log(stringliteral);
//··············································································
//funciones de fecha vs funciones comunes
//··············································································
//desestructuracion de objetos
var cliente = {
    nombre: "franco",
    apellido: "sabino",
    edad: 27
};
//podemos hacer esto con tres variables
var n = cliente.nombre;
var a = cliente.apellido;
var e = cliente.edad;
//pero la desestructuracion del objeto se hace
//no interesa el orden de como se desestructura, si deben tener los mismos nombres
//despues de los : en la desestructuracion del objeto, pasa a ser alias
var nombre = cliente.nombre, edad = cliente.edad, apellido = cliente.apellido;
console.log(nombre, edad, apellido);
//··············································································
//desestructuracion de arreglos
//a diferencia de la desestructuracion de objetos, en los arreglos es secuencial
var hermanos = ["tomas", "belen"];
//hermano1 tomo tomas y hermano2 tomo belen
var hermano1 = hermanos[0], hermano2 = hermanos[1];
console.log(hermano1, hermano2);
//si quiero mostrar solo belen
var hermano3 = hermanos[1];
console.log(hermano3);
