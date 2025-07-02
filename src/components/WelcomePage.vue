<template>
  <div class="tees-point">
    <NavBar />
    <div class="hero-wrapper d-flex flex-column flex-lg-row align-items-center justify-content-center">
      <div class="text-section text-center text-lg-start p-4 p-lg-5">
        <h1 class="headline mb-3">Welcome to <span class="highlight">Tees Point</span></h1>
        <p class="subtext">Discover your style – premium tees, bold designs, and unbeatable comfort.</p>
        <router-link to="/product-list" class="btn btn-shop mt-4">Shop Tees</router-link>
      </div>

      <div class="image-section p-4 p-lg-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6bk-gBdsh3_pOiAboE6w8aic-89JISVYCg&s"
          alt="T-shirt Mockup"
          class="img-fluid hero-image"
        />
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
.tees-point {
  background: linear-gradient(135deg, #fef6f9, #f3e8ff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
}

.hero-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
  padding: 2rem 0;
}

.text-section {
  flex: 1;
  max-width: 600px;
}

.headline {
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
}

.highlight {
  color: #ec4899;
  text-shadow: 0 2px 10px rgba(236, 72, 153, 0.3);
}

.subtext {
  font-size: 1.25rem;
  color: #6b7280;
  margin-top: 1rem;
  font-weight: 500;
  line-height: 1.6;
}

.btn-shop {
  background: linear-gradient(to right, #ec4899, #f472b6);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.2);
  transition: transform 0.3s ease;
  text-decoration: none;
}

.btn-shop:hover {
  background: linear-gradient(to right, #db2777, #ec4899);
  transform: translateY(-3px);
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  max-width: 100%;
  height: auto;
  animation: floatUp 4s ease-in-out infinite;
  border-radius: 12px;
}

@keyframes floatUp {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@media (max-width: 768px) {
  .headline {
    font-size: 2.2rem;
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
