<template>
  <h2>商品列表</h2>
  <ul>
    <li v-for="item in productsStore.all">
      <p>商品名称：{{ item.title }}</p>
      <p>商品价格：{{ item.price }}</p>
      <button
        :disabled="!item.inventory"
       @click="cartStore.addProductToCart(item)">添加至购物车</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import { useProductsStore } from '../store/products'

const productsStore = useProductsStore()
const cartStore = useCartStore()

// 加载所有数据
productsStore.loadAllProducts()
</script>