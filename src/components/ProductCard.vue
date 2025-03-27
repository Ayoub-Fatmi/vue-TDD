<template>
    <div class="product-card">
        <h2>{{ product.name }}</h2>
        <img :src="product.images?.[0]" :alt="product.name" />
        <p class="price">${{ product.price }}</p>
        <p class="rating">Rating: {{ product.rating }}</p>
        <p class="description">{{ product.description }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
    </div>
</template>

<script setup>
    import { defineEmits } from 'vue';
    const props = defineProps({
        product: Object,
    });
    const emit = defineEmits(['add-to-cart']);
    
    function addToCart(value) {
        emit('add-to-cart', value);
    }
</script>

<style scoped>
.product-card {
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    text-align: center;
    background-color: #fff;
    transition: box-shadow 0.2s ease;
}

.product-card:hover {
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
}

img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
}

h2 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #333;
}

.price {
    font-weight: bold;
    color: #2c7a7b;
    font-size: 1.1rem;
    margin-bottom: 8px;
}

.rating {
    font-size: 0.9rem;
    color: #888;
    margin-bottom: 8px;
}

.description {
    font-size: 0.85rem;
    color: #555;
    margin-bottom: 12px;
}

button {
    padding: 8px 16px;
    background-color: #2c7a7b;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

button:hover {
    background-color: #285e61;
}
</style>
