document.getElementById('formulario-carga').addEventListener('submit', async function(event) {
    event.preventDefault();

    let data = new FormData(document.getElementById('formulario-carga'));

    let caracteristicas = [];

    caracteristicas.push({
        name: data.get('nameFeatureA'),
        description: data.get('descriptionFeatureA')
    });

    caracteristicas.push({
        name: data.get('nameFeatureB'),
        description: data.get('descriptionFeatureB')
    });

    let object = {
        title: data.get('title'),
        description: data.get('description'),
        image_url: data.get('image'),
        factory_url: data.get('site'),
        features: caracteristicas
    }

    let url = 'https://crudcrud.com/api/ca7e4cc6c4864843a05765fbca338813/notebook';

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    alert('Producto agregado con éxito');
})