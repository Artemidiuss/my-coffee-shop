<template>
    <div class="reviews">
      <h2 class="text-center">Відгуки користувачів</h2>
      <div class="container">
        <div class="row">
          <div class="review-card col-md-4" v-for="review in visibleReviews" :key="review.id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ review.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ review.date }}</h6>
                <p class="card-text">{{ review.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <button @click="prevReview" class="arrow-btn left-arrow"><i class="fas fa-chevron-left"></i></button>
          <button @click="nextReview" class="arrow-btn right-arrow"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReviewsComponent',
    data() {
      return {
        reviews: [
          {
            id: 1,
            name: 'Іван Іванов',
            date: '2024-01-01',
            text: 'Дуже смачна кава і чудовий сервіс! Рекомендую всім.'
          },
          {
            id: 2,
            name: 'Олена Петрівна',
            date: '2024-01-02',
            text: 'Чудова атмосфера і дуже приємний персонал. Завжди відвідую цю кав\'ярню.'
          },
          {
            id: 3,
            name: 'Петро Коваленко',
            date: '2024-01-03',
            text: 'Найкраща кава в місті! Завжди беру тут капучіно.'
          },
          {
            id: 4,
            name: 'Марія Іванівна',
            date: '2024-02-01',
            text: 'Дуже задоволена обслуговуванням і якістю кави. Завжди приємно повертатися!'
          },
          {
            id: 5,
            name: 'Андрій Петров',
            date: '2024-02-05',
            text: 'Кава дуже смачна, а доставка завжди швидка. Рекомендую!'
          }
        ],
        currentReview: 0
      };
    },
    computed: {
      visibleReviews() {
        return [
          this.reviews[this.currentReview],
          this.reviews[(this.currentReview + 1) % this.reviews.length],
          this.reviews[(this.currentReview + 2) % this.reviews.length]
        ];
      }
    },
    methods: {
      nextReview() {
        this.currentReview = (this.currentReview + 1) % this.reviews.length;
      },
      prevReview() {
        this.currentReview = (this.currentReview - 1 + this.reviews.length) % this.reviews.length;
      }
    }
  }
  </script>
  
  <style scoped>
  .reviews {
    background-color: #f9f9f9;
    padding: 50px 0;
  }
  
  .reviews h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-bottom: 30px;
  }
  
  .review-card {
    margin-bottom: 30px;
  }
  
  .card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
  
  .card-text {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  
  .arrow-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #262626;
    transition: color 0.3s ease;
  }
  
  .arrow-btn:hover {
    color: #614c3e;
  }
  
  .left-arrow {
    margin-right: 20px;
  }
  
  .right-arrow {
    margin-left: 20px;
  }
  </style>
  