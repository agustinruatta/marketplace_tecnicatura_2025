<script setup>
import {ref} from 'vue';
import {Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';

let schema = {
  titulo: yup.string().min(1),
  descripcion: yup.string().min(1),
  imagen: yup.string().url().min(1),
  sitio: yup.string().url().min(1)
}

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
  });

  //Verifico si fue exitosa la respuesta
  if (response.ok) {
    alert('Notebook guardada correctamente');
  } else {
    alert('Error al guardar el notebook');
  }
}

</script>

<template>
  <Form :validation-schema="schema" @submit.prevent="enviarDatosApi" id="formulario-carga">
    <label>
      Título:
      <Field v-model="datosNotebook.titulo" type="text" name="titulo" id="title"/>
    </label>
    <ErrorMessage name="titulo"></ErrorMessage>

    <br>

    <label>
      Descripción:
      <Field v-model="datosNotebook.descripcion" type="text" name="descripcion" id="description"/>
    </label>
    <ErrorMessage name="descripcion"></ErrorMessage>

    <br>

    <label>
      URL imagen:
      <Field v-model="datosNotebook.imagen" type="text" name="imagen" id="image"/>
    </label>
    <ErrorMessage name="imagen"></ErrorMessage>

    <br>

    <label>
      URL sitio web:
      <Field v-model="datosNotebook.sitio" type="text" name="sitio" id="site"/>
    </label>
    <ErrorMessage name="sitio"></ErrorMessage>

    <br>

    <label>
      Característica 1:
      <Field v-model="datosNotebook.caracteristicas[0].nombre" type="text" name="nameFeatureA" id="nameFeatureA"
             placeholder="Nombre"/>
      <Field v-model="datosNotebook.caracteristicas[0].descripcion" type="text" name="descriptionFeatureA"
             id="descriptionFeatureA" placeholder="Descripción"/>
    </label>

    <br>

    <label>
      Característica 2:
      <Field v-model="datosNotebook.caracteristicas[1].nombre" type="text" name="nameFeatureB" id="nameFeatureB"
             placeholder="Nombre"/>
      <Field v-model="datosNotebook.caracteristicas[1].descripcion" type="text" name="descriptionFeatureB"
             id="descriptionFeatureB" placeholder="Descripción"/>
    </label>

    <br>

    <input type="submit" value="Guardar">
  </Form>
</template>

<style scoped>

</style>