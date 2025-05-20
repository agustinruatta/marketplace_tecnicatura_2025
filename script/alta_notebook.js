document.getElementById('formulario-carga').addEventListener('submit', function(event) {
    event.preventDefault();

    let data = new FormData(document.getElementById('formulario-carga'));

    alert(data.get('title'));
    alert(data.get('description'));
    alert(data.get('image'));
    alert(data.get('site'));
    alert(data.get('nameFeatureA'));
    alert(data.get('descriptionFeatureA'));
})