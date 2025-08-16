<template>
  <header class="header">
    <h1 @click="goHome">Vue Shop</h1>
    <div class="cart-icon" @click="goCart">
      🛒 <span class="count">{{ cart.items.length }}</span>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '../store/cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function goCart() {
  router.push('/cart')
}

function goHome() {
  router.push('/')
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #667eea;
  color: white;
  font-weight: bold;
}
.cart-icon {
  cursor: pointer;
  position: relative;
}
.count {
  position: absolute;
  top: -8px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}
</style>
