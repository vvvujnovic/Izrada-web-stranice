<template>
  <div class="home-page">
    <h1>Dobrodošli u našu uslugu čišćenja!</h1>
    <p>Pružamo profesionalno čišćenje za vaš dom, poslovni prostor ili možda želite da vaš limeni ljubimac sjaji, tu smo za Vas!</p>
    <p>Pružamo kvalitetne usluge čišćenja kako biste uživali u čistom i ugodnom okruženju.</p>
    <img src="../assets/moj_logo.png" alt="">
  </div>
  <div class="special-offer">
    <h2>Specijalna ponuda:</h2>
    <p>Prvo čišćenje uz 20% popusta! Iskoristite ovu ponudu i uživajte u svježini po povoljnoj cijeni.</p>
  </div>
  <div>
    <button @click="$router.push('/SignUpForm')" class="cta-button">ZAPOČMITE</button>
  </div>
  </template>


  <script>
import { db } from '@/firebase';
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "HomeView",
  data() {
    return {
      KategorijaUsluga: []
    };
  },
  mounted() {
    this.dohvatiKategorijaUsluga();
  },
  
  methods: {
    async dohvatiKategorijaUsluga() {
      try {
        const querySnapshot = await getDocs(collection(db, "KategorijaUsluga"));
        this.KategorijaUsluga = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error("Greška pri dohvatu KategorijaUsluga:", error);
      }
    }
  }
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

.special-offer {
  margin-top: 20px;
}

.kategorije-usluga {
  margin-top: 20px;
}

.cta-button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #686461;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #686461;
}
</style>











