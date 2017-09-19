//COMPONENTES: son clases normales que tienen un decorador.
//DIRECTIVAS ESTRUCTURALES: son expresiones que indican al HTML que acciones debe realizar.
  //ej: *ng-if , *ng-for, etc

  
//Elementos del proyecto ANGULAR2 generados por el ANGULAR/CLI
/**
 * e2e: carpeta que contiene el proyecto para realizar pruebas unitarioas
 * angular-cli.json: es un archivo propio del angular/cli, donde establece  
 *    name de proyecto, 
 *    assets,
 *    donde estan los estilos, 
 *    los scripts, etc.
 * .editorconfig: es para configuracion del editor.
 * .gitignore: se indican todos los archivos que se ignoran en el repositorio.
 * karma.config: es un archivo para realizar pruebas unitarias.
 * package.json: Muestra las dependencias del proyecto.
 *    es un archivo muy importante para el proyecto ya que 
 *    en caso de que se pierdan los modulos de node, se recupera todo.
 *    "dependencies": Dependencias para produccion, indica todo lo que el proyecto utiliza.
 *      --save: dependencias de desarrollo
 *    "devDependencies": DEpendencias de desarrollo, para realizar pruebas locales.
 *      --save-dev: son dependencias de desarrollo.
 * protactor.conf.js: archivo de configuracion para realizar pruebas.
 * tsconfiug.json: archivo de configuracion de typescript. 
 *                Es lo que aprendimos en la seccion 2 (typescript)
 * tslint.js: para visualizar los errores en el editor.
 * 
 * 
 * dentro de src encontramos///////////
 * app/: tiene archivos importantes para la aplicacion y toda la definicion de componentes.
 *  app.module.ts: sirve como libreria de componentes que angular utilizara en la aplicacion.
 *      declarations: litsa de componentes.
 *      imports: importaciones globales. configuracion global 
 *                por ejemplo para conectarse a google, youtube, etc se definirian aca.
 *      providers: son los servicios. 
 *      bootstrap: se le indica a la pagina el componente que se quiere lanzar al principio.
 * styles.css: para agregar estilos que afecten a toda la aplicacion globalmente.
 * app.component.spec.ts: son archivos que tiene cada componente para realizar pruebas unitarias.
 * assets/ : se agregaran todos los recursos estaticos que debera utilizar la aplicacion.
 *          Imagenes, fotos, etc.
 * favicon.ico: es el icono de la aplicacion.
 * main.ts: es el archivo que utiliza el app.module. Angular puede correr en dispositivos moviles
 *    y la variable platformBrowserDynamic podria cambiar segun donde se ejecute la aplicacion.
 * polyfills: permite aumentar la compatibilidad de nuestras aplicaciones. Todo se hace de forma automatica.
 * test.ts: realizar pruebas.
 * typings.d.ts: archivo para definir variables globales de la aplicacion.
 *    Lo que defina aca dentro, son variables que son globales.
 * 
 * 
 * 
 * 
 * 
 */

