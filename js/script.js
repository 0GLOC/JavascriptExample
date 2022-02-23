function capturar(){
    function persona(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    let nombreCapturar = document.getElementById("nombre").value;
    let edadCapturar = document.getElementById("edad").value;

    nuevoSujeto = new persona(nombreCapturar,edadCapturar);
    console.log(nuevoSujeto);
    agregar();
}

let baseDatos= [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tbody>';
};