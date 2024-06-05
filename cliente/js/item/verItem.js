const itemProductContent = document.getElementById('itemProductContent')
const params = new URLSearchParams(window.location.search)
const productName = params.get("name");
const productImg = params.get("img");
const productPrice = params.get("price");

function crearItem() {
        const nuevoItem = document.createElement("div")
        nuevoItem.classList = "row gx-4 gx-lg-5 align-items-center"
        nuevoItem.innerHTML = `
        <div class="col-md-6">
            <img class="card-img-top mb-5 mb-md-0" src="${productImg}" alt="..." />
        </div>
        <div class="col-md-6">
            <h1 class="display-5 fw-bolder">${productName}</h1>
            <div class="fs-5 mb-2">
                <span>${productPrice}</span>
            </div>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.         Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
            <div class="d-flex">
                <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                <button class="btn btn-outline-dark flex-shrink-0" type="button">
                    <i class="bi-cart-fill me-1"></i>
                    Add to cart
                </button>
            </div>
        </div>
        `

        itemProductContent.appendChild(nuevoItem);
        /* TODO: Agregar funcionalidad add to cart */
        /* nuevoItem.getElementsByClassName("button")[0].addEventListener("click", 
        ()=> agregarAlCarrito(producto)) */
    }


crearItem()

