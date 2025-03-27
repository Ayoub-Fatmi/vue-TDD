<template>
    <div class="product-sort">
      <button
        v-for="option in sortOptions"
        :key="option.value"
        :data-test="'sort-option'"
        :data-value="option.value"
        :class="{ active: option.value === currentSort }"
        @click="changeSort(option.value)"
      >
        {{ option.label }}
      </button>
    </div>
  </template>
  
  <script setup>
    import { ref, defineProps, defineEmits } from 'vue';
    
    defineProps({
        currentSort: {
        type: String,
        default: ''
        }
    });
    
    const emit = defineEmits(['sort-change']);
    
    const sortOptions = ref([
        { label: 'Price: Low to High', value: 'price-asc' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Rating: High to Low', value: 'rating-desc' }
    ]);
    
    function changeSort(value) {
        emit('sort-change', value);
    }
  </script>
  
  <style scoped>
  .product-sort {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  button {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  button.active {
    background-color: #007bff;
    color: white;
  }

  button.active:hover {
    background-color: #0069d9;
  }

  button:hover {
    background-color: #f0f0f0;
  }
</style>