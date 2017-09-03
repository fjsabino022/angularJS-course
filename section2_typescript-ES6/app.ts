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
    let n:string = cliente.nombre;
    let a:string = cliente.apellido;
    let e:number = cliente.edad;
    //pero la desestructuracion del objeto se hace
        //no interesa el orden de como se desestructura, si deben tener los mismos nombres
        //despues de los : en la desestructuracion del objeto, pasa a ser alias
    let {nombre, edad, apellido} = cliente;
    console.log(nombre, edad, apellido);

//··············································································
//desestructuracion de arreglos
    //a diferencia de la desestructuracion de objetos, en los arreglos es secuencial
let hermanos:string[] = ["tomas", "belen"];

//hermano1 tomo tomas y hermano2 tomo belen
let [hermano1, hermano2] = hermanos;
console.log(hermano1, hermano2);

//si quiero mostrar solo belen
let [ , hermano3] = hermanos;
console.log(hermano3);

//··············································································
//promesas

