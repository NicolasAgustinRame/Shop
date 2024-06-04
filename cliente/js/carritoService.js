function agregarAlCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("productos"))
    let cantidadProductoFinal;
    console.log(memoria)

    let cuenta = 0;
    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("productos",JSON.stringify([nuevoProducto]))
        cuenta = 1
    } else {
        const indicePorducto = memoria.findIndex(item => item.id === producto.id)
        console.log(indicePorducto)
        const nuevaMemoria = memoria;
        if(indicePorducto === -1){
            const nuevoProducto = getNuevoProductoParaMemoria(producto)
            nuevaMemoria.push(nuevoProducto)
            cantidadProductoFinal = 1
            cuenta = 1
        } else {
            nuevaMemoria[indicePorducto].cantidad++;
            cantidadProductoFinal = nuevaMemoria[indicePorducto].cantidad;
            cuenta = nuevaMemoria[indicePorducto].cantidad
        }

        localStorage.setItem("productos",JSON.stringify(nuevaMemoria))
        actualizarCantidadCarrito()
        return cuenta;
    }
    
}

function restarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("productos"))
    const indiceProducto = memoria.findIndex(item => item.id === producto.id)
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto, 1)
        localStorage.setItem("productos", JSON.stringify(memoria))
    } else {
        memoria[indiceProducto].cantidad--;
    }
    
    localStorage.setItem("productos", JSON.stringify(memoria))
    actualizarCantidadCarrito()
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