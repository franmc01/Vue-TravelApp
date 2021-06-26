import Home from "@/views/Home";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination-details/:id",
    name: "destination-details",
    component: () =>
      import(
        /*webpackChunkName: "destination-details"*/ "../views/DestinationDetails.vue"
      ),
  },
];

const router = new VueRouter({
  linkExactActiveClass: "my-custom-active-class",
  routes,
});

export default router;
