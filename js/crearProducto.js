    import { conectaAPI } from "./conectaAPI.js";


    const formulario = document.querySelector("[data-formulario]");

    const botonLimpiar = document.querySelector("[data-limpiar]");
    
    async function crearProducto(evento){
    evento.preventDefault();
    
    const idStorage = localStorage.getItem("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const id = JSON.parse(idStorage).toString();
    
    try {
        await conectaAPI.crearProducto(nombre, precio, imagen, id);
        
        console.log("Producto creado");
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    crearProducto(evento);
});

botonLimpiar.addEventListener("click",(evento)=>{
    evento.preventDefault();
    document.querySelector("[data-nombre]").value="";
    document.querySelector("[data-precio]").value="";
    document.querySelector("[data-imagen]").value="";

});
