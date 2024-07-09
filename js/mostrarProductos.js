import { conectaAPI } from "./conectaAPI.js";

const listaProductos = document.querySelector("[data-productos]");
let numeroProductos= 0;


function construyeCard(nombre, precio, imagen, id){
    const card =  document.createElement("div");

    card.className = "productos__card";

    card.innerHTML =`<img src="${imagen}" alt="">
        <div class="productos__card__container">                            
            <p class="productos__card__descripcion">${nombre}</p>
            <div class="productos__card__precio">
                <p>$ ${precio}</p>
                <input class="productos__card__precio__borrar" type="image"  src="./assets/erase.png" id="${id}">
            </div>
        </div>`

    
    return card;
}

async function listarProductos(){
    try {
        const listaAPI = await conectaAPI.listarProductos();

        numeroProductos = Number(listaAPI[listaAPI.length - 1]["id"]) + 1;        
        localStorage.setItem("id",JSON.stringify(numeroProductos));        

        listaAPI.forEach(element => listaProductos.appendChild(construyeCard(element.nombre, element.precio, element.imagen, element.id)));               
        
        
    } catch (error) {
        localStorage.setItem("id",JSON.stringify(1));               
        listaProductos.innerHTML=`<h2>No fue posible cargar la lista de productos</h2>`        
    }
}

listarProductos();






