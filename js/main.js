const container = document.querySelector("#container-services");
const category_all = document.querySelector(
  '.category #category_item[category="all"]'
);
const container_list = document.getElementById("#category");
const category_Items = document.querySelectorAll(".category_item");

let data = fetch("../services.json", {});
// datosJson
data
  .then((response) => response.json())
  .then((data) => {
    let template = "";

    data.map((servicio) => {
      template += `<div class="col-sm-12 col-md-4 my-4" category="${servicio.type}" id="container-item">
        <div class="card h-100 shadow" id="card">
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
         
    </div>`;
    });
    container.innerHTML = template;
  });
window.addEventListener("load", function () {
  const container_item = document.querySelectorAll("#container-item");

  // filtrar
  // category_all.classList.add("active");

  category_Items.forEach((e) => {
    e.addEventListener("click", function () {
      let item_category = this.getAttribute("category");
      container_item.forEach((c) => {
        c.style.display = "none";
        
        if (
          c.getAttribute("category") === item_category)
           {
          c.style.display = "flex";
          }else if (item_category === 'all') {
          c.style.display = "flex";
            
          }
      });
    });
  });
});
