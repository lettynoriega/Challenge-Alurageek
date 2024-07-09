import{ conectaAPI }from "./conectaAPI.js";

setTimeout(()=>{
    const productos = document.querySelectorAll('.productos__card__precio__borrar');
    
    for(let contador=0; contador < productos.length; contador++){
        
        const  producto= productos[contador];

        producto.onclick=function(){
            try {
                conectaAPI.eliminarProucto(producto.id);
                console.log('Producto eliminado');
            } catch (error) {
                alert(error);
            }
            //console.log(producto.id);
        };
    }
},100);

