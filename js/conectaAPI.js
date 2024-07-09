async function listarProductos(){
    
    const conexion = await fetch("http://localhost:3000/productos",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    });
    
    const conexionConvertida = await conexion.json();
    
    return conexionConvertida;
}


async function crearProducto(nombre, precio, imagen, id){
    const conexion = await fetch("http://localhost:3000/productos",
        {
        method:"POST",
        headers: {
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            id: id
        })
    });

    if(!conexion.ok){
        throw new Error("No fue posible crear el producto");
    }

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProucto(id){
    const conexion = await fetch(`http://localhost:3000/productos/${id}`, 
        {
            method: 'DELETE'
        });

    if(!conexion.ok){
        throw new Error("No fue posible eliminar el producto");
    }
    
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

export const conectaAPI={
    listarProductos, crearProducto, eliminarProucto
}