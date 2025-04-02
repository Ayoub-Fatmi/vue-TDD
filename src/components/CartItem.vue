<template>
  <div class="cart-item">
        <h2>{{ item.product.name }}</h2>
        <p class="price">${{ item.product.price }}</p>
        <p class="quantity">Quantity: {{ item.quantity }}</p>
        <p class="total">Total: ${{ item.product.price * item.quantity }}</p>
        <div class="actions">
            <input type="number" min="1" v-model.number="newQuantity" @input="validateQuantity"/>
            <button @click="updateQuantity()">Update Quantity</button>
            <button @click="removeProduct()">Remove</button>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { ref } from 'vue';
    const props =defineProps({
      item : Object
    })
    
    let newQuantity = ref(props.item.quantity);

    function validateQuantity() {
        if (newQuantity.value < 1) {
            newQuantity.value = 1;
        }
    }

    const emit = defineEmits(['update-quantity, remove-from-cart']);

    function removeProduct() {
        emit('remove-from-cart', props.item.product.id);
    }
    function updateQuantity() {
        emit('update-quantity', props.item.product.id, newQuantity);
    }

</script>

<style scoped>
/* Cart Item Container */
.cart-item {
  background-color: #fff;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Product Details */
.item-details {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

h3 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 4px;
  color: #2c3e50;
}

.price,
.total {
  font-size: 0.9rem;
  color: #555;
}

/* Quantity & Actions */
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Quantity Input */
input[type="number"] {
  width: 50px;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
}

/* Buttons Container */
.buttons {
  display: flex;
  gap: 4px;
}

/* Buttons */
button {
  padding: 6px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  background-color: #2c3e50;
  color: white;
  transition: background-color 0.2s;
}

/* Confirm Button */
button:hover {
  background-color: #1a1f24;
}

/* Remove Button */
.remove-btn {
  background-color: #e74c3c;
}

.remove-btn:hover {
  background-color: #c0392b;
}
</style>