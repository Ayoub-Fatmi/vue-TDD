<template>
    <div class="cart-summary">
      <p class="summary-item">
        <span>Subtotal:</span>
        <span>${{ subtotal.toFixed(2) }}</span>
      </p>
      <p class="summary-item">
        <span>Tax:</span>
        <span>${{ tax.toFixed(2) }}</span>
      </p>
      <p class="summary-item grand-total">
        <span>Grand Total:</span>
        <span>${{ grandTotal.toFixed(2) }}</span>
      </p>
    </div>
  </template>

<script setup>
    import { defineProps } from 'vue';
    
    defineProps({
      subtotal : Number,
      tax: Number,
      grandTotal : Number
    })
</script>

<style scoped>
.cart-summary {
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #555;
}

.grand-total {
  font-weight: bold;
  font-size: 1.2rem;
  color: #2c3e50;
  border-top: 1px solid #eee;
  padding-top: 10px;
  margin-top: 10px;
}
</style>