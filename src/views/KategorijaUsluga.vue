
<template>
  <div class="KategorijaUsluga">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <form @submit.prevent="dodajZahtjev">
            <div class="form-group">
              <label for="odaberiKategorijuUsluga"><h2>Odaberi kategoriju</h2></label>
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

            <!-- Dodani blok za prikaz slika -->
            <div class="form-group">
          
              <img v-if="odabranaKategorijaUsluga === 'Auto'" src="../assets/auto.png" alt="Auto" />
              <img v-else-if="odabranaKategorijaUsluga === 'Kuca/Stan'" src="../assets/kuca.png" alt="Kuca/Stan" />
              <img v-else-if="odabranaKategorijaUsluga === 'Poslovni prostor'" src="../assets/poslovniProstor.png" alt="Poslovni prostor" />
            
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
            </div>
            <button type="submit" class="btn btn-primary">
              Potvrdi
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { db, auth } from '@/firebase'; // Uvoz db iz firebase.js
import { collection, addDoc, getDocs } from "firebase/firestore"; // Promjena importa za collection i addDoc

export default {
  data() {
    return {
      KategorijaUsluga: [],
      odabranaKategorijaUsluga: '',
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
        // Ovdje koristimo collection umjesto db.collection
        const querySnapshot = await getDocs(collection(db, "KategorijaUsluga"));
        this.KategorijaUsluga = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error("Greška pri dohvatu KategorijaUsluga:", error);
      }
    },
    async dodajZahtjev() {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          console.error('Nema prijavljenog korisnika.');
          return;
        }

        // Ovdje koristimo addDoc umjesto db.collection('zahtjevi').add
        await addDoc(collection(db, 'zahtjevi'), { 
          korisnikEmail: currentUser.email,
          kategorijaUsluga: this.odabranaKategorijaUsluga,
          opis: this.opisZahtjeva,
          datum: this.datum,
          vrijeme: this.vrijeme
        });
        console.log('Zahtjev uspješno dodan!');
      } catch (error) {
        console.error('Greška prilikom dodavanja zahtjeva:', error);
      }
    }
  },
};
</script>

<style lang="scss">
.custom-button {
  background-color: #72706e;
  color: rgb(12, 12, 12);
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: block;
  margin: 0 auto; /* Centriranje gumba */
}

.custom-button:hover {
  background-color: #72706e;
}

.custom-button:active {
  background-color: #3b3737; /* Boja prilikom klika */
}

.texttom-button {
  color: rgb(14, 12, 12);
}
</style>












  