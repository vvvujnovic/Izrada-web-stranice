<template>
  <div class="login">
    <h1>Prijava</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="UserLogin">
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" class="form-control" id="email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <label for="password">Lozinka</label>
              <input type="password" v-model="password" class="form-control" id="password" placeholder="Lozinka" required>
            </div>
            <div class="UserLogin" style="margin-bottom: 20px;"></div>
            <button type="button" class="btn custom-button">Prijava</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>

</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async UserLogin() {
  try {
    const auth = getAuth();
    const { email, password } = this;
    
    await signInWithEmailAndPassword(auth, email, password);
    // Uspješna registracija usmjeri korisnika na Home page stranicu
    const router = useRouter();
    router.replace({ name: 'HomeView' });
  } catch (error) {
    console.error('UserLogin error:', error.message);
    // Greška u prijavu
      }
    }
  }
};

</script>

<style lang="scss">
.custom-button {
  background-color: #686461;
  color: rgb(12, 12, 12);
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.custom-button:hover {
  background-color: #3b3737;
}
</style>
