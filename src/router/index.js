import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpForm from '@/views/SignUpForm.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {

      needsAuth: true,  // zanči ako sam na HomeView ruti treba mi ulogirani korisnik

    }
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserLogin.vue')
  },
{
  path: '/SignUpForm',
  name: 'SignUpForm',
  component: SignUpForm,
},

];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {  // 3. paremetar next znači služomo  se sa promjenom rute 
  console.log("Stara ruta", from.name, " -> nova ruta", to.name, "korisnik", store.currentUser);

  const noUser = store.currentUser == null;  // nova varijabla  bit će true ako nemamo prijavljenog novog korisnika

  if (to.meta && to.meta.needsUser && noUser) {
    // ako ruta zahtijeva autentikaciju i nema korisnika ulogiranog neće mu dozvoliti promejenu nego me odvedi na login
    next('/login');  
  } else {
    // ako ruta ne zahtijeva aut. tj.korisnik je ulogiran
    next();
  }
});
export default router