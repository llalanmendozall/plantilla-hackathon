
const container = document.querySelector('#container-services')

fetch('../services.json',{

})
.then(response => response.json())
.then(data =>{
    let template = '';

    data.map(servicio =>{
        
        template += 
    `<div class="col-sm-12 col-md-4 my-4">
        <div class="card h-100">
            <img src="${servicio.img}" class="card-img-top h-25" alt="${servicio.name} logo">
            <div class="card-body">
              <h5 class="card-title">${servicio.name}</h5>
              <p class="card-text " id="description">${servicio.description}</p>
              
              
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bold">Precio mensual: $${servicio.month_price} MXN</li>
                <li class="list-group-item">Prueba gratis: ${servicio.free_trial} días</li>
                <li class="list-group-item"> 
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${servicio.id}" aria-expanded="false" aria-controls="flush-collapseOne">
                        Membresias
                    </button>
                    </h2>
                    <div id="flush-collapse${servicio.id}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                    
                    </div>
                    </div>
                    </div>
                </div>
              </li>
            </ul>
            <div class="card-footer text-center">
                <a href="${servicio.link}" class="btn btn-primary">Ir al sitio</a>
             </div>
        </div>
         
    </div>`

})
container.innerHTML = template
})