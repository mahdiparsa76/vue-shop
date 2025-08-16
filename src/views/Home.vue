<template>
  <div class="product-list">
    <ProductCard v-for="p in products" :key="p.id" :product="p"/>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products')
    products.value = res.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
