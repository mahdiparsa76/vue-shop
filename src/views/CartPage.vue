<template>
  <div class="cart-page">
    <h1>سبد خرید</h1>
    <div v-if="cart.items.length === 0" class="empty">Your cart is empty.</div>
    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <img :src="item.image" alt="" class="item-img" />
        <div class="item-info">
          <h3>{{ item.title }}</h3>
          <p>${{ item.price }} x {{ item.quantity }}</p>
        </div>
        <div class="item-actions">
          <button @click="cart.removeFromCart(item.id)">Remove</button>
        </div>
      </div>
      <div class="cart-footer">
        <p>Total: <strong>${{ cart.total.toFixed(2) }}</strong></p>
        <button @click="cart.clearCart()" class="clear-btn">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const cart = useCartStore()
</script>

<style scoped>
.cart-page {
  max-width: 900px;
  margin: 20px auto;
  padding: 0 15px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
.empty {
  text-align: center;
  color: #888;
  font-size: 18px;
  margin-top: 40px;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  transition: transform 0.2s;
}
.cart-item:hover {
  transform: scale(1.01);
}
.item-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 15px;
}
.item-info {
  flex: 1;
}
.item-info h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
}
.item-info p {
  margin: 0;
  font-weight: bold;
}
.item-actions button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.item-actions button:hover {
  background: #ff3b3b;
}
.cart-footer {
  text-align: right;
  margin-top: 20px;
}
.clear-btn {
  background: #333;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}
.clear-btn:hover {
  background: #555;
}
</style>
