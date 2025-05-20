import {establecerImagen, establecerTexto, establecerElementosLista, editarLink} from './ui.js';

async function obtenerDatosApi() {
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1');
    return await response.json();
}

async function cargarDatosHtml(data) {
    let listaCaracteristicas = [];
    for (let tipoNotebook of data.notebooksTypes) {
        let textoDescripcion = `${tipoNotebook.ramAmount} de RAM, $ ${tipoNotebook.price}`;
        listaCaracteristicas.push(textoDescripcion);
    }
    establecerElementosLista('lista-tipos', listaCaracteristicas);

    establecerTexto('titulo', data.title);
    establecerTexto('descripcion', data.description);
    establecerImagen('imagen-notebook', data.image_urls[0], data.title);
    editarLink('link-sitio-web', data.factory_url);

    let valorLocalStorage = localStorage.getItem('favoritos');
    if (valorLocalStorage !== null) {
        let listaFavoritos = JSON.parse(valorLocalStorage);
        if (listaFavoritos.includes(data.id)) {
            document.getElementById('agregado-favoritos-texto').textContent = 'Agregado a favoritos';
        }
    }
}

function permitirAgregarFavoritos(idNotebook) {
    document.getElementById('agregar-favoritos').addEventListener('click', function () {
        let valorGuardadoLocalStorage = localStorage.getItem('favoritos');

        if (valorGuardadoLocalStorage === null) {
            let listaFavoritos = [idNotebook];
            localStorage.setItem('favoritos', JSON.stringify(listaFavoritos));
        } else {
            let listaFavoritos = JSON.parse(valorGuardadoLocalStorage);
            listaFavoritos.push(idNotebook);
            localStorage.setItem('favoritos', JSON.stringify(listaFavoritos));
        }
    })
}

let datosApi = await obtenerDatosApi();
cargarDatosHtml(datosApi);
permitirAgregarFavoritos(datosApi.id);