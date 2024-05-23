<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-none fixed-top" :class="{ 'navbar-hidden': isNavbarHidden }">
      <a class="navbar-brand text-white" href="#">Кав'ярня</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Головна</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/beans">Зерна</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click.prevent="showAuth">Вхід</a>
          </li>
        </ul>
      </div>
    </nav>
    <header class="header">
      <div class="container-fluid">
        <img src="@/assets/images/coffee2.png" alt="Coffee logo" class="coffee-logo">
        <h4>Доставка в офіс безкоштовна!</h4>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isNavbarHidden: false
    };
  },
  methods: {
    showAuth() {
      this.$emit('show-auth');
    },
    handleScroll() {
      const headerHeight = this.$el.querySelector('.header').offsetHeight;
      this.isNavbarHidden = window.scrollY > headerHeight;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(rgba(8, 8, 8, 0.945), rgba(3, 3, 3, 0.267)), url('@/assets/images/coffee.jpeg') no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-fluid {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.coffee-logo {
  max-width: 45%;
}

.container-fluid h4 {
  color: #fff;
  font-weight: 300;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-top: -15px;
}

.navbar {
  margin: 0 10%;
  height: 7%;
  z-index: 1000; /* Ensure the navbar is above other content */
  transition: opacity 0.5s ease, display 0.5s ease;
}

.navbar-hidden {
  display: none;
}

.navbar-brand {
  color: white;
  margin-top: 50px;
}

.navbar-nav {
  margin-left: 80%;
  margin-top: 50px;
}

.nav-item {
  margin-right: 5%;
}
</style>
