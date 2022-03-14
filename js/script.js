//Productos
const games = [
    { producto: 'game', name: 'game 1', price: 500},
    { producto: 'game', name: 'game 2', price: 250},
    { producto: 'game', name: 'game 3', price: 1200},
    { producto: 'game', name: 'game 4', price: 400},
]

localStorage.setItem("Games" ,JSON.stringify(games));
let storageGames = JSON.parse(localStorage.getItem("Games"));
console.log(storageGames);

//JSON
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

            for(let item of datosJson){
                //item. (lo que desee visualizar de mi JSON)
                //console.log(item)
                res.innerHTML += `<tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>$</td>
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
    let precioCapturar = 0;

    //Localstorage
    localStorage.setItem("Array" ,JSON.stringify(nombreCapturar));
    let arrayRecojido = JSON.parse(localStorage.getItem("Array"));
    console.log(arrayRecojido);

    //Datos primitivos
    if (nombreCapturar === "game 1"){
        precioCapturar= 500;
    };

    if (nombreCapturar === "game 2"){
        precioCapturar= 250;
    };

    if (nombreCapturar === "game 3"){
        precioCapturar= 1200;
    };

    if (nombreCapturar === "game 4"){
        precioCapturar= 400;
    };
    
    if (nombreCapturar !== "game 1" && nombreCapturar !== "game 2" && nombreCapturar !== "game 3" && nombreCapturar !== "game 4"){
        alert("Este producto no existe")
        getElementById("tabla").remove;
    };

    nuevoSujeto = new persona(nombreCapturar,precioCapturar);
    console.log(nuevoSujeto);
    
    //Función a invocar
    agregar();
}

//Array
let baseDatos= [];


//invocación de funcion
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>$'+nuevoSujeto.precio+'</td><td>$'+" "+'</td></tbody>';
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

function firstBoton(){
    document.getElementById("tabla").innerHTML += '<tbody><td>'+'game1'+'</td><td>$'+'500'+'</td><td>$'+" "+'</td></tbody>';
};

function secondBoton(){
    document.getElementById("tabla").innerHTML += '<tbody><td>'+'game2'+'</td><td>$'+'250'+'</td><td>$'+" "+'</td></tbody>';
};

function thirdBoton(){
    document.getElementById("tabla").innerHTML += '<tbody><td>'+'game3'+'</td><td>$'+'1200'+'</td><td>$'+" "+'</td></tbody>';
};

function fourthBoton(){
    document.getElementById("tabla").innerHTML += '<tbody><td>'+'game4'+'</td><td>$'+'400'+'</td><td>$'+" "+'</td></tbody>';
};