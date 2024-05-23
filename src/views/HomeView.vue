<template>
  <div>
    <div class="menu">
      <h2 class="text-center">Меню кави</h2>
      <div class="container">
        <div class="row">
          <div v-for="coffee in coffees" :key="coffee.id" class="menu-card col-lg-3" @click="showPopup(coffee.name)">
            <img :src="getImagePath(coffee.image)" class="img-fluid" alt="">
            <h5>{{ coffee.name }}</h5>
            <p>{{ coffee.price }}</p>
          </div>
        </div>
      </div>
      <div class="divider"></div>
    </div>
    <PopupComponent :showPopup="isPopupVisible" :drinkName="selectedDrink" @close-popup="isPopupVisible = false"/>
  </div>
</template>

<script>
import PopupComponent from '../components/PopupComponent.vue'

export default {
  name: 'HomeView',
  components: {
    PopupComponent
  },
  data() {
    return {
      coffees: [],
      isPopupVisible: false,
      selectedDrink: ''
    }
  },
  created() {
    this.fetchCoffees();
  },
  methods: {
    fetchCoffees() {
      fetch('http://127.0.0.1:5000/coffee')
        .then(response => response.json())
        .then(data => {
          this.coffees = data;
        })
        .catch(() => {
          alert('Помилка при отриманні даних про каву');
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
  padding-top: 50px;
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

.divider {
  height: 2px;
  background-color: #262626;
  margin: 50px 0;
}
</style>
