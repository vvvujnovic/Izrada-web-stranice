import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpForm from '@/views/SignUpForm.vue';
import KategorijaUsluga from '@/views/KategorijaUsluga.vue'; // Import novu komponentu
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      needsUser: false // Zahtijeva prijavljenog korisnika
    }
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: () => import('../views/UserLogin.vue')
  },
  {
    path: '/SignUpForm',
    name: 'SignUpForm',
    component: SignUpForm
  },
  {
    path: '/KategorijaUsluga', // Nova ruta za KategorijaUsluga
    name: 'KategorijaUsluga',
    component: KategorijaUsluga,
    meta: {
      needsUser: false // Ne zahtijeva prijavljenog korisnika
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  console.log("Stara ruta", from.name, " -> nova ruta", to.name, "korisnik", store.currentUser);

  const noUser = store.currentUser == null;

  if (to.meta && to.meta.needsUser && noUser) {
    // Ako korisnik nije prijavljen i pokušava pristupiti ruti koja zahtijeva prijavu, preusmjerite ga na stranicu za prijavu
    next('/userLogin');  
  } else {
    // Inače, dopustite pristup ruti
    next();
  }
});

export default router;

  