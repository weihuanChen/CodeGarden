<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <button @click="user.add()">{{ user.count }}</button>
    <RouterView></RouterView>
  </div>
</template>
<script lang="ts">
import { ref, Ref } from "vue"
import {useUserStore } from "./stores/user"
export default {
  setup() {
    const msg: Ref<number> = ref(1)
    const user = useUserStore()
    setInterval(() => {
      msg.value++;
    }, 1000)
    return { msg,user }
  }
}
</script>
<style scoped>
h1 {
  color: red;
}
</style>