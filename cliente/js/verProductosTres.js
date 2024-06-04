const contenedorProductos = document.getElementById('productosSeccion')

function crearCardsProductos(productos) {
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div")
        nuevoProducto.classList = "col mb-5"
        nuevoProducto.innerHTML = `
            <div class="card h-100">
                <!-- Sale badge-->
                <div class="badge badge-shadow bg-white text-dark position-absolute" style="top: 0.5rem; right: 0.5rem">
                    <a class="btn" href="item.html"><i class="bi bi-eye-fill"></i></a>
                </div>
                <!-- Product image-->
                <img class="card-img-top" src="${producto.img}" alt="${producto.name}" />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder titulo">${producto.name}</h5>
                        <!-- Product price-->
                        <p class="precio">$${producto.price.toFixed(2)}</p>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <button class="btn btn-outline-dark mt-auto button" id="agregar">Añadir</button>
                    </div>
                </div>
            </div>
        `
        
        contenedorProductos.appendChild(nuevoProducto)
        nuevoProducto.getElementsByClassName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto))
    });
}

crearCardsProductos(productos.slice(0,3))