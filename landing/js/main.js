const VIDEO_SERVICES = [
    {
        "name":"netflix",
        "month-price":0,
        "membership":[
            {
                "name":"",
                "price": '',
                "devices":0,
            }
        ], 
        "free-trial":30,
        "contact":"",
        "company":"",
        "link":""
    }
]

const container = document.querySelector('#container-services')

fetch('../services.json',{

})
.then(response => response.json())
.then(data =>{
    let template = '';
    data.map(servicio =>{
        
        template += `<div class="col-md-4 mt-4">
        <div class="card" style="width: 18rem;">
            <img src="${servicio.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${servicio.name}</h5>
              <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit dignissimos quam harum laudantium! Libero dolorum voluptatum esse voluptatibus odio.</p>
              
              
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio mensual: ${servicio.month_price}</li>
                <li class="list-group-item">Prueba gratis: ${servicio.free_trial}</li>
                <li class="list-group-item">A third item</li>
              </ul>
            <div class="card-body">
                <a href="${servicio.link}" class="btn btn-primary">Ir al sitio</a>
              </div>
          </div>
         
    </div>`

})
container.innerHTML = template
})