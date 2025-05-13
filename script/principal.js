async function obtenerDatosApi() {
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/');
    return await response.json();
}

async function cargarDatosHtml() {
    let data = await obtenerDatosApi();
    let contenedorGeneral = document.getElementById('contenedor-general');

    for (let i = 0; i < data.length; i++) {
        let notebook = data[i];

        let imagen = document.createElement('img');
        imagen.src = notebook.image_urls[0];
        imagen.alt = notebook.title;

        let strong = document.createElement('strong');
        strong.textContent = notebook.title;

        let link = document.createElement('a');
        link.href = 'notebook.html'
        link.appendChild(strong);
        link.appendChild(imagen);

        let div = document.createElement('div');
        div.appendChild(link);
        div.classList.add('caja');
        div.id = 'notebook' + (i + 1);

        contenedorGeneral.appendChild(div);
    }
}

cargarDatosHtml();