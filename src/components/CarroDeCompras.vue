<script setup>
import {carroDeComprasStore} from "@/stores/carroDeCompras.js";

let carroDeCompras = carroDeComprasStore();

</script>

<template>
  <ul>
    <li v-for="(producto, index) in carroDeCompras.notebooksCompradas" :key="index">
      {{ producto.nombre }}
    </li>
  </ul>
</template>

<style scoped>

</style>