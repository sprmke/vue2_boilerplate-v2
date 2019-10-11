import Vue from "vue";
import Router from "vue-router";
import MainView from '@/app/modules/main-view/main-view.vue';
import ErrorView from '@/app/modules/error-view/error-view.vue';
import HomeContainer from '@/app/modules/main-view/home/containers/home-container/home-container.vue';

Vue.use(Router);
const rootTitle = 'Vue Boilerplate';

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "MainView",
      component: MainView,
      meta: {title: rootTitle},
      children: [
        {
          path: '/',
          component: HomeContainer,
          meta: {title: rootTitle},
        }
      ]
    },
    {
      path: "*",
      name: "ErrorView",
      component: ErrorView,
      meta: {title: `{rootTitle} - Page Not Found`},
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
