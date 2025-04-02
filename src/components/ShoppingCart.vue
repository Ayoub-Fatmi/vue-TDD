<template>
    <div class="shopping-cart">
        <div v-if="cart.items.length === 0" class="empty-cart">
            <p>cart is empty</p>
        </div>
        <div v-else >
            <CartItem v-for="item in cart.items" :key="item.id" :item="item" @remove-from-cart="cart.removeFromCart" @update-quantity="cart.updateQuantity" />
            <CartSummary :subtotal="cart.subtotal" :tax="cart.tax" :grandTotal="cart.grandTotal" />
        </div>
    </div>
</template>

<script setup>
    import CartItem from './CartItem.vue';
    import { useCartStore } from '../stores/cartStore';
import CartSummary from './CartSummary.vue';

    const cart = useCartStore();
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow-y: auto; 
  margin-top: 20%;
}

.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  padding: 20px;
}
</style>