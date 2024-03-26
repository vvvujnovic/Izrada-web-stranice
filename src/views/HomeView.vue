
<template>
    <div class="home-page">
        <h1>Dobrodošli u našu uslugu čišćenja!</h1>
            <p>Pružamo profesionalno čišćenje za vaš dom,poslovni prostor ili možda želite da vaš limeni ljubimac sjaji,tu smo za Vas! </p>
            <p>Pružamo kvalitetne usluge čišćenja kako biste uživali u čistom i ugodnom okruženju </p>
             <img src="../assets/moj_logo.png" alt="">
      </div>
      <div class="special-offer">
              <h2>Specijalna ponuda:</h2>
                <p>Prvo čišćenje uz 20% popusta! Iskoristite ovu ponudu i uživajte u svježini po povoljnoj cijeni.</p>
      </div>

      <div>
              <button @click="$router.push('/contact')" class="cta-button">ZAPOČMITE S PRETRAGOM NAŠIH 
                USLUGA</button>
      </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

.cleaning-image {
  width: 50%;
  margin: 20px auto;
}

.special-offer,
.testimonials,
.contact-info {
  margin-bottom: 30px;
}

.cta-button {
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


.cta-button {
  padding: 15px 30px; 
  font-size: 20px; 
  width: auto; 
  height: auto; 
}
</style>
