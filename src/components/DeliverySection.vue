<template>
    <div class="delivery-section">
      <div class="divider"></div>
      <h2 class="text-center">Доставка кави</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="delivery-step">
              <div class="step-icon">1</div>
              <h5>Замовлення</h5>
              <p>Замовляйте каву на нашому сайті або по телефону. Ми приймаємо замовлення цілодобово.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="delivery-step">
              <div class="step-icon">2</div>
              <h5>Підготовка</h5>
              <p>Наші баристи готують вашу каву з найсвіжіших зерен. Кожне замовлення готується індивідуально.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="delivery-step">
              <div class="step-icon">3</div>
              <h5>Доставка</h5>
              <p>Ми доставимо вашу каву швидко та безкоштовно до вашого офісу. Насолоджуйтесь свіжою кавою в будь-який час.</p>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeliverySection'
  }
  </script>
  
  <style scoped>
  .delivery-section {
    background-color: #fff;
    padding: 50px 0;
  }
  
  .delivery-section h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-bottom: 30px;
  }
  
  .delivery-step {
    text-align: center;
    padding: 20px;
  }
  
  .step-icon {
    font-size: 30px;
    font-weight: bold;
    color: #f39c12;
    margin-bottom: 20px;
  }
  
  .delivery-step h5 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
  
  .delivery-step p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  
  .divider {
    height: 2px;
    background-color: #262626;
    margin: 50px 0;
  }
  </style>
  