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

    <div class="caja" id="notebook1">
      <a href="notebook.html">
        <strong>Notebook HP 14-dq2024la</strong>
        <img
            src="https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png"
            alt="Notebook HP 14-dq2024la">
      </a>
    </div>

    <div class="caja" id="notebook2">
      <a href="notebook.html">
        <strong>Notebook HP 14-dq2024la</strong>
        <img
            src="https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png"
            alt="Notebook HP 14-dq2024la">
      </a>
    </div>

    <div class="caja" id="notebook3">
      <a href="notebook.html">
        <strong>Notebook HP 14-dq2024la</strong>
        <img
            src="https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png"
            alt="Notebook HP 14-dq2024la">
      </a>
    </div>

    <div class="caja" id="notebook4">
      <a href="notebook.html">
        <strong>Notebook HP 14-dq2024la</strong>
        <img
            src="https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png"
            alt="Notebook HP 14-dq2024la">
      </a>
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
