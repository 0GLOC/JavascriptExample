//Desestructuración de Arreglo
const nombres = ["Devil May Cry", "Doom", "Dark Souls", "Dishonored"];
const precioNombres = [500 , 250 , 1200 , 400];

const [a, b, c, d] = nombres;
const [w, x, y, z] = precioNombres;

//JSON (agregar todos los productos button)
function allProductsProgramar(){
    allProducts();
};

function allProducts(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/catalogo.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datosJson = JSON.parse(this.responseText);
            let res = document.getElementById("tabla");
            
            //localstorage json ("agregar todos los productos")
            localStorage.setItem("carrito" ,JSON.stringify(datosJson));
            let productoCarrito = JSON.parse(localStorage.getItem("carrito"));
            
            for(let item of datosJson){
                //item. (lo que desee visualizar de mi JSON)
                //console.log(item)

                let total=item.price;
                for(let i of baseDatos) total+=i;

                item.price === 500 && baseDatos.push(w);
                item.price === 250 && baseDatos.push(x);
                item.price === 1200 && baseDatos.push(y);
                item.price === 400 && baseDatos.push(z);

                res.innerHTML += `<tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>$${total}</td>
                </tr>`;
                document.getElementById("botonDelete").style.display = 'flex';
                document.getElementById("desaparecer").style.display = 'flex';
            };
        };
    };
};

//Función invocada desde form con onclick
function capturar(){
    
    //Constructor de objetos
    function persona(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    };
    
    //variables
    let nombreCapturar = document.getElementById("nombre").value;
    let precioCapturar = precioNombres;

    //Datos primitivos (condicionales + AND)
    nombreCapturar === "devil may cry" && (precioCapturar = w);
    nombreCapturar === "Devil May Cry" && (precioCapturar = w);
    nombreCapturar === "doom" && (precioCapturar = x);
    nombreCapturar === "Doom" && (precioCapturar = x);
    nombreCapturar === "dark souls" && (precioCapturar = y);
    nombreCapturar === "Dark Souls" && (precioCapturar = y);
    nombreCapturar === "dishonored" && (precioCapturar = z);
    nombreCapturar === "Dishonored" && (precioCapturar = z);

    if (nombreCapturar !== "devil may cry" && nombreCapturar !== "Devil May Cry" && nombreCapturar !== "doom" && nombreCapturar !== "Doom" && nombreCapturar !== "dark souls" && nombreCapturar !== "Dark Souls" && nombreCapturar !== "dishonored" && nombreCapturar !== "Dishonored"){
        //sweet alert (libreria)
        swal({
            title: "Este producto no existe!",
            text: "Prueba a escribir el titulo correctamente",
            icon: "error",
            dangerMode: true,
          });
        getElementById("tabla").remove;
    };

    nuevoSujeto = new persona(nombreCapturar,precioCapturar);

    //LocalStorage ("seleccionar producto")
    localStorage.setItem("escritura" ,JSON.stringify(nuevoSujeto));
    let productoEscritura = JSON.parse(localStorage.getItem("carrito"));

    //Función a invocar
    agregar();
};

//Array vacio
let baseDatos= [];

//invocación de funcion
function agregar(){
    let total=nuevoSujeto.precio;
    for(let i of baseDatos) total+=i;

    nuevoSujeto.precio === 500 && baseDatos.push(w);
    nuevoSujeto.precio === 250 && baseDatos.push(x);
    nuevoSujeto.precio === 1200 && baseDatos.push(y);
    nuevoSujeto.precio === 400 && baseDatos.push(z);

    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>$'+nuevoSujeto.precio+'</td><td>$'+total+'</td></tbody>';
    document.getElementById("botonDelete").style.display = 'flex';
    document.getElementById("desaparecer").style.display = 'flex';
};


//DOM (Creación de H2 (titulo) mediante createElement)
(function(window, document,){
    window.onload = init;

    function init(){
    const titular = document.getElementById('first');

    const h = document.createElement('h2');
    h.textContent = 'KEYS';
    
    titular.appendChild(h);}
})(window, document,);

//DOM (Event)
function Boton(){
    const guardarBtn = document.querySelector('#boton1');
    const guardarBtn2 = document.querySelector('#boton2');
    const guardarBtn3 = document.querySelector('#boton3');
    const guardarBtn4 = document.querySelector('#boton4');
    
    guardarBtn.addEventListener('click', firstBoton);
    guardarBtn2.addEventListener('click',secondBoton);
    guardarBtn3.addEventListener('click',thirdBoton);
    guardarBtn4.addEventListener('click',fourthBoton);
};

function borrar(){
    const borrarBtn = document.querySelector('#delete');

    borrarBtn.addEventListener('click', borrarBtnTotal);
};

function comprar(){
    const comprarBtn = document.querySelector('#buyed');

    comprarBtn.addEventListener('click', comprarBtnTotal);
};

//Botones
//Game 1 (Devil May Cry)
function firstBoton(){
    let total=w;
    for(let i of baseDatos) total+=i;
    const sumarArrayVacio = baseDatos.push(w);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+a+'</td><td>$'+w+'</td><td>$'+total+'</td></tbody>';
    document.getElementById("botonDelete").style.display = 'flex';
    document.getElementById("desaparecer").style.display = 'flex';
};

//Game 2 (Doom)
function secondBoton(){
    let total=x;
    for(let i of baseDatos) total+=i;
    const sumarArrayVacio = baseDatos.push(x);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+b+'</td><td>$'+x+'</td><td>$'+total+'</td></tbody>';
    document.getElementById("botonDelete").style.display = 'flex';
    document.getElementById("desaparecer").style.display = 'flex';
};

//Game 3 (Dark souls)
function thirdBoton(){
    let total=y;
    for(let i of baseDatos) total+=i;
    const sumarArrayVacio = baseDatos.push(y);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+c+'</td><td>$'+y+'</td><td>$'+total+'</td></tbody>';
    document.getElementById("botonDelete").style.display = 'flex';
    document.getElementById("desaparecer").style.display = 'flex';
};

//Game 4 (Dishonored)
function fourthBoton(){
    let total=z;
    for(let i of baseDatos) total+=i;
    const sumarArrayVacio = baseDatos.push(z);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+d+'</td><td>$'+z+'</td><td>$'+total+'</td></tbody>';
    document.getElementById("botonDelete").style.display = 'flex';
    document.getElementById("desaparecer").style.display = 'flex';
};

//Eliminar productos
function borrarBtnTotal(){
    location.reload();
};

//Comprar productos
function comprarBtnTotal(){
    location.href = "pages/compra.html";
};
