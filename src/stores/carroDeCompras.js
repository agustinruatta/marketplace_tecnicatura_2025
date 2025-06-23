import {defineStore} from "pinia";
import {ref} from "vue";

export let carroDeComprasStore = defineStore('carroDeCompras', () => {
    let notebooksCompradas = ref([]);

    const agregarNotebook = (notebook) => {
        notebooksCompradas.value.push(notebook);
    }

    return {notebooksCompradas, agregarNotebook}
})