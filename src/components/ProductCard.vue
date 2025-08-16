<template>
  <div class="card">
    <img :src="product.image" alt="" />
    <h3>{{ product.title }}</h3>
    <p>${{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const props = defineProps({ product: Object })
const cartStore = useCartStore()
function addToCart(product) {
  console.log('Added to cart:', product)
  cartStore.addToCart(product)
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  width: 200px;
  transition: transform 0.3s;
}
.card:hover { transform: scale(1.05); }
button {
  background: #667eea;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
button:hover { background: #764ba2; }
img { width: 100%; height: 150px; object-fit: contain; }
</style>
