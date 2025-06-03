<script setup>
import {ref} from 'vue';

let datosNotebook = ref({
  titulo: '',
  descripcion: '',
  imagen: '',
  sitio: '',
  caracteristicas: [
    {
      nombre: '',
      descripcion: ''
    },
    {
      nombre: '',
      descripcion: ''
    }
  ]
});

async function enviarDatosApi() {
  let response = await fetch('https://crudcrud.com/api/3dfc4bff57134489abd590c1bfc6bccc/notebooks', {
    method: 'POST',
    body: JSON.stringify(datosNotebook.value),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.ok) {
    alert('Notebook guardada correctamente');
  } else {
    alert('Error al guardar el notebook');
  }
}

</script>

<template>
  <form @submit.prevent="enviarDatosApi" id="formulario-carga">
    <label>
      Título:
      <input v-model="datosNotebook.titulo" type="text" name="title" id="title">
    </label>

    <br>

    <label>
      Descripción:
      <input v-model="datosNotebook.descripcion" type="text" name="description" id="description">
    </label>

    <br>

    <label>
      URL imagen:
      <input v-model="datosNotebook.imagen" type="text" name="image" id="image">
    </label>

    <br>

    <label>
      URL sitio web:
      <input v-model="datosNotebook.sitio" type="text" name="site" id="site">
    </label>

    <br>

    <label>
      Característica 1:
      <input v-model="datosNotebook.caracteristicas[0].nombre" type="text" name="nameFeatureA" id="nameFeatureA" placeholder="Nombre">
      <input v-model="datosNotebook.caracteristicas[0].descripcion" type="text" name="descriptionFeatureA" id="descriptionFeatureA" placeholder="Descripción">
    </label>

    <br>

    <label>
      Característica 2:
      <input v-model="datosNotebook.caracteristicas[1].nombre" type="text" name="nameFeatureB" id="nameFeatureB" placeholder="Nombre">
      <input v-model="datosNotebook.caracteristicas[1].descripcion" type="text" name="descriptionFeatureB" id="descriptionFeatureB" placeholder="Descripción">
    </label>

    <br>

    <input type="submit" value="Guardar">
  </form>
</template>

<style scoped>

</style>