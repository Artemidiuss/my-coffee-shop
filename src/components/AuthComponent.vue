<template>
  <div id="authModal" class="modal" @click.self="closeAuth">
    <div class="modal-content" @click.stop>
      <span class="close" @click="closeAuth">&times;</span>
      <h2>{{ isLogin ? 'Вхід' : 'Реєстрація' }}</h2><br>
      <div v-if="isLogin">
        <form @submit.prevent="login">
          <label for="loginPhone">Номер телефону:</label><br>
          <input type="text" v-model="loginPhone" placeholder="Номер телефону"><br><br>
          <label for="loginPassword">Пароль:</label><br>
          <input type="password" v-model="loginPassword" placeholder="Пароль"><br><br>
          <button type="submit" id="loginBtn">Увійти</button>
        </form><br>
        <p>Ще не зареєстровані? <a href="#" @click.prevent="toggleAuthForm">Зареєструватися</a></p>
      </div>
      <div v-else>
        <form @submit.prevent="register">
          <label for="registerPhone">Номер телефону:</label>
          <input type="text" v-model="registerPhone" placeholder="Номер телефону"><br><br>
          <label for="registerPassword">Пароль:</label>
          <input type="password" v-model="registerPassword" placeholder="Пароль"><br><br>
          <label for="confirmPassword">Підтвердіть пароль:</label>
          <input type="password" v-model="confirmPassword" placeholder="Підтвердіть пароль"><br><br>
          <button type="submit" id="registerBtn">Зареєструватися</button>
        </form><br>
        <p>Вже маєте обліковий запис? <a href="#" @click.prevent="toggleAuthForm">Увійти</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthComponent',
  data() {
    return {
      isLogin: true,
      loginPhone: '',
      loginPassword: '',
      registerPhone: '',
      registerPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    closeAuth() {
      this.$emit('close')
    },
    toggleAuthForm() {
      this.isLogin = !this.isLogin;
    },
    login() {
      fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: this.loginPhone,
          password: this.loginPassword
        })
      })
        .then(response => response.text())
        .then(data => {
          alert(data);
          this.loginPhone = '';
          this.loginPassword = '';
          this.closeAuth();
        })
        .catch(error => {
          alert('Помилка: ' + error.message);
        });
    },
    register() {
      if (this.registerPassword !== this.confirmPassword) {
        alert('Паролі не співпадають!');
        return;
      }
      fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: this.registerPhone,
          password: this.registerPassword
        })
      })
        .then(response => response.text())
        .then(data => {
          alert(data);
          this.registerPhone = '';
          this.registerPassword = '';
          this.confirmPassword = '';
          this.toggleAuthForm();
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

#loginBtn, #registerBtn {
  background-color: #8c6247;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

#loginBtn:hover, #registerBtn:hover {
  background-color: #614c3e;
}

label {
  font-size: 16px;
  font-weight: 500;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

input[type=text]:focus, input[type=password]:focus {
  border-color: #614c3e;
  outline: none;
}
</style>
