
<template>
  <div class="KategorijaUsluga">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <form @submit.prevent="dodajZahtjev">
            <div class="form-group">
              <label for="odaberiKategorijuUsluga"><h3>Odaberi kategoriju</h3></label>
              <select
                class="form-control"
                id="odaberiKategorijuUsluga"
                v-model="odabranaKategorijaUsluga"
              >
                <option disabled value="">Odaberi kategoriju</option>
                <option value="Auto">Auto</option>
                <option value="Kuca/Stan">Kuca/Stan</option>
                <option value="Poslovni prostor">Poslovni prostor</option>
              </select>
            </div>
            <div class="form-group">
                 <img v-if="odabranaKategorijaUsluga === 'Auto'" src="../assets/auto.png" alt="Auto" />
                 <img v-else-if="odabranaKategorijaUsluga === 'Kuca/Stan'" src="../assets/kuca.png" alt="Kuca/Stan" />
                 <img v-else-if="odabranaKategorijaUsluga === 'Poslovni prostor'" src="../assets/poslovniProstor.png" alt="Poslovni prostor" />
             </div>

            <div class="form-group">
                <label for="vrstaCiscenja"><h3>Vrsta čišćenja</h3></label>
                  <select class="form-control" id="vrstaCiscenja" v-model="odabranaVrstaCiscenja">
                  <option disabled value="">Odaberi vrstu čišćenja</option>
                  <option value="Općenito">Općenito</option>
                  <option value="Dubinsko">Dubinsko</option>
                  <option value="Brzo">Brzo</option>
              </select>
             </div>
             <div class="form-group">
              <label for="opisZahtjeva"><h3>Opis zahtjeva</h3></label>
              <textarea
                class="form-control"
                id="opisZahtjeva"
                v-model="opisZahtjeva"
              ></textarea>
            </div>
            <div class="form-group">
                    <label for="datum"><h3>Datum usluge</h3></label>
                     <input
                     type="date"
                     v-model="datum"
                     class="form-control"
                       id="datum"
                       />
              <button type="submit" class="btn btn-primary custom-button"> Potvrdi </button>                           
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { db, auth } from '@/firebase'; 
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import router from '@/router'; // Import router da korisnik aplikacije kad želi potvrditi uslugu ne može ako nije prijavljen već ga preusmjerva na stranicu za registraciju/prijavu

export default {
  data() {
    return {
      KategorijaUsluga: [],
      odabranaKategorijaUsluga: '',
      odabranaVrstaCiscenja: '',
      opisZahtjeva: '',
      datum: '',
      vrijeme: ''
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
    },
    dodajZahtjev() {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.error('Niste prijavljeni, molimo prijavite se.');
        alert('Niste prijavljeni, molimo prijavite se ili registrirajte');
        router.push({ name: 'SignUpForm' }); // Preusmjeri na stranicu za prijavu
        return;
      }

      addDoc(collection(db, 'zahtjevi'), { 
        korisnikEmail: currentUser.email,
        KategorijaUsluga: this.odabranaKategorijaUsluga,
        vrstaCiscenja: this.odabranaVrstaCiscenja,
        opis: this.opisZahtjeva,
        datum: this.datum,
        vrijeme: this.vrijeme
      })
      .then(() => {
        this.odabranaKategorijaUsluga = '';
        this.odabranaVrstaCiscenja = '';
        this.opisZahtjeva = '';
        this.datum = '';
        this.vrijeme = '';

        console.log('Zahtjev uspješno dodan!');
        alert('Zahtjev uspješno predan!');
      })
      .catch(error => {
        console.error('Greška prilikom dodavanja zahtjeva:', error);
      });
    }
  },
};

</script>

<style lang="scss">

.form-group button {
  margin-top: 20px; /* Dodajte željenu margina na vrh gumba */
}
.custom-button {
  background-color: #686461;
  color: rgb(12, 12, 12);
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: block; /* Da bi se centrirao */
  margin: 0 auto; /* Centriranje gumba */
}

.custom-button:hover {
  background-color: #3b3737;
}

.custom-button:active {
  background-color: #686461; /* Boja prilikom klika */
}
</style>













  