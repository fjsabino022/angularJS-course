/*
ECMAScript v6 (Abreviado como ES6 o ES2015) es el estándar que seguirá JavaScript a 
partir de Junio de este año (2015). Hasta el momento la versión de JS que estamos usando en 
nuestros navegadores y Node.js, es la v5.

Agregados en el ECMAScript v6: http://www.arquitecturajava.com/introduccion-javascript-es6/
https://carlosazaustre.es/ecmascript-6-el-nuevo-estandar-de-javascript/

*/

//··············································································
//tipos de datos
let mensaje: string = "franco";
let cualquiera: any;
cualquiera = new Date();

console.log(cualquiera + " " + mensaje);

//··············································································
//string literales
//cualquier codigo js puede ejecutarse dentro de los string literales
let minombre: string = "franco";
let miapellido: string = "sabino";
let miedad: number = 27;

let stringliteral: string = `Hola, 
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
}

//podemos hacer esto con tres variables
let n: string = cliente.nombre;
let a: string = cliente.apellido;
let e: number = cliente.edad;
//pero la desestructuracion del objeto se hace
//no interesa el orden de como se desestructura, si deben tener los mismos nombres
//despues de los : en la desestructuracion del objeto, pasa a ser alias
let { nombre, edad, apellido } = cliente;
console.log(nombre, edad, apellido);

//··············································································
//desestructuracion de arreglos
//a diferencia de la desestructuracion de objetos, en los arreglos es secuencial
let hermanos: string[] = ["tomas", "belen"];

//hermano1 tomo tomas y hermano2 tomo belen
let [hermano1, hermano2] = hermanos;
console.log(hermano1, hermano2);

//si quiero mostrar solo belen
let [, hermano3] = hermanos;
console.log(hermano3);

//··············································································
//promesas
//da la posibilidad de ejecutar una tarea cuando una tarea asincrona es terminada
let promesa = new Promise(function (resolve: any, reject: any) {

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
        }, 1500)
})

//para observar que el programa sigue la ejecucion y la promesa es asincrona
console.log("Paso 1");

//llamamos a la ejecucion de la promesa
promesa.then(
    //funcion a ejecutar cuando se resuelve la promesa de forma correcta = resolve
    //funcion flecha
    () => console.log("Todo anduvo correctamente"),
    //funcion a ejecutar cuando se resuelve la promesa de forma incorrecta = reject
    //funcion flecha
    () => console.error("Todo anduvo mal")
)

//para observar que el programa sigue la ejecucion y la promesa es asincrona
console.log("Paso 2");

//··············································································
//Interfaces
//da la posibilidad de establecer tipos de objetos
interface Carnivoro {
    tipo: string,
    nombre: string
}

function saberNombre(animal: Carnivoro) {
    console.log("El nombre animal es :" + animal.nombre);
}


function saberTipo(animal: Carnivoro) {
    console.log("El tipo animal es :" + animal.tipo);
}

//objeto humano de tipo Carnivoro que es interface
let humano: Carnivoro = {
    nombre: "razahumana",
    tipo: "humanos"
}

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
@consola
class Villano{
    constructor(public nombre:string){

    }
}

//esta funcion recibe un constructor pero no se sabe de que tipo
function consola(constructor:Function){
    console.log(constructor)
    console.log("Se esta ejecutando la funcion");
}