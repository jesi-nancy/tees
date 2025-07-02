<template>
  <NavBar />
  <div class="cart-container">
    <h2 class="cart-title">Your Shopping Cart</h2>

    <div v-if="cartItems.length > 0" class="cart-content">
      <div class="table-wrapper">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.quantity }}</td>
              <td>₹{{ item.price }}</td>
              <td>₹{{ (item.price * item.quantity).toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cart-summary">
        <div class="summary-text">
          <h4>Grand Total:</h4>
          <p class="amount">₹{{ grandTotal.toFixed(2) }}</p>
        </div>

        <router-link to="/payment">
          <button class="checkout-btn">Proceed to Payment</button>
        </router-link>
      </div>
    </div>

    <div v-else class="empty-cart">
      <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Empty Cart" class="empty-icon" />
      <p class="empty-message">Your cart is currently empty.</p>
    </div>
  </div>
</template>

<script>
import cart from '@/store/cart'
import NavBar from './NavBar.vue'

export default {
  components: { NavBar },
  computed: {
    cartItems() {
      return cart.getItems()
    },
    grandTotal() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      )
    }
  }
}
</script>
<style scoped>
.cart-container {
  padding: 3rem 1rem;
  max-width: 960px;
  margin: 0 auto;
  background: linear-gradient(145deg, #fff1f2, #fce7f3);
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.15);
  font-family: 'Poppins', sans-serif;
}

.cart-title {
  text-align: center;
  font-size: 2.3rem;
  font-weight: 800;
  color: #ec4899;
  margin-bottom: 2rem;
  text-shadow: 0 2px 6px rgba(236, 72, 153, 0.1);
}

.table-wrapper {
  overflow-x: auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.cart-table th,
.cart-table td {
  padding: 1rem;
  font-size: 1rem;
  border-bottom: 1px solid #f3f4f6;
}

.cart-table th {
  background-color: #ec4899;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
}

.cart-table tr:hover {
  background-color: #fdf2f8;
}

.cart-summary {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(236, 72, 153, 0.08);
  gap: 1rem;
}

.summary-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.summary-text h4 {
  font-size: 1.5rem;
  color: #1f2937;
}

.amount {
  font-size: 1.7rem;
  font-weight: bold;
  color: #10b981;
}

.checkout-btn {
  background: linear-gradient(to right, #ec4899, #f472b6);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 999px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 18px rgba(236, 72, 153, 0.25);
  cursor: pointer;
}

.checkout-btn:hover {
  background: #db2777;
  transform: translateY(-2px);
}

.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #fff0f6;
  border-radius: 20px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}

.empty-icon {
  width: 120px;
  opacity: 0.8;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1));
}

.empty-message {
  font-size: 1.3rem;
  color: #9ca3af;
  font-style: italic;
  font-weight: 500;
}
</style>

