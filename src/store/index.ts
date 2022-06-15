import { defineStore } from "pinia";
/**
 * 定义并导出容器
 * 参数1：容器ID, 必须唯一, 将来 Pinia 会把所有的容器挂载到根容器中
 * 参数2：选项对象
 * 返回值：一个函数, 调用得到容器实例
 */
export const useMainStore = defineStore('main', {
  /** 
   * 类似于组件的 data,用于存储全局状态
   * 1. 必须是函数：为了在服务端渲染的时候避免交叉请求导致的数据状态污染
   * 2. 必须是箭头函数, 为了更好的 TS 类型推导 
   */
  state: () => {
    return {
      count: 100,
      foo: 'bar'
    }
  },

  /** 
   * 类似于组件的 computed, 用来封装计算属性, 有缓存的功能
   */ 
  getters: {
    // 函数接收一个可选参数：state 状态对象
    // count10(state) {
    //   return state.count + 10
    // }

    // 如果在 getters 中使用了 this 则必须手动指定返回值类型, 否则类型推导不出来
    count10(): number {
      return this.count + 10
    }
  },

  /**
   * 类似于组件的 methods, 封装业务逻辑, 修改state
   */ 
  actions: {
    changeState() {
      this.count++ // 通过this访问state中的数据
      this.foo = 'hello'

      // this.$patch()
    }
  }
})