<template>
  <div class="tees-point">
    <NavBar />
    <div class="hero-wrapper">
      <div class="text-section text-center">
        <h1 class="headline">JN – <span class="highlight">Tees studio</span></h1>
        <p class="subtext">
          Step into your style zone – shop comfy, bold, and beautiful premium tees crafted just for you.
        </p>
        <router-link to="/product-list" class="btn btn-shop mt-4">Explore Collection</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'TeesPoint',
  components: {
    NavBar
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@400;500&display=swap');

.tees-point {
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: #000;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.hero-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
}

.text-section {
  max-width: 800px;
  animation: fadeInUp 1.2s ease-out both;
}

.headline {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.highlight {
  color: #fff;
}

.subtext {
  font-size: 1.25rem;
  color: #ccc;
  margin-top: 1rem;
  line-height: 1.6;
  font-weight: 400;
}

.btn-shop {
  margin-top: 2rem;
  background: #fff;
  color: #000;
  padding: 0.8rem 2.2rem;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-shop:hover {
  background: #f2f2f2;
  transform: translateY(-3px);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .headline {
    font-size: 2.5rem;
  }

  .subtext {
    font-size: 1rem;
  }

  .btn-shop {
    font-size: 0.95rem;
    padding: 0.6rem 1.5rem;
  }
}
</style>
