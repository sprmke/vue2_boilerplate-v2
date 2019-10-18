import Vue from "vue";
import Router from "vue-router";
// Auth
import AuthContainer from '@/app/modules/auth-view/containers/auth-container/auth-container.vue';
import AuthLogin from '@/app/modules/auth-view/components/auth-login/auth-login.vue';
import AuthRegister from '@/app/modules/auth-view/components/auth-register/auth-register.vue';
// Main
import MainView from '@/app/modules/main-view/main-view.vue';
import HomeContainer from '@/app/modules/main-view/home/containers/home-container/home-container.vue';
import ProfileContainer from '@/app/modules/main-view/profile/containers/profile-container/profile-container.vue';
// Error
import ErrorView from '@/app/modules/error-view/error-view.vue';

Vue.use(Router);
const rootTitle = 'Vue Boilerplate';

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: MainView,
      meta: {title: rootTitle},
      children: [
        {
          path: '/',
          name: "Home Container",
          component: HomeContainer,
          meta: {title: rootTitle},
        },
        {
          path: '/profile',
          name: "Profile Container",
          component: ProfileContainer,
          meta: {title: `${rootTitle} - Profile`},
        },
      ]
    },
    {
      path: "/auth",
      component: AuthContainer,
      children: [
        {
          path: '/login',
          name: "Auth Login",
          component: AuthLogin,
          meta: {title: `${rootTitle} - Login`},
        },
        {
          path: '/register',
          name: "Auth Register",
          component: AuthRegister,
          meta: {title: `${rootTitle} - Register`},
        },
      ]
    },
    {
      path: "*",
      name: "ErrorView",
      component: ErrorView,
      meta: {title: `${rootTitle} - Page Not Found`},
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
