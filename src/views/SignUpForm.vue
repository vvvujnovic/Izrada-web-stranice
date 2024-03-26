<template>
  <div class="UserLogin">
    <h1>Registracija</h1>
  </div>
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="username">Korisničko ime</label>
              <input type="text" class="form-control" id="username" placeholder="Koriničko ime" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
              <small id="emailHelp" class="form-text text-muted">Vaša e-mail adresa je zaštićena.</small>
            </div>
            <div class="form-group">
              <label for="password">Lozinka</label>
              <input type="password" class="form-control" id="password" placeholder="Lozinka" />
            </div>
            <div class="form-group">
              <label for="confirmPassword">Potvrdi lozinku</label>
              <input type="password" class="form-control" id="confirmPassword" placeholder="Potvrdi lozinku" />
            </div>
            <div class="login" style="margin-bottom: 20px;"></div>
            <router-link class="btn custom-button" to="/SignUpForm">Registracija</router-link>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
</template>

<style lang="scss">

  .custom-button {
  background-color: #686461;
  color: rgb(12, 12, 12); 

}
.cta-button:hover {
  background-color: #686461;
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

</style>


