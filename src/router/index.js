import Home from "../views/Home";
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true,
  },
  {
    path: "/destination/:slug",
    name: "destination-details",
    props: true,
    beforeEnter: (to, from, next) => {
      //    to: Route: el objeto de ruta de destino al que se está navegando.
      //    from: Route: la ruta actual de la que se está navegando.
      //    next: Function: se debe llamar a esta función para resolver el hook. La acción depende de los  argumentos proporcionados para next:
      //       next(): pasa al siguiente hook en la tubería. Si no quedan hooks, se confirma la navegación .

      //      next(false): aborta la navegación actual. Si se cambió la URL del navegador (ya sea manualmente por el usuario o mediante el botón Atrás), se restablecerá a la from ruta.

      //      next('/') o next({ path: '/' }) : redirigir a una ubicación diferente. La navegación actual se cancelará y se iniciará una nueva. Puede pasar cualquier objeto a la ubicación next, que le permite especificar opciones como replace: true, name: 'home'y cualquier opción que se utiliza en router-link's toprop orouter.push

      //    next(error): (2.4.0+) si el argumento pasado next es una instancia de Error, la navegación se cancelará y el error se pasará a las devoluciones de llamada registradas mediante router.onError().

      // IMPORTANTE: Hay que asegurarse de que la next función se llame exactamente una vez en cualquier paso a través de la protección de navegación. Puede aparecer más de una vez, pero solo si las rutas lógicas no se superponen, de lo contrario el gancho nunca se resolverá ni producirá errores.
      const existe = store.destinations.find(
        (destino) => destino.slug === to.params.slug
      );

      if (existe) {
        next();
      } else {
        // no podemos ni debemos reemplazar la vista actual con una ruta nombrada que tenga un asterisco como path. Lo que tenemos que hacer es reemplazarlo con una ruta explicita, para aquello podriamos usar alias a las rutas
        next({ name: "notFound" });
      }
    },
    component: () =>
      import(
        /*webpackChunkName: "destination-details"*/
        "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /*webpackChunkName: "experienceDetails"*/
            "../views/ExperienceDetail.vue"
          ),
      },
    ],
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(
        /*webpackChunkName: "NotFound"*/
        "../views/NotFound.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 140 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
  linkExactActiveClass: "my-custom-active-class",
  routes,
});

export default router;
