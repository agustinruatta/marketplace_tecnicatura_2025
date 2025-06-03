<script setup>
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
