//Desestructuración de Arreglo
const nombres = ["game 1", "game 2", "game 3", "game 4"];
const precioNombres = [500 , 250 , 1200 , 400];

const [a, b, c, d] = nombres;
const [w, x, y, z] = precioNombres;


//JSON (agregar todos los productos button)
function allProductsProgramar(){
    allProducts();
}

function allProducts(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'catalogo.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datosJson = JSON.parse(this.responseText);
            let res = document.getElementById("tabla");
            
            //localstorage json ("agregar todos los productos")
            localStorage.setItem("carrito" ,JSON.stringify(datosJson));
            let productoCarrito = JSON.parse(localStorage.getItem("carrito"));
            console.log(productoCarrito);

            for(let item of datosJson){
                //item. (lo que desee visualizar de mi JSON)
                //console.log(item)
                res.innerHTML += `<tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                </tr>`;
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
    }
    
    //variables
    let nombreCapturar = document.getElementById("nombre").value;
    let precioCapturar = precioNombres;

    //Datos primitivos (condicionales + AND)
    nombreCapturar === "game 1" && (precioCapturar = w);
    nombreCapturar === "game 2" && (precioCapturar = x);
    nombreCapturar === "game 3" && (precioCapturar = y);
    nombreCapturar === "game 4" && (precioCapturar = z);

    if (nombreCapturar !== "game 1" && nombreCapturar !== "game 2" && nombreCapturar !== "game 3" && nombreCapturar !== "game 4"){
        alert("Este producto no existe")
        getElementById("tabla").remove;
    };

    nuevoSujeto = new persona(nombreCapturar,precioCapturar);

    //LocalStorage ("seleccionar producto")
    localStorage.setItem("escritura" ,JSON.stringify(nuevoSujeto));
    let productoEscritura = JSON.parse(localStorage.getItem("carrito"));
    
    //Función a invocar
    agregar();
}

//Array
let baseDatos= [];

//invocación de funcion
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>$'+nuevoSujeto.precio+'</td></tbody>';
};

//DOM (Creación de H2 (titulo) mediante createElement)
(function(window, document,){
    window.onload = init;

    function init(){
    const titular = document.getElementById('first');
    console.log(titular);

    const h = document.createElement('h2');
    h.textContent = 'Productos en stock:';
    
    titular.appendChild(h);}
})(window, document,);

//DOM (Event)
function programarBtn(){
    Boton;
}

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

//Botones
function firstBoton(){
    document.getElementById("tabla").innerHTML += '<tbody><td>'+a+'</td><td>$'+w+'</td></tbody>';
};

function secondBoton(){
    document.getElementById("tabla").innerHTML += '<tbody><td>'+b+'</td><td>$'+x+'</td></tbody>';
};

function thirdBoton(){
    document.getElementById("tabla").innerHTML += '<tbody><td>'+c+'</td><td>$'+y+'</td></tbody>';
};

function fourthBoton(){
    document.getElementById("tabla").innerHTML += '<tbody><td>'+d+'</td><td>$'+z+'</td></tbody>';
};

