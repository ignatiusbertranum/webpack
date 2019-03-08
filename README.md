Intro
-----
Múltiples ejemplos hechos en el curso de Webpack de la plataforma online de platzi.com

El curso está hecho para la versión 3 de Webpack, pero aquí han sido todos los ejemplos adaptados a Webpack 4

Iniciar un nuevo proyecto JS en la carpeta dónde estamos
--------------------------------------------------------
npm init

Instalar webpack en el proyecto actual
--------------------------------------
npm install webpack --save-dev

--save: para que se guarde en nuestro package.json
-dev: para que se guarde como una dependencia de desarrollo (no de producción)

Ver la versión de una dependencias instalada del proyecto actual
----------------------------------------------------------------
npm list [nombre dependencia]
EJ: npm list webpack

Ejecutar un script del package.json
-----------------------------------
npm run [nombre script]
EJ: npm run build

Instalar loaders
----------------
Para CSS: npm install --save-dev style-loader css-loader
Para extraer en fichero: 
npm install --save-dev extract-text-webpack-plugin
(versión 4 de Webpack) npm install --save-dev mini-css-extract-plugin