export function establecerTexto(idElemento, texto) {
    document.getElementById(idElemento).textContent = texto;
}

export function establecerImagen(idElemento, urlImagen, alt) {
    let imagen = document.getElementById(idElemento);
    imagen.src = urlImagen;
    imagen.alt = alt;
}

export function establecerElementosLista(idLista, textos) {
    let lista = document.getElementById(idLista);

    for (let texto of textos) {
        let listItem = document.createElement('li');
        listItem.textContent = texto;
        lista.appendChild(listItem);
    }
}

export function editarLink(idElemento, url) {
    let link = document.getElementById(idElemento);
    link.href = url;
}