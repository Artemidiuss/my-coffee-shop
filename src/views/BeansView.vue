<template>
    <div>
      <div class="menu">
        <h2 class="text-center">Наші зерна</h2>
        <div class="container">
          <div class="row">
            <div v-for="bean in beans" :key="bean.id" class="menu-card col-lg-3" @click="showPopup(bean.name)">
              <img :src="getImagePath(bean.image)" class="img-fluid" alt="">
              <h5>{{ bean.name }}</h5>
              <p>{{ bean.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <PopupComponent :showPopup="isPopupVisible" :drinkName="selectedDrink" @close-popup="isPopupVisible = false"/>
    </div>
  </template>
  
  <script>
  import PopupComponent from '../components/PopupComponent.vue'
  
  export default {
    name: 'BeansView',
    components: {
      PopupComponent
    },
    data() {
      return {
        beans: [],
        isPopupVisible: false,
        selectedDrink: ''
      }
    },
    created() {
      this.fetchBeans();
    },
    methods: {
      fetchBeans() {
        fetch('http://127.0.0.1:5000/beans')
          .then(response => response.json())
          .then(data => {
            this.beans = data;
          })
          .catch(() => {
            alert('Помилка при отриманні даних про зерна');
          });
      },
      getImagePath(image) {
        return require(`@/assets/images/svg/${image}`);
      },
      showPopup(drinkName) {
        this.selectedDrink = drinkName;
        this.isPopupVisible = true;
      }
    }
  }
  </script>
  
  <style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
  
  .menu h2 {
    font-weight: 400;
  }
  
  .menu h5 {
    text-align: center;
  }
  
  .menu-card {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin: 1rem 0;
    cursor: pointer;
  }
  
  .menu img {
    height: 10rem;
    opacity: .85;
  }
  </style>
  