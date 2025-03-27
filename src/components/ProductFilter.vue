<template>
  <select v-model="selectedCategory" class="category-select">
    <option value="All Categories" data-test="category-option" disabled>All Categories</option>
    <option v-for="category in categories" :key="category.id" :value="category.id" data-test="category-option" @click="onCategoryChange(category.id)">
      {{ category.name }}
    </option>
  </select>

  <input type="text" placeholder="Search by name" v-model="searchTerm" @input="onSearchChange" class="search-input" />
</template>


<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    categories: Array,
    selectedCategory: "All Categories"
  });

  const selectedCategory = ref("All Categories");
  const searchTerm = ref('');
  const emit = defineEmits(['category-change', 'search-change']);

  function onCategoryChange(id) {
    emit('category-change', id);
  }

  function onSearchChange() {
    emit('search-change', searchTerm.value);
  }

</script>

<style scoped>
.category-select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.category-select:focus,
.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}
</style>