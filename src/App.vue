<script setup>
import { ref } from 'vue'

let datosNotebook = ref({
    "id": 1,
    "title": "Notebook HP 14-dq2024la",
    "description": "Computadora HP orientado para gama media. Procesador Intel® Core™ i9 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
    "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
    "factory_url": "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
    "features": [{
      "name": "RAM",
      "description": "8 GB"
    },
      {
        "name": "Procesador",
        "description": "Intel I9"
      }
    ]
  }
)
</script>

<template>
  <div id="contenedor-general">
    <h1 id="titulo" class="caja">{{ datosNotebook.title }}</h1>

    <img class="caja" id="imagen-notebook" :src="datosNotebook.image_url" alt="" />

    <div class="caja" id="descripcion-producto">
      <p id="descripcion">
        {{ datosNotebook.description }}
      </p>

      <button id="agregar-favoritos">Agregar a favoritos</button>

      <p id="agregado-favoritos-texto"></p>

      <h2>Características</h2>
      <ul id="lista-tipos">
        <li
          v-for="(notebook, indice) in datosNotebook.features"
          :key="indice"
        >{{ notebook.description }}</li>
      </ul>

      <a :href="datosNotebook.factory_url" id="link-sitio-web">Sitio web</a>
    </div>

    <div class="caja" id="opiniones">
      <h2>Opiniones</h2>
      <ul>
        <li>Buena notebook - 5/5</li>
        <li>Muy buena - 4/5</li>
        <li>Me llego rota - 1/5</li>
      </ul>
    </div>

    <div class="caja" id="formulario-opinion">
      <h2>Deja tu opinión</h2>

      <form action="#" method="post">
        <label>
          Comentario:
          <input type="text" name="comentario" />
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
          <input type="submit" value="Enviar" />
        </label>
      </form>
    </div>
  </div>
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
