<template>
  <nav class="navbar-dark">
    <div class="nav-container">
      <router-link class="brand" to="/">
        JN <span class="highlight">Tees Studio</span>
      </router-link>

      <div class="nav-actions">
        <button class="menu-toggle" @click="isCollapsed = !isCollapsed">
          <span :class="{ open: isCollapsed }" class="menu-icon"></span>
        </button>

        <div class="nav-links" :class="{ open: isCollapsed }">
          <router-link class="nav-item" to="/">Home</router-link>
          <router-link class="nav-item" to="/product-list">Products</router-link>
          <router-link class="nav-item cart" to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="cart-text">Cart</span>
            <span class="badge">{{ cartCount }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import eventBus from '@/eventBus'
import cart from '@/store/cart'

export default {
  name: 'NavBar',
  setup() {
    const cartCount = ref(cart.getCount())
    const isCollapsed = ref(false)

    const updateCart = (newCount) => {
      cartCount.value = newCount
    }

    onMounted(() => {
      eventBus.on('cart-updated', updateCart)
    })

    onBeforeUnmount(() => {
      eventBus.off('cart-updated', updateCart)
    })

    return { cartCount, isCollapsed }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.navbar-dark {
  background: #000;
  color: white;
  font-family: 'Inter', sans-serif;
  padding: 0.8rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  width: 100%;
}

.brand {
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
}

.highlight {
  color: #ccc;
}

.brand:hover {
  color: #eee;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-icon {
  width: 24px;
  height: 2px;
  background: white;
  position: relative;
  transition: 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  width: 24px;
  height: 2px;
  background: white;
  position: absolute;
  transition: 0.3s ease;
}

.menu-icon::before {
  top: -6px;
}

.menu-icon::after {
  top: 6px;
}

.menu-icon.open {
  background: transparent;
}

.menu-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-icon.open::after {
  transform: rotate(-45deg);
  top: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-item {
  color: #ccc;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.cart {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
}

.badge {
  position: absolute;
  top: -6px;
  right: -10px;
  background: #fff;
  color: #000;
  border-radius: 12px;
  padding: 2px 6px;
  font-size: 0.7rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 64px;
    right: 20px;
    background: #111;
    border-radius: 10px;
    flex-direction: column;
    padding: 1rem;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
    z-index: 999;
  }

  .nav-links.open {
    transform: scaleY(1);
  }

  .nav-item {
    width: 100%;
    text-align: center;
    padding: 12px;
  }
}
</style>
