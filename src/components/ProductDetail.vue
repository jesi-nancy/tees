<template>
  <div>
    <NavBar />
    <div class="container my-5">
      <button @click="$router.go(-1)" class="btn btn-outline-secondary mb-4 premium-btn-back">
        <i class="fas fa-arrow-left me-2"></i> Back to Products
      </button>

      <div class="row g-4">
        <div class="col-md-6">
          <div class="premium-product-image-container">
            <img :src="product.image" class="img-fluid rounded premium-product-image" :alt="product.title">
          </div>
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
              <button class="btn btn-outline-primary premium-buy-now">
                <i class="fas fa-bolt me-2"></i> Buy Now
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

      <div class="row mt-5">
        <div class="col-12">
          <div class="premium-product-specs">
            <h4 class="premium-section-title mb-4">Specifications</h4>
            <div class="row">
              <div class="col-md-6" v-for="(spec, index) in specifications" :key="index">
                <div class="premium-spec-item">
                  <span class="premium-spec-name">{{ spec.name }}</span>
                  <span class="premium-spec-value">{{ spec.value }}</span>
                </div>
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
      specifications: [
        { name: 'Brand', value: 'Premium Brand' },
        { name: 'Model', value: '2023 Edition' },
        { name: 'Color', value: 'Classic Black' },
        { name: 'Material', value: 'High-grade Materials' },
        { name: 'Dimensions', value: '10 x 5 x 2 inches' },
        { name: 'Weight', value: '1.2 kg' },
        { name: 'Warranty', value: '1 Year Manufacturer' },
        { name: 'SKU', value: 'PRD' + this.id.toString().padStart(4, '0') }
      ]
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
.premium-btn-back {
  border-radius: 999px;
  padding: 10px 20px;
  font-weight: 600;
  color: #ec4899;
  border-color: #ec4899;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.premium-btn-back:hover {
  background-color: #fdf2f8;
  transform: translateX(-4px);
  color: #db2777;
}

.premium-product-image-container {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(236, 72, 153, 0.15);
  background: #fff0f6;
  padding: 24px;
  border: 1px solid #fce7f3;
}

.premium-product-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 480px;
  transition: transform 0.3s ease;
}

.premium-product-image:hover {
  transform: scale(1.02);
}

.premium-product-info {
  padding: 20px;
  font-family: 'Poppins', sans-serif;
}

.premium-product-title {
  font-size: 2rem;
  font-weight: 800;
  color: #ec4899;
  margin-bottom: 1rem;
  text-shadow: 0 1px 5px rgba(236, 72, 153, 0.1);
}

.premium-rating-badge {
  background: #fcd34d;
  color: #78350f;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.85rem;
}

.premium-review-count {
  font-size: 0.9rem;
  color: #6b7280;
}

.premium-bought-count {
  font-size: 0.9rem;
  font-weight: 500;
  color: #10b981;
}

.premium-price-container {
  padding: 16px 0;
  border-bottom: 1px dashed #f9a8d4;
}

.premium-current-price {
  font-size: 2.2rem;
  font-weight: 800;
  color: #10b981;
}

.premium-original-price {
  font-size: 1.1rem;
  color: #9ca3af;
}

.premium-discount {
  background: #ffe4e6;
  color: #dc2626;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-left: 10px;
}

.premium-product-description {
  padding: 16px 0;
  border-bottom: 1px dashed #f3e8ff;
}

.premium-section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ec4899;
  margin-bottom: 0.75rem;
}

.premium-product-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px 0;
  border-bottom: 1px dashed #f3e8ff;
}

.premium-add-to-cart {
  flex: 1;
  border-radius: 999px;
  padding: 12px;
  font-weight: 600;
  background: linear-gradient(to right, #ec4899, #f472b6);
  border: none;
  color: white;
  box-shadow: 0 4px 14px rgba(236, 72, 153, 0.2);
  transition: all 0.3s ease;
}

.premium-add-to-cart:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.3);
}

.premium-buy-now {
  flex: 1;
  border-radius: 999px;
  padding: 12px;
  font-weight: 600;
  border: 2px solid #ec4899;
  color: #ec4899;
  background: white;
  transition: all 0.3s ease;
}

.premium-buy-now:hover {
  background: #ec4899;
  color: white;
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
  color: #6b7280;
  font-size: 0.9rem;
}

.premium-meta-item i {
  color: #ec4899;
  margin-right: 6px;
}

.premium-product-specs {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(236, 72, 153, 0.08);
  border: 1px solid #f3e8ff;
  margin-top: 32px;
  font-family: 'Poppins', sans-serif;
}

.premium-spec-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f9fafb;
}

.premium-spec-name {
  color: #9ca3af;
  font-weight: 500;
}

.premium-spec-value {
  color: #1f2937;
  font-weight: 600;
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

