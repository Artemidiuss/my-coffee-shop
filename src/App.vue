<template>
  <div id="app">
    <HeaderComponent @show-auth="showAuthModal = true"/>
    <div class="content">
      <router-view/>
      <DeliverySection />
      <ReviewsComponent />
    </div>
    <FooterComponent />
    <AuthComponent v-if="showAuthModal" :showAuth="showAuthModal" @close="showAuthModal = false"/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import DeliverySection from './components/DeliverySection.vue'
import ReviewsComponent from './components/ReviewsComponent.vue'
import AuthComponent from './components/AuthComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    DeliverySection,
    ReviewsComponent,
    AuthComponent
  },
  data() {
    return {
      showAuthModal: false
    }
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
}

.content {
  padding-top: 70px; /* Відступ для фіксованої навігаційної панелі */
  min-height: calc(100vh - 70px); /* Висота контенту з урахуванням навігаційної панелі */
}
</style>
