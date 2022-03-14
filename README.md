# AngularChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# challenge

# Challenge Churrasco

Challenge realizado para la empresa Churrasco en Angular 12.2.16
El proyecto y su estructura esta pensado como si se tratara de un proyecto que puede estacalar.

## Arquitectura

En la carpeta Auth nos encontramos con todo lo relacionado al login de usuario, tenemos un auth.module y auth-routin.module. Si bien las rutas children de este modul solo dirigen al login se contempla la posibilidad de que en un futuro tenga otro componente para, por ejemplo, crear una nueva cuenta.
luego tenemos animaciones, interfaces paginas y servicios todos relacionados al login de usuario.

loego tenemos la carpeta Guards donde encontramos los guards que nos bloquean el reingreso al dashboard luego de hacer el logout.

En la carpeta protected nos encontramos con los componentes a los cuales vamos a poder acceder luego de hacer el login. tenemos un componente dashboard que solo contiene el navbar y el router-outlet con sus rutas hijas: products y add products.
tenemos una carpeta de interfaces y otra de servicios donde estan todo lo relacionado a productos.
en la carpeta shared encontramos el navbar , animacinoes y el loading component.

Los estilos los trabaje con Scss, cada componente tiene un archivo de estilos especifico para el componente y en la carpeta app encontramos la carpeta styles que toma ideas de la arqueitectura de Sass 7 1, en donde tenemos variables, mixins, reset de estilos, componentes, formularios, pensado para no repetir el uso de estilos, optimizando la aplicacion y volviendola mas facil de escalar.

## servidor

genere un pequeño servidor con Nodejs con el objetivo de obtener un retorno de la petición post para agregar productos, ya que el link del servicio que me brindaron estaba ubicado en el local host 'http://localhost:3000/addproduct'.
el servidor esta conectado a mongo db, pero no esta enviando la informacion recibida relamente, simplemente a modo de prueba retorna un objeto con la misma estructura de objeto que se brindo en las instrucciones.
