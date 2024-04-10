<template>
  <div class="SignUpForm">
    <h1>Registracija</h1>
  </div>
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
      <form @submit.prevent="SignUpForm">
        <div class="form-group">
          <label for="username">Korisničko ime</label>
           <input v-model="username" type="text" class="form-control" id="username" placeholder="Korisničko ime" />
         </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="password">Lozinka</label>
          <input v-model="password" type="password" class="form-control" id="password" placeholder="Lozinka" />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Potvrdi lozinku</label>
          <input v-model="passwordRepeat" type="password" class="form-control" id="confirmPassword" placeholder="Potvrdi lozinku" />
        </div>
        <div class="login" style="margin-bottom: 20px;"></div>
        <button type="submit" class="btn custom-button">Registracija</button>
        <p>
          Već imate račun ? 
          <router-link class="texttom-button" to="/UserLogin">Prijavite se</router-link>
        </p>
      </form>
    </div>
    <div class="col-sm"></div>
  </div>
</template>

<script>
import { app } from '@/firebase'; 
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: "SignUpForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordRepeat: ""
    };
  },
  methods: {
    SignUpForm() {
      if (!this.username || !this.email || !this.password || !this.passwordRepeat) {
        console.error("Molimo ispunite sva polja");
        return;
      }
      if (this.password !== this.passwordRepeat) {
        console.error("Lozinke se ne podudaraju");
        return;
      }
          const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log('Uspješna registracija', userCredential);
        })
        .catch((error) => {
          console.error("Došlo je do pogreške", error);
        });
    }
  }
};
</script>




<style lang="scss">
.custom-button {
  background-color: #72706e;
  color: rgb(12, 12, 12); 
}

.cta-button:hover {
  background-color: #72706e; 

}

.texttom-button {
  color: rgb(14, 12, 12);
  display: block; 
  margin-top: 20px; 
}
</style>

