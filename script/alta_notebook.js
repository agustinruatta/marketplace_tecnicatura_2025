document.getElementById('formulario-carga').addEventListener('submit', async function(event) {
    //Prevengo que recargue la página
    event.preventDefault();

    //Obtengo los valores de los inputs pasandole al FormData el formulario
    let data = new FormData(document.getElementById('formulario-carga'));

    //Creo un array de características
    let caracteristicas = [];

    //Añado al array un objeto con la primera característica
    caracteristicas.push({
        name: data.get('nameFeatureA'),
        description: data.get('descriptionFeatureA')
    });

    //Lo mismo con la segunda característica
    caracteristicas.push({
        name: data.get('nameFeatureB'),
        description: data.get('descriptionFeatureB')
    });

    //Creo el objeto que voy a enviar a la API
    let object = {
        title: data.get('title'),
        description: data.get('description'),
        image_url: data.get('image'),
        factory_url: data.get('site'),
        features: caracteristicas
    }

    //Esta es la URL de al API. Recuerden obtener la suya desde https://crudcrud.com/. Importante agregar "/notebook" al final.
    let url = 'https://crudcrud.com/api/ca7e4cc6c4864843a05765fbca338813/notebook';

    await fetch(url, {
        //Voy a hacer un POST, ya que doy de alta una nueva notebook
        method: 'POST',
        //A la API le envío un string, por eso tengo que transformar el objeto en un string
        body: JSON.stringify(object),
        //Le digo a la API que el body es un JSON. Si no lo hago, la API va a fallar
        headers: {
            'Content-Type': 'application/json'
        }
    })

    //Fue un éxito, mostrar un mensaje
    alert('Producto agregado con éxito');
})