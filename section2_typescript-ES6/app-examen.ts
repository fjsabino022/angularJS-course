
// Uso de Let y Const
let nombre1:string = "Ricardo Tapia";
let edad1:number = 23;

const PERSONAJE : {nombre:string, edad:number}  = {
  nombre: nombre,
  edad: edad
};

// Cree una interfaz que sirva para validar el siguiente objeto
interface Disciplina {
  nombre:string,
  artesMarciales: string[]
};

let batman : Disciplina = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

// Convertir esta funcion a una funcion de flecha
// function resultadoDoble(a, b) {
//   return (a + b) * 2
// }

let resultadoDoble = (a:number, b:number) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre:string, poder?:boolean , arma:string = "arco") {
  var mensaje;
  if (poder) {
    mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  } else {
    mensaje = nombre + " tiene un " + poder
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectanculo{

  base:number;
  altura:number;

  constructor(){

  }
  
  calcularAltura():number{
    return this.altura * this.altura;
  }
}

let rectangulo:Rectanculo =  new Rectanculo;




