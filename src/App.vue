User
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/" style="font-family: Arial; font-size: 24px; font-style: italic;">TRIO RIO OBRT</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/UserLogin" class="nav-link">Prijava</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/SignUpForm" class="nav-link">Registracija</router-link>
          </li>
          <li class="nav-item"> <!-- Promijenjeno: ova stavka se uvijek prikazuje -->
            <router-link to="/KategorijaUsluga" class="nav-link">Kategorija usluga</router-link>
          </li>
          <li class="nav-item"> <!-- Poveznica za odjavu uvijek prikazana -->
            <a href="#" @click.prevent="logout()" class="nav-link">Odjava</a>
          </li>
        </ul>
      </div>
    </nav>
  
    {{ store.searchTerm }}

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>




<script>
import store from "@/store";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";

export default {
  name: 'app',
  data() {
    return {
      store: store,
      loggedIn: false,
    };
  },
  mounted() {
    const self = this;
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      console.log('Provjera stanja logina.');
      
      if (user) {
        console.log('***', user.email);
        store.currentUser = user.email;
        self.loggedIn = true;
      } else {
        console.log('No user');
        store.currentUser = null;
        self.loggedIn = false;
      }

      const currentRoute = router.currentRoute;

      if (currentRoute.meta && currentRoute.meta.needsUser !== undefined) {
        if (self.loggedIn && !currentRoute.meta.needsUser) {
          router.push({ name: 'HomeView' });
        } else if (!self.loggedIn && currentRoute.meta.needsUser) {
          router.push({ name: 'UserLogin' });
        }
      }
    });
  },
  methods: {
    logout() {
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          console.log('Korisnik je uspješno odjavljen.');
          this.loggedIn = false;
          store.currentUser = null;
          router.push({ name: 'UserLogin' });
        })
        .catch((error) => {
          console.error('Došlo je do pogreške prilikom odjave:', error);
        });
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c4949;
  min-height: 90vh;
  background-image: linear-gradient(#44b17173, #2b533ff1);
}

.logo-font {
  font-family: 'Permanent Marker', cursive;
}
.custom {
  display: flex;
  justify-content: space-between;
}

.link_container {
  margin-left:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.navbar-brand {
  font-family: Arial;
  font-size: 24px;
  font-style: italic;
  font-style: bold;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #060707;

    &.router-link-exact-active {
      color: #0c0c0c;
    }
  }
}
</style>
