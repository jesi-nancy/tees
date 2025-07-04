<template>
  <div class="payment-page">
    <NavBar />

    <div class="payment-container container">
      <div class="row">
        <!-- Left: Delivery Info -->
        <div class="col-md-6 customer-details">
          <h3>Delivery Info</h3>
          <form @submit.prevent="payNow">
            <input v-model="form.name" placeholder="Full Name" class="form-control" required />
            <input v-model="form.address" placeholder="Street Address" class="form-control" required />
            <input v-model="form.district" placeholder="District" class="form-control" required />
            <input v-model="form.state" placeholder="State" class="form-control" required />
            <input v-model="form.pincode" placeholder="Pincode" class="form-control" required />
          </form>
        </div>

        <!-- Right: Payment Options -->
        <div class="col-md-6 payment-options">
          <h3>Payment Method</h3>

          <div class="form-check" v-for="method in methods" :key="method.id">
            <input class="form-check-input" type="radio" :id="method.id" :value="method.label" v-model="selectedPayment" />
            <label class="form-check-label" :for="method.id">{{ method.label }}</label>
          </div>

          <div v-if="selectedPayment === 'Net Banking'" class="mt-2">
            <select class="form-select">
              <option selected disabled>Select Bank</option>
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
              <option>Axis</option>
            </select>
          </div>

          <div v-if="selectedPayment === 'UPI'" class="mt-3">
            <input type="text" class="form-control" v-model="upiId" placeholder="Enter UPI ID (e.g. name@bank)" />
          </div>

          <button class="pay-btn mt-4 w-100" @click="payNow">
            <i class="fas fa-check-circle me-2"></i>Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  components: { NavBar },
  data() {
    return {
      form: {
        name: '',
        address: '',
        district: '',
        state: '',
        pincode: ''
      },
      selectedPayment: '',
      upiId: '',
      methods: [
        { id: 'upi', label: 'UPI' },
        { id: 'card', label: 'Card' },
        { id: 'netbanking', label: 'Net Banking' },
        { id: 'cod', label: 'Cash on Delivery' }
      ]
    }
  },
  methods: {
    payNow() {
      const { name, address, district, state, pincode } = this.form;
      if (!name || !address || !district || !state || !pincode) {
        alert('❌ Please fill all delivery fields.');
        return;
      }

      if (!this.selectedPayment) {
        alert('❌ Please select a payment method.');
        return;
      }

      alert('✅ Order placed successfully!');
      this.$router.push('/'); // redirect to homepage
    }
  }
}
</script>

<style scoped>
.payment-page {
  background: #0f0f0f;
  min-height: 100vh;
  padding: 2rem 0;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
}

.payment-container {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

h3 {
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #ffffff;
}

.form-control,
.form-select {
  background: #121212;
  border: 1px solid #333;
  color: #fff;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.form-control::placeholder {
  color: #aaa;
}

.form-check {
  margin-bottom: 0.8rem;
}

.form-check-input {
  accent-color: #ffffff;
}

.form-check-label {
  margin-left: 0.5rem;
  color: #f5f5f5;
}

.pay-btn {
  background: #ffffff;
  color: #000;
  border: none;
  padding: 0.85rem;
  font-weight: bold;
  border-radius: 999px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.pay-btn:hover {
  background: #e5e5e5;
}
</style>
