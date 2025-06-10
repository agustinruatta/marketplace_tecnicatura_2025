<script setup>
import {ref} from 'vue';

let notebooks = ref([])

async function cargarNotebooks() {
  let notebooksApi = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/');
  notebooks.value = await notebooksApi.json();
}

cargarNotebooks();

</script>

<template>
  <div id="contenedor-general">

    <div id="buscador">
      <form action="#" method="get">
        <label>
          <input type="text" name="buscar" placeholder="Ingrese el producto a buscar">
        </label>

        <label>
          <input type="submit" value="Buscar">
        </label>
      </form>
    </div>

    <h1 id="titulo">Las notebooks más compradas</h1>

    <div v-for="(notebook, index) in notebooks" :key="index" class="caja" :id="'notebook' + (index + 1)">
      <RouterLink :to="'/notebook/' + notebook.id">
        <strong>{{ notebook.title }}</strong>
        <img
            :src="notebook.image_url"
            :alt="notebook.title">
      </RouterLink>
    </div>
  </div>
</template>

<style>
.imagen-preview {
  width: 15vw;
}

#contenedor-general {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 50px auto auto auto;
  grid-template-areas: "buscador buscador"
                        "titulo titulo"
                        "notebook1 notebook2"
                        "notebook3 notebook4";
}

#buscador {
  grid-area: buscador;
}

#titulo {
  grid-area: titulo;
}

#notebook1 {
  grid-area: notebook1;
}

#notebook2 {
  grid-area: notebook2;
}

#notebook3 {
  grid-area: notebook3;
}

#notebook4 {
  grid-area: notebook4;
}
</style>
