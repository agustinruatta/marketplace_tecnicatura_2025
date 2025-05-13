import {establecerImagen, establecerTexto, establecerElementosLista, editarLink} from './ui.js';

async function obtenerDatosApi() {
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1');
    return await response.json();
}

async function cargarDatosHtml() {
    let data = await obtenerDatosApi();

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
}

cargarDatosHtml();