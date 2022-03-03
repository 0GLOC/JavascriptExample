//Ejemplo de filtrado para el entregable
const games = [
    { producto: 'game', nombre: 'game 1', precio: 500},
    { producto: 'game', nombre: 'game 2', precio: 250},
    { producto: 'game', nombre: 'game 3', precio: 1200},
    { producto: 'game', nombre: 'game 4', precio: 400},
]

const Filtrar = games.filter(x => x.producto == "game")


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
            nombreCapturar = null
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



