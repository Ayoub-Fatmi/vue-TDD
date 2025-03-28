<template>
    <div>
        <div v-if="cart.items.length === 0">
            <p>cart is empty</p>
        </div>
        <div v-else>
            <CartItem v-for="item in store.items" :key="item.id" :item="item" />
        </div>
    </div>
</template>

<script setup>
    import CartItem from './CartItem.vue';
    import { useCartStore } from '../stores/cartStore';

    const cart = useCartStore();
</script>

<style scoped>

</style>