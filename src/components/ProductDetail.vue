<template>
  <div>
    <NavBar />
    <div class="container my-5">
      <div class="row g-4">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <img :src="product.image" class="premium-standalone-image" :alt="product.title" />
        </div>

        <div class="col-md-6">
          <div class="premium-product-info">
            <h1 class="premium-product-title">{{ product.title }}</h1>

            <div class="d-flex align-items-center mb-3">
              <div class="premium-rating-badge me-3">
                {{ product.rating.rate }} <i class="fas fa-star"></i>
              </div>
              <span class="text-muted premium-review-count">({{ product.rating.count }} reviews)</span>
              <span class="premium-bought-count ms-3">{{ product.rating.bought }} bought</span>
            </div>

            <div class="premium-price-container mb-4">
              <h2 class="premium-current-price">₹{{ product.price }}</h2>
              <div class="premium-original-price" v-if="product.price > 1000">
                <del>₹{{ Math.round(product.price * 1.1) }}</del>
                <span class="premium-discount">10% OFF</span>
              </div>
            </div>

            <div class="premium-product-description mb-4">
              <h4 class="premium-section-title">Description</h4>
              <p>{{ product.description }}</p>
            </div>

            <div class="premium-product-actions">
              <button @click="addToCart" class="btn btn-primary premium-add-to-cart">
                <i class="fas fa-cart-plus me-2"></i> Add to Cart
              </button>
              <button @click="$router.go(-1)" class="btn btn-outline-primary premium-back-btn">
                <i class="fas fa-arrow-left me-2"></i> Back to Products
              </button>
            </div>

            <div class="premium-product-meta mt-4">
              <div class="premium-meta-item">
                <i class="fas fa-shield-alt me-2"></i>
                <span>1 Year Warranty</span>
              </div>
              <div class="premium-meta-item">
                <i class="fas fa-truck me-2"></i>
                <span>Free Delivery</span>
              </div>
              <div class="premium-meta-item">
                <i class="fas fa-undo me-2"></i>
                <span>7-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import products from '@/assets/products.json'
import cart from '@/store/cart'
import eventBus from '@/eventBus'

export default {
  name: 'ProductDetail',
  components: { NavBar },
  props: ['id'],
  data() {
    return {
      product: {},
    }
  },
  created() {
    this.product = products.find(p => p.id == this.id) || {}
    if (!this.product.rating.bought) {
      this.product.rating.bought = Math.floor(Math.random() * 500) + 50
    }
  },
  methods: {
    addToCart() {
      cart.addItem(this.product)
      eventBus.emit('cart-updated', cart.getCount())
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
  background: #0f0f0f;
}

.container {
  background: #0f0f0f;
  font-family: 'Poppins', sans-serif;
  color: #f5f5f5;
  padding-top: 6rem;
  padding-bottom: 4rem;
}

.premium-standalone-image {
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
  transition: transform 0.3s ease;
  border-radius: 12px;
}

.premium-standalone-image:hover {
  transform: scale(1.05);
}

.premium-product-title {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
}

.premium-rating-badge {
  background: #facc15;
  color: #000000;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.85rem;
}

.premium-review-count {
  font-size: 0.9rem;
  color: #fffcfc;
}

.premium-bought-count {
  font-size: 0.9rem;
  font-weight: 500;
  color: #10b981;
}

.premium-price-container {
  padding: 16px 0;
  border-bottom: 1px dashed #555;
}

.premium-current-price {
  font-size: 2.2rem;
  font-weight: 800;
  color: #10b981;
}

.premium-original-price {
  font-size: 1.1rem;
  color: #a3a3a3;
}

.premium-discount {
  background: #450a0a;
  color: #f87171;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-left: 10px;
}

.premium-product-description {
  padding: 16px 0;
  border-bottom: 1px dashed #555;
}

.premium-section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.premium-product-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px 0;
  border-bottom: 1px dashed #555;
}

.premium-add-to-cart {
  flex: 1;
  border-radius: 999px;
  padding: 12px;
  font-weight: 600;
  background: #ffffff;
  border: none;
  color: #000000;
  box-shadow: 0 4px 14px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.premium-add-to-cart:hover {
  transform: translateY(-2px);
  background: #f1f1f1;
}

.premium-back-btn {
  flex: 1;
  border-radius: 999px;
  padding: 12px;
  font-weight: 600;
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  transition: all 0.3s ease;
}

.premium-back-btn:hover {
  background: #ffffff;
  color: #000000;
}

.premium-product-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 0;
}

.premium-meta-item {
  display: flex;
  align-items: center;
  color: #a3a3a3;
  font-size: 0.9rem;
}

.premium-meta-item i {
  color: #ffffff;
  margin-right: 6px;
}

@media (max-width: 768px) {
  .premium-product-title {
    font-size: 1.5rem;
  }

  .premium-product-actions {
    flex-direction: column;
  }

  .premium-product-meta {
    flex-direction: column;
  }
}
</style>
