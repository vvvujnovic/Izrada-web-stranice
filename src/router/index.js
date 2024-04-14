import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUpForm from '@/views/SignUpForm.vue';
import KategorijaUsluga from '@/views/KategorijaUsluga.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      needsUser: false
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
    path: '/KategorijaUsluga',
    name: 'KategorijaUsluga',
    component: KategorijaUsluga,
    meta: {
      needsUser: false  // Postavljamo da ova ruta zahtijeva prijavu korisnik može vidjeti usluge ali ne može posltai zahtjev bez prijave
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




  