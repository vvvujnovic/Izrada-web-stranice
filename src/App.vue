<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/" style="font-family: Arial; font-size: 24px; font-style: italic;">TRIO RIO OBRT</router-link>
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
    
    <router-view/>
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c4949;
  min-height: 90vh;
  background-image: linear-gradient(#44b17173, #2b533ff1);
}

.logo-font {
  font-family: 'Permanent Marker', cursive;
}
.custom {
  display: flex;
  justify-content: space-between;
}

.link_container {
  margin-left:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.navbar-brand {
  font-family: Arial;
  font-size: 24px;
  font-style: italic;
  font-style: bold;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #060707;

    &.router-link-exact-active {
      color: #0c0c0c;
    }
  }
}
</style>
