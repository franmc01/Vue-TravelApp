import Home from "@/views/Home";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/destination-details/:slug",
    name: "destination-details",
    props: true,
    component: () =>
      import(
        /*webpackChunkName: "destination-details"*/ "../views/DestinationDetails.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "my-custom-active-class",
  routes,
});

export default router;
