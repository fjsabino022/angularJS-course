/**
 * Para saber el proceso en linux que esta corriendo en X Puerto:
 * 
 *    sudo lsof -t -i:4200
 * 
 * Para matar el proceso de ese puerto
 * 
 *    sudo kill -9 [ID PROCESO RESULTADO de sudo lsof -t -i:4200]
 * 
 * sudo lsof -t -i:4200
 * sudo kill -9 17671
 * 
 * ##########################PARA INSTALAR BOOTSTRAP DESDE NPM
 *    En la pagina de bootstrap buscamos para instalar npm.
 *    En la pagina de jquery buscamos para instalar npm.
 *    En la pagina de popper buscamos para instalar npm.
 * 
 *    Instalamos estas cosas a nivel de proyecto en este caso dentro de /2.SPA/......
 * 
 *    "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "../node_modules/popper.js/dist/umd/popper.js",
        "../node_modules/jquery/dist/jquery.slim.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"        
      ],

      es super importante que el script de bootstrap este despues del JQUERY ya que 
      depende de JQUERY





   ng g c heroes -is  (con -IS hace que no te cree el archivo .css del componente) 
  installing component
  create src/app/components/heroes/heroes.component.html
  create src/app/components/heroes/heroes.component.spec.ts
  create src/app/components/heroes/heroes.component.ts
  update src/app/app.module.ts

  /*Para generar automaticamnete con el snnipets la ruta
      a-routes
  */

  /*
  Para usar HASH EN LAS RUTAS SE DEBE USAR:
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
  Permite que la url sea: localhost:4200/#home/
  * 

  Variable private: solo son accesibles en el componente donde estan creadas.
  
  ngOnInit: es un metodo que se ejecuta una vez que la pagina esta renderizada, lista para trabajar.

  En el constructor de un componente inicializamos el service que vamos a utilizar en ese componente.

  Export: es una palabra clave que permite a las clases/interfaces poider ser vistas desde otros lugares de la aplicacion.
 
  Pipes: trasnforman los datos en la vista. Solo es para la vista y no cambia nunca el valor
 
  Asyn: es un pipe que permite mostrar informacion que viene de observables o promesas. Que son asyncronos.
 
  Por ejemplo, para colocar internalizacion de argentina: 
  import { LOCALE_ID } from '@angular/core';
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ar' }
  ],
  Para demas codigos de lenguajes consultar:https://www.science.co.il/language/Locale-codes.php
  */ 