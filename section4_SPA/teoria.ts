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
 * 
 */ 