<template>
  <div id="myModal" class="modal" v-if="showPopup" @click.self="closePopup">
    <div class="modal-content" @click.stop>
      <span class="close" @click="closePopup">&times;</span>
      <h2 id="drinkName">{{ drinkName }}</h2>
      <form @submit.prevent="order">
        <label for="quantity">Виберіть кількість:</label><br>
        <input type="number" v-model.number="quantity" min="1" placeholder="Кількість"><br><br>
        <label for="phone">Введіть свій номер телефону:</label><br>
        <input type="text" v-model="phone" placeholder="Номер телефону"><br><br>
        <button type="submit" id="orderBtn">Замовити зараз</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupComponent',
  props: ['showPopup', 'drinkName'],
  data() {
    return {
      phone: '',
      quantity: 1
    }
  },
  methods: {
    closePopup() {
      this.$emit('close-popup');
    },
    order() {
      fetch('http://127.0.0.1:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone: this.phone, quantity: this.quantity })
      })
        .then(response => response.text())
        .then(data => {
          alert(data);
          this.phone = '';
          this.quantity = 1;
          this.closePopup();
        })
        .catch(error => {
          alert('Помилка: ' + error.message);
        });
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#orderBtn {
  background-color: #8c6247;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

#orderBtn:hover {
  background-color: #614c3e;
}

label {
  font-size: 16px;
  font-weight: 500;
}

input[type=text], input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

input[type=text]:focus, input[type=number]:focus {
  border-color: #614c3e;
  outline: none;
}
</style>
