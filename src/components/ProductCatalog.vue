<template>
  <div class="product-filter-sort">
    <ProductFilter :categories="categories" :selectedCategory="store.selectedCategory" @category-change="store.setCategory" @search-change="store.setSearchQuery" />
    <ProductSort :currentSort="store.sortOption" @sort-change="store.setSortOption" />
  </div>
    <div>
        <div v-if="store.filteredProducts.length === 0">
            <p>No products found</p>
        </div>
        <div v-else class="product-grid">
            <ProductCard v-for="product in store.filteredProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
    import ProductCard from './ProductCard.vue';
    import { categories } from '../../mock-data/products';
    import ProductFilter from './ProductFilter.vue';
    import ProductSort from './ProductSort.vue';
    import { useProductStore } from '../stores/productStore';

    const store = useProductStore();
</script>

<style scoped>
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px;
}

</style>
