<template>
  <p>{{ mainStore.count }}</p>
  <p>{{ mainStore.foo }}</p>
  <p><button @click="handleChangeState">修改数据</button></p>
</template>

<script lang="ts" setup>
import { useMainStore } from '../store';

const mainStore = useMainStore()

const handleChangeState = () =>{
  // 方式1： 最简单的方式
  // mainStore.count++

  // 方式2：如果需要修改多个数据, 建议使用 $patch 批量修改
  // mainStore.$patch({
  //   count: mainStore.count + 1,
  //   foo: 'hello'
  // })

  // 方式3：$patch 一个函数, 批量更新
  // mainStore.$patch(state => {
  //   state.count++
  //   state.foo = 'hello'
  // })

  // 方式4：当逻辑比较多的时候可以封装到 actions 处理
  mainStore.changeState()

} 
</script>