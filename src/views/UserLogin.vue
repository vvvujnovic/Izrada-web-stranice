<template>
  <div class="login">
    <h1>Prijava</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" v-model="email" class="form-control" id="email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <label for="password">Lozinka</label>
              <input type="password" v-model="lozinka" class="form-control" id="password" placeholder="Lozinka" required>
            </div>
            <div class="login" style="margin-bottom: 20px;"></div>
            <router-link class="btn custom-button" to="/UserLogin">Prijava</router-link>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      Lozinka: ''
    };
  },
  methods: {
    login() {
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
