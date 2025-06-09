<script setup>
defineProps({
  features: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <h2>Características</h2>
  <ul id="lista-tipos">
    <li
        v-for="(notebook, indice) in features"
        :key="indice"
    >{{ notebook.name + ': ' + notebook.description }}</li>
  </ul>
</template>

<style scoped>

</style>