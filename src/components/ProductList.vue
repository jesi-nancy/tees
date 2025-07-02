<template>
  <div>
    <NavBar />
    <div class="container my-5">
      <h2 class="text-center mb-4 title">Top Selling Products</h2>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
.title {
  font-size: 2rem;
  color: #ec4899; /* Matching the brand pink */
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 1px 4px rgba(236, 72, 153, 0.15);
}

.product-card {
  border: 1px solid #f3e8ff;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(236, 72, 153, 0.05);
  transition: all 0.3s ease;
  background: #fff;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(236, 72, 153, 0.15);
}

.product-img {
  height: 220px;
  object-fit: contain;
  padding: 20px;
  background-color: #fdf4ff;
  border-bottom: 1px solid #f3e8ff;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1f2937;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.9rem;
  color: #6b7280;
  min-height: 48px;
  margin-bottom: 0.5rem;
}

.ratings {
  font-size: 0.85rem;
  color: #f59e0b;
  margin-bottom: 0.25rem;
}

.price {
  font-weight: bold;
  font-size: 1.15rem;
  color: #10b981;
  margin-bottom: 0.75rem;
}

.btn {
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.85rem;
  font-family: 'Poppins', sans-serif;
  padding: 0.4rem 1rem;
  transition: background 0.3s ease;
}

.btn-outline-primary {
  color: #ec4899;
  border: 1px solid #ec4899;
  background-color: transparent;
}

.btn-outline-primary:hover {
  background-color: #fce7f3;
  color: #db2777;
}

.btn-primary {
  background: linear-gradient(to right, #ec4899, #f472b6);
  border: none;
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(to right, #db2777, #ec4899);
}
</style>

