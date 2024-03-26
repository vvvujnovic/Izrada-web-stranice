<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">TRIO RIO OBRT</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/UserLogin">Prijava</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/SignUpForm">Registracija</router-link>
          </li>
        </ul>
      </div>
    </nav>
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
