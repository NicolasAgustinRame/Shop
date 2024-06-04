function agregarAlCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("productos"))
    let cantidadProductoFinal;
    console.log(memoria)
    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("productos",JSON.stringify([nuevoProducto]))
    } else {
        const indicePorducto = memoria.findIndex(item => item.id === producto.id)
        console.log(indicePorducto)
        const nuevaMemoria = memoria;
        if(indicePorducto === -1){
            const nuevoProducto = getNuevoProductoParaMemoria(producto)
            nuevaMemoria.push(nuevoProducto)
            cantidadProductoFinal = 1
        } else {
            nuevaMemoria[indicePorducto].cantidad++;
            cantidadProductoFinal = nuevaMemoria[indicePorducto].cantidad;
        }

        localStorage.setItem("productos",JSON.stringify(nuevaMemoria))
        actualizarCantidadCarrito()
    }

}

function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto
}


const cuentaCarritoElement = document.getElementById("cantidadCarrito")
function actualizarCantidadCarrito() {
    const memoria = JSON.parse(localStorage.getItem("productos"))
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0)
    cuentaCarritoElement.innerText = cuenta;
}

actualizarCantidadCarrito()