<template>
  <div class="app-container">
    <!-- Shopping Cart Icon -->
    <header>
      <h1>Vue E-commerce TDD Workshop</h1>
      <button class="cart-icon" @click="toggleSidebar">
        <i class="fa fa-shopping-cart"></i> <!-- Font Awesome Icon -->
      </button>
    </header>

    <main :style="mainStyle">
      <ProductCatalog />
    </main>

    <!-- Sidebar for Shopping Cart -->
    <div :style="sidebarStyle" class="sidebar">
      <ShoppingCart />
      <button class="close-btn" @click="toggleSidebar">Close</button>
    </div>

    <footer>
      <p>Vue TDD E-commerce Workshop</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductCatalog from './components/ProductCatalog.vue';
import ShoppingCart from './components/ShoppingCart.vue';

// Reactive state for sidebar visibility
const isSidebarOpen = ref(false);

// Computed styles for the sidebar
const sidebarStyle = computed(() => ({
  width: isSidebarOpen.value ? '300px' : '0',
  transform: isSidebarOpen.value ? 'translateX(0)' : 'translateX(100%)',
  transition: 'transform 0.3s ease-in-out'
}));


// Function to toggle sidebar visibility
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped>
/* Global Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: #f5f5f5;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header */
header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: #2c3e50;
}

/* Shopping Cart Icon */
.cart-icon {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #2c3e50;
}

/* Main Section */
main {
  min-height: 70vh;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;
}

/* Close Button */
.close-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
}

/* Footer */
footer {
  text-align: center;
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  color: #666;
}
</style>
