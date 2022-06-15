import { defineStore } from "pinia";
import { buyProducts, IProduct } from "../api/shop";
import { useProductsStore } from './products'

type CartProduct = {
  quantity: number
} & Omit<IProduct, 'inventory'>

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartProducts: [] as CartProduct[],
      checkoutStatus: null as null | string
    }
  },
  getters: {
    totalPrice(): number {
      return this.cartProducts.reduce((prev, curr) => {
        return prev + curr.price * curr.quantity
      }, 0)
    }
  },
  actions: {
    addProductToCart(product: IProduct) {
      console.log('addProductToCart', product)
      // 商品有无库存
      if(product.inventory < 1) {
        return
      }
      // 检查购物车中是否是否已有该商品
      const cartItem = this.cartProducts.find(item => item.id === product.id)
      // 如果有则让商品数量+1
      if(cartItem) {
        cartItem.quantity++
      } else { 
      // 如果没有则添加到购物车列表
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1
        })
      }
      // 更新商品的库存(不推荐直接修改product.inventory)
      const productsStore = useProductsStore()
      productsStore.decrement(product)
    },
    async checkout() {
      const res = await buyProducts()
      this.checkoutStatus = res ? '成功' : '失败'
      if(res) {
        this.cartProducts = []
      }
    }
  }
})