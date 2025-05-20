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

        //Si el valor guardado es null, es que no hay nada guardado en el localStorage
        if (valorGuardadoLocalStorage === null) {
            //Como no hay nada guardado, creo una lista con el id del notebook que voy a agregar a favoritos.
            let listaFavoritos = [idNotebook];

            //Lo guardo en el localStorage. Recordar que el localStorage solo guarda strings, por eso uso JSON.stringify para convertir el array en un string.
            localStorage.setItem('favoritos', JSON.stringify(listaFavoritos));
        } else {
            //En este caso hay algo guardado en el localStorage. Lo que hago es obtener el valor guardado (que es un string) y convertirlo a un array.
            let listaFavoritos = JSON.parse(valorGuardadoLocalStorage);

            //A esa lista, le agrego el id del notebook que quiero agregar a favoritos.
            listaFavoritos.push(idNotebook);

            //Lo guardo en el localStorage. Recordar que el localStorage solo guarda strings, por eso uso JSON.stringify para convertir el array en un string.
            localStorage.setItem('favoritos', JSON.stringify(listaFavoritos));
        }
    })
}

//Obtengo los datos de la API
let datosApi = await obtenerDatosApi();
cargarDatosHtml(datosApi);
permitirAgregarFavoritos(datosApi.id);