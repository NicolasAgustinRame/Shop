const contenidoTabla = document.getElementById('tbody')
const unidadesElement = document.getElementById('unidades')
const precioElement = document.getElementById('precio')




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
                    actualizarTotales()
                })
            nuevoProducto
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0]
                    cantidadElement.innerText = agregarAlCarrito(producto)
                    actualizarTotales()
                })
        });
    }

}

informacionTablaCarrito()
actualizarTotales()


function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("productos"))
    let unidades = 0
    let precio = 0
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            unidades += producto.cantidad
            precio += producto.price * producto.cantidad
        })

        unidadesElement.innerText = unidades
        precioElement.innerText = precio
    }
}