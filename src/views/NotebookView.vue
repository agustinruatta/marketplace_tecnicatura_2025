<script setup>
import {ref} from 'vue';
import { useRoute } from 'vue-router';

import Caracteristicas from '@/components/Caracteristicas.vue';
import Enlace from '@/components/Enlace.vue';

let route = useRoute();
let id = route.params.id;

let datosNotebook = ref(undefined);

let opiniones = ref([
  {
    text: 'Buena notebook',
    score: 5
  },
  {
    text: 'Muy buena',
    score: 4
  },
  {
    text: 'Excelente',
    score: 4
  }
]);


let total = 0;
for (let opinion of opiniones.value) {
  total += opinion.score;
}

let promedio = ref(total / opiniones.value.length);

async function cargarDatosApi() {
  let respuesta = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/' + id);

  if (respuesta.ok) {
    datosNotebook.value = await respuesta.json();
  } else {
    alert('ID inválido');
  }
}

cargarDatosApi();
</script>

<template>
  <div id="contenedor-general" v-if="datosNotebook !== undefined">
    <h1 id="titulo" class="caja">{{ datosNotebook.title }}</h1>

    <img class="caja" id="imagen-notebook" :src="datosNotebook.image_url" alt=""/>

    <div class="caja" id="descripcion-producto">
      <p id="descripcion">
        {{ datosNotebook.description }}
      </p>

      <button id="agregar-favoritos">Agregar a favoritos</button>

      <p id="agregado-favoritos-texto"></p>

      <Caracteristicas :features="datosNotebook.features"></Caracteristicas>

      <p v-if="datosNotebook.title.includes('HP')">Garantía de 1 año</p>
      <p v-else-if="datosNotebook.title.includes('Dell')">Garantía de 2 años</p>
      <p v-else>Sin garantía</p>

      <Enlace :url="datosNotebook.factory_url" text="Sitio web"></Enlace>
    </div>

    <div class="caja" id="opiniones">
      <h2>Opiniones</h2>
      <ul>
        <li v-for="(opinion, index) in opiniones" :key="index">{{ opinion.text }} - {{ opinion.score }}/5</li>
      </ul>

      <p v-if="promedio >= 4">Producto de calidad</p>
    </div>

    <div class="caja" id="formulario-opinion">
      <h2>Deja tu opinión</h2>

      <form action="#" method="post">
        <label>
          Comentario:
          <input type="text" name="comentario"/>
        </label>

        <label>
          Calificación:
          <select name="calificacion">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <label>
          <input type="submit" value="Enviar"/>
        </label>
      </form>
    </div>
  </div>
  <p v-else>Cargando...</p>
</template>

<style scoped>
#imagen-notebook {
  border: 1px solid black;
  width: 30vw;
  grid-area: imagen;
}

#descripcion-producto {
  grid-area: descripcion;
}

#opiniones {
  grid-area: opiniones;
}

#formulario-opinion {
  grid-area: formulario-opiniones;
}

#contenedor-general {
  display: grid;
  grid-template-columns: 33vw auto auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    'titulo titulo titulo'
    'imagen descripcion descripcion'
    'opiniones opiniones opiniones'
    'formulario-opiniones formulario-opiniones formulario-opiniones';
}
</style>
