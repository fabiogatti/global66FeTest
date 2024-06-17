# Global 66 Frontend Test

Bienvenidos a mi prueba para desarrollador frontend para la empresa Global 66. A continuación un breve resumen del proyecto.

La version de github pages del prjecto se encuentra [aquí](https://fabiogatti.github.io/global66FeTest/)
(Para hacer un preview aproximado del funcionamiento de la app, tiene un par de bugs con las rutas pero no es relevante y no suceden en la versión local)

## Tecnologias

Para este proyecto utilice las siguientes tecnologias:
-VueJs: Requerido para la prueba y es con el que mas comodo me siento desarrollando
-Pinia: Una store para Vue que he querido probar desde hace un tiempo
-Vue Router: Para enrutar las diferentes paginas de la app
-Tailwind: Para hacer mas facil la creacion de estilos, cuestion de costumbre además
-Vue i18n: Para la internacionalizacion de los textos entre Ingles y Español
-Vite: Me gusta por su velocidad de compilacion
-Visual Studio Code: Ha sido el programa que mas he utilizado de manera profesional para crear código

## Proceso

Un poco del pensamiento detrás del desarrollo de la app.
Empece por la inclusión de los paquetes que creia necesarios y que queria incluir, empece por vue router, el store (pinia), tailwind y por al final pense que seria util tener algo de valor agregado utilizando el i18n.
Comence el desarrollo dividiendo el proyecto, creando las carpetas necesarias (el store, el router, las vistas y los componentes), fui llenando algunos parametros iniciales como los colores en el archivo de configuracion de tailwind junto con algunas imagenes y vectores en la carpeta assets.
Despues continue con el registro de los componentes necesarios en el archivo Main.js, el desarrollo de la vista Home, el spinner y la siguiente vista AllList, en la cual me toco decidir si iba a realizar una sola vista o dos para cada uno de los botones (All y Favorites), al final decidi hacerlo en una sola vista ya que me parecio mas fácil de manejar y lógico. Continué creando cada componente necesario para que funcionara la vista AllList y luego de terminarlos continue creando la pagina/componente PageNotFound (Que se activa cuando hay una ruta no permitida o que aparece en el componente AllList cuando buscas algo y no encuentras ningún resultado)
Despues de añadir la logica del store al componente e integrar el componente search, continué con el desarrollo del modal y la traida de la información relevante desde la api para cada pokemon (Acá encontré mas fácil hacer el llamado al número en vez del nombre por un par de preocupaciones con pokémons como nidoran hembra y macho y mr mime).
Procedi finalmente a revisar la aplicación completa, en su modo móvil para ajustar detalles de estilos. Termine agregando un par de toggles para los controladores de modo oscuro e idioma, cambie el titulo de la página y coloque el icono de pokebola para que se viera mas completo.

Construi la UI teniendo la mayor atencion a los detalles posibles, tanto los colores como las fuentes, los tamaños y los bordes redondos.

P.s.: Espero de todo corazón que los toggles que agregué para darle mayor valor a la app no influyan negativamente en su evaluación ya que pueden ser removidos de ser necesario y no afectan la funcionalidad de ninguna forma.

## Para correr este proyecto

Clona el repositorio y corre el siguiente comando para instalar las dependencias necesarias en la carpeta:

```
npm install
```

Una vez finalizado, continúa con el siguiente comando para correr la app:

```
npm run dev
```

Y voilà! La aplicación deberia correr en [Localhost:5173](http://localhost:5173/)

Espero no tenga ningún problema y disfrute explorando la app!
