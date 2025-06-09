<script setup>
defineProps({
  url: String,
  text: String,
})
</script>

<template>
  <a :href="url" id="link-sitio-web">{{ text }}</a>
</template>

<style scoped>

</style>