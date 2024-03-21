<template>
  <div class="UserLogin">
    <h1>Registracija</h1>
    <div class="container">
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
            <button type="submit" class="btn btn-primary">Registracija</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
    <div class="text-center mt-3">
      <p>Već imate račun ? <a href="#">Prijavite se!</a></p>
    </div>
  </div>
</template>
