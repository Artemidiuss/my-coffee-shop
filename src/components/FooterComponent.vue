<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Про нас</h5>
            <p>Найкраща кав'ярня в місті з найсмачнішою кавою та найтеплішою атмосферою.</p>
          </div>
          <div class="col-md-4">
            <h5>Контакти</h5>
            <ul class="list-unstyled">
              <li><i class="fas fa-map-marker-alt"></i> вул. Кавова, 1, Київ</li>
              <li><i class="fas fa-phone"></i> +38 012 345 67 89</li>
              <li><i class="fas fa-envelope"></i> info@coffeeshop.ua</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Соціальні мережі</h5>
            <ul class="list-unstyled">
              <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <p class="mt-3">&copy; 2024 Кав'ярня. Всі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #262626;
    color: white;
    padding: 40px 0;
    font-family: 'Montserrat', sans-serif;
  }
  
  .footer h5 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .footer p, .footer li {
    font-size: 14px;
  }
  
  .footer ul {
    padding: 0;
    list-style: none;
  }
  
  .footer ul li {
    margin-bottom: 10px;
  }
  
  .footer ul li a {
    color: white;
    text-decoration: none;
  }
  
  .footer ul li a:hover {
    text-decoration: underline;
  }
  
  .footer .fab, .footer .fas {
    margin-right: 10px;
  }
  </style>
  