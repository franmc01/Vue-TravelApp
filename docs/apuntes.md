## router-view

- Es un componente funcional que renderiza el componente correspondiente a la ruta dada. Dado que estamos creando una
  SPA ```<router-view />``` tiene como función ayudarnos a cambiar nuestras vistas. Básicamente, ```<router-view />```
  siempre renderiza el contenido de la página activa. Esto quiere decir que cuando un usuario visita la página de
  inicio, ```<router-view />``` renderizará el contenido de nuestra página de inicio y asi con cada una de las páginas.

- En resumen ```<router-view />``` es el componente que permite la navegación del usuario en una aplicación con soporte
  para rutas.

## División de código de webpack

- Usando la característica de división de código de Webpack, podemos dividir nuestro bundle en muchos archivos pequeños,
  llamados chunks o bundles. (Esto es utilizado cuando queremos aplicar lazy loading en Vue). Una de las ventajas es que
  lazy loading permite dividir nuestro código y controlar que nuestro bundle solo cargue lo que se está solicitando, la
  división de código hace a nuestra aplicación mucho más rápida,

````
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }
````

### Nota sobre el v-for

- Cada vez que usamos un v-for necesitamos agregar un atributo:key. Esto nos permite mantener el seguimiento de que
  elemento es cuál para cuando se necesite reordenar o reusar dichos elementos.

### Atributo scoped

- Sirve para indicar que aquel elemento, que algo por ejemplo los estilos, son solo válidos para dicho archivo, más no
  los otros.

## Navigation Guards

- Como su nombre indica, estos navigation guards proporcionados por vue-router se utilizan principalmente para proteger
  las navegaciones, ya sea redirigiéndolas o cancelándolas. Hay varias formas de hacerlo, puede ser globalmente, por
  ruta o en el componente.
- Nos permiten ejecutar código antes y después de que la navegación suceda.

### Tips

- @ es un alias para /src

- Los nombres de componentes deben ser de múltiples palabras para que no tengan conflictos con elementos existentes o
  futuros de HTML,los cuales son todos de una sola palabra. Para componentes de una única instancia es altamente
  recomendable de acuerdo a la guía de estilo oficial llamar a dichos componentes usando The, por ejemplo, 'The
  Navigation'.

- Si queremos cambiar la clase active por defecto que agrega la etiqueta router link a los enlaces activos, podemos ir
  al router y en la seccion de scripts agregar la propiedad ```linkExactActiveClass: "my-custom-active-class",``` y
  entre comillas el nombre de la clase.

- Las propiedades computadas nos permiten definir una propiedad que es usada igual que los datos pero que también puede
  tener lógica personalizada que es cacheada en base a sus dependencias.

### Importante

- Vue Router no observa ningún cambio si el mismo componente está siendo usado. En español seria que si tenemos un
  componente que va renderizar la informacion de n usuarios por ejemplo en base a la url, vue router no actualizará la
  info del componente de manera automatica si se cambia la ruta por ejemplo de usuario 1 a usuario 2; para cambiar este
  comportamiento debemos hacer lo siguiente: ``` <router-view :key="this.$route.path" /> ``` Al hacer esto cualquier
  cambio a la ruta ejecutará una recarga del componente junto con los nuevos datos; sin embargo usar ```$route``` en tu
  componente crea un acoplado con la ruta lo cual limita la flexibilidad del componente dado que sólo puede ser usado en
  ciertas URLs. Para desacoplar los componente del router, podemos usar props.

- El modo por defecto de vue-router es modo hash, usa el hash de la URL para simular una URL entera para que así la
  página no sea recargada cuando la URL cambia. Si queremos deshacernos del hash, podemos usar el modo historia del
  router, el cual usa la API history.pushState para lograr navegación URL sin recargar la pagina. Al usar modo historia,
  la URL se verá "normal".

- La directiva v-on escucha eventos del DOM y ejecuta algo de JavaScript al momento de ser ejecutado.

- Un método es una función asociada con la instancia de Vue. Los métodos son definidos dentro de la propiedad 'methods'.

- this.$router.go(n): Este método toma un solo entero como parámetro que indica cuántos pasos avanzar o retroceder en la
  pila del historial, similar a window.history.go(n).

- Transiciones: Vue nos proporciona un componente transition wrapper que nos permite agregar transiciones de entrada o
  salida para cualquier elemento o componente. Cuando un elemento es envuelto en un componente de transición, Vue
  automáticamente comprobará si el elemento destino tiene transiciones CSS o animaciones aplicadas, y si lo hace, la
  clase de CSS de la transición será agregada o removida en el momento indicado.
- Vue ofrece dos modos de transiciones:
    - “in-out”: El elemento nuevo entra primero, luego, cuando se completa, el elemento actual sale.
    - “out-in”: El elemento actual sale primero, luego, cuando está completo, el nuevo elemento entra.
