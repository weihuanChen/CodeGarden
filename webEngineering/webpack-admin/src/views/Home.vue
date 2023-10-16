<script lang="ts" setup>
import { ref, Ref } from "vue"
const msg: Ref<number> = ref(1)
setInterval(() => {
  msg.value ++
}, 1000)
</script>
<template>
  <div>index1</div>
</template>