import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DefaultLayout from '../layout/DefaultLayout.vue'
import CatView from '../views/CatView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: '/cat',
        name: 'Cat',
        component: CatView
      },
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
