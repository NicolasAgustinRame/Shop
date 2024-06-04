const contenidoTabla = document.getElementById('tbody')

function informacionTablaCarrito() {
    contenidoTabla.innerHTML = ""

    const productos = JSON.parse(localStorage.getItem("productos"))

    if(productos && productos.length > 0) {
        productos.forEach((producto) => {
            const nuevoProducto = document.createElement('tr')
            nuevoProducto.innerHTML = `
                <td class="imagenes">
                <p>${producto.name}</p>
                <img src="${producto.img}"> 
                </td>
                <td>${producto.price}</td>
                <td>
                    <button class="btn">-</button>
                    <span class="cantidad">${producto.cantidad}</span>   
                    <button class="btn">+</button>
                </td>
            `

            contenidoTabla.appendChild(nuevoProducto)
            nuevoProducto
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0]
                    cantidadElement.innerText = restarAlCarrito(producto)
                    informacionTablaCarrito()
                })
            nuevoProducto
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0]
                    cantidadElement.innerText = agregarAlCarrito(producto)
                })
        });
    }

}

informacionTablaCarrito()