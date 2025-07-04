<template>
  <div>
    <NavBar />
    <div class="container my-5">
      <h2 class="text-center mb-4 title">Top Selling Products</h2>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div class="col" v-for="product in limitedProducts" :key="product.id">
          <div class="card product-card h-100">
            <img :src="product.image" class="card-img-top product-img" :alt="product.title" />
            
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description.substring(0, 60) }}...</p>

              <div class="ratings mb-2">
                ⭐ {{ product.rating.rate }} | {{ product.rating.count }} reviews
              </div>

              <p class="price mb-2">₹{{ product.price }}</p>

              <div class="mt-auto d-flex justify-content-between">
                <router-link :to="'/product/' + product.id" class="btn btn-outline-primary btn-sm">View</router-link>
                <button @click="addToCart(product)" class="btn btn-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="text-center text-white py-4">
      <p>&copy; 2023 TeesPoint. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import products from '@/assets/products.json'
import NavBar from './NavBar.vue'
import cart from '@/store/cart'
import eventBus from '@/eventBus'

export default {
  components: { NavBar },
  data() {
    return {
      products
    }
  },
  computed: {
    limitedProducts() {
      return this.products.slice(0, 10)
    }
  },
  methods: {
    addToCart(product) {
      cart.addItem(product)
      eventBus.emit('cart-updated', cart.getCount()) 
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');


* {
  background-color: #0f0f0f;
}

.container {
  background-color: #0f0f0f;
  color: #f5f5f5;
  padding-top: 6rem;
  padding-bottom: 5rem;
  min-height: 100vh;
}

.title {
  font-size: 2.2rem;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  
}

.product-card {
  background: #1a1a1a;
  border-radius: 18px;
  border: 1px solid #292929;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(255, 255, 255, 0.08);
}

.product-img {
  height: 220px;
  object-fit: contain;
  padding: 1.5rem;
  background-color: #111;
  border-bottom: 1px solid #292929;
}

.card-body {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.9rem;
  color: #bbbbbb;
  min-height: 48px;
  margin-bottom: 0.5rem;
}

.ratings {
  font-size: 0.85rem;
  color: #facc15;
  margin-bottom: 0.25rem;
}

.price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #10b981;
  margin-bottom: 0.75rem;
}

.btn {
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  transition: all 0.3s ease;
}

.btn-outline-primary {
  color: #ffffff;
  border: 1px solid #ffffff;
  background-color: transparent;
}

.btn-outline-primary:hover {
  background-color: #ffffff;
  color: #000000;
}

.btn-primary {
  background-color: #ffffff;
  border: none;
  color: #000000;
}

.btn-primary:hover {
  background-color: #e5e5e5;
}

@media (max-width: 768px) {
  .product-img {
    height: 180px;
  }
}
</style>
