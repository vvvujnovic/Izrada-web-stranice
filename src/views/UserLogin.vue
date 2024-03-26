<template>
  <div class="login">
    <h1>Prijava</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" v-model="email" class="form-control" id="email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <label for="password">Lozinka</label>
              <input type="password" v-model="password" class="form-control" id="password" placeholder="Lozinka" required>
            </div>
            <button type="submit" class="btn btn-primary">Prijava</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>