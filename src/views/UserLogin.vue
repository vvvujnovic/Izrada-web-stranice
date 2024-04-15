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
            <button type="submit" class="btn custom-button">Prijava</button>

          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>

</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
  UserLogin() {
    const auth = getAuth();
    const { email, password } = this;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Provjeri je li prijava uspjela  i prijavi me u sustav
        if (userCredential && userCredential.user) {
          // Prijava je uspješna
          console.log('Korisnik prijavljen:', userCredential.user.uid);

          // Uspješna prijava usmjeri korisnika na Home page stranicu u mojem slučaju HomeView
          this.$router.replace({ name: 'HomeView' });
        } else {
          // Prijava nije uspjela obavijest 
          console.error('Greška pri prijavi: Neuspješna prijava');
        }
      })
      .catch((error) => {
        console.error('Greška pri prijavi:', error.message);
        // Greška u prijavi pogrešan e-mail ili lozinka 
      });
  }
}
};
</script>

<style lang="scss">
.custom-button {
  background-color: #686461 !important;
  color: rgb(12, 12, 12) !important;
  padding: 10px 20px !important;
  border: none !important;
  cursor: pointer !important;
  text-decoration: none !important;
  margin-top: 10px !important; 
}

.custom-button:hover {
  background-color: #3b3737 !important;
}
</style>
