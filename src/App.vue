
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">TRIO RIO OBRT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Prijava</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Registracija</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="UserLogin">
    </div>
  </div>


  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/UserLogin">Prijava</router-link>
    <router-link to="/SignUpForm">Registracija</router-link>
  </nav>
  <router-view/>
</template>




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
