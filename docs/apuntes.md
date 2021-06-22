## router-view
Es un componente funcioanal que  renderiza el componente
correspondiente a la ruta dada. Dado que se estamos creado una SPA ```<router-view />``` tiene como función ayudarnos a cambiar nuestras vistas. Básicamente, ```<router-view />``` siempre
renderiza el contenido de la página activa. Esto quiere decir que cuando un usuario visita la página de inicio, ```<router-view />``` renderizará el contenido
de nuestra página de inicio y asi con cada una de las paginas.

En resumen ```<router-view />``` es el componente que permite la navegación del usuario en una aplicación con soporte para rutas.



## División de código de webpack
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
Cada vez que usamos un v-for necesitamos
agregar un atributo :key.Esto nos permite mantener el seguimiento
de que elemento es cual para cuando se necesite reordenar
o reusar dichos elementos.

### Atributo scoped
Sirve para indicar que aquel elemento, que algo por ejemplo los estilos, son solo validos para dicho archivo, mas no lo demas.



### Tips
 - @ es un alias para /src