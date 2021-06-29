import Home from "@/views/Home";
import Vue from "vue";
import VueRouter from "vue-router";

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
    component: () =>
      import(
        /*webpackChunkName: "destination-details"*/
        "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: () =>
          import(
            /*webpackChunkName: "experienceDetails"*/
            "../views/ExperienceDetail.vue"
          )
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    component: () =>
      import(
        /*webpackChunkName: "NotFound"*/
        "../views/NotFound.vue"
      )
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "my-custom-active-class",
  routes,
});

export default router;
