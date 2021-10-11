/*

let nombreUsuario = prompt("Porfavor ingrese su nombre");
let sexoUsuario = prompt("Ingrese F o M (Sexo)");

if (sexoUsuario == "f".toLowerCase() ){
    alert("Bienvenida " + nombreUsuario + " !");
}
else {
    alert("Bienvenido " + nombreUsuario + " !");
}

function consultaServicios(){
    let servicios = prompt("Introduzca un servicio: desarrollo web, diseño grafico, edicion de video, render 3d");
    if(servicios == "desarrollo web".toLowerCase()){
        alert ("Elegiste Desarrollo Web! ingresa el codigo 'MINER' para un 10% de descuento!")
    }
    else if(servicios == "diseño grafico".toLowerCase()){
        alert ("Elegiste Diseño Grafico! ingresa el codigo 'MINER' para un 10% de descuento!")
    }
    else if(servicios == "edicion de video".toLowerCase()){
        alert ("Elegiste Edicion de Video! ingresa el codigo 'MINER' para un 10% de descuento!")
    }
    else if(servicios == "render 3d".toLowerCase()){
        alert("Elegiste Render 3D! ingresa el codigo 'MINER' para un 10% de descuento!")
    }
    else{
        alert("ERROR")
    }
}

consultaServicios();

let codigoDescuento = prompt("Sale $460, ingrese codigo de descuento");

if (codigoDescuento == "miner".toLowerCase()){
    var precioFinal = 460 - (460 * 10 / 100);
    alert("El precio final es de $" + precioFinal);
}
else{
    alert("ERROR");
}

let calcularIVA = prompt("Desea calcular IVA? ingrese SI o NO");

if (calcularIVA == "si".toLowerCase()){
    var IVA = precioFinal + (precioFinal * 21 / 100);
    alert("El precio final + IVA es de " + IVA)
}
else{
    alert("El precio final sin IVA incluido es $" + precioFinal);
}

*/

/*
const Burger = {

    nombre: "Cheese Bacon",
    ingredientes: "Queso Cheddar, Bacon",
    precio: 200

};
*/

function Burger(nombre,ingredientes,precio){

    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;  

    this.consultaPrecio = function(){
        alert("La " + this.nombre + " tiene " + this.ingredientes + " y sale $" + this.precio);
    }
}


let burger1 = new Burger ("Cheese Bacon","Queso Cheddar y Bacon", 400);
let burger2 = new Burger ("Cheese Onion","Queso Cheddar y Cebolla Caramelizada", 500);
let burger3 = new Burger ("Crispy","Queso Cheddar y Aros de Cebolla", 600);

let consulta = prompt("Escribi burger1, burger2 o burger3 para conocer las hamburguesas");

if (consulta == "burger1".toLowerCase()) {
    burger1.consultaPrecio()
}
else if (consulta == "burger2".toLowerCase()) {
    burger2.consultaPrecio()
}
else if (consulta == "burger3".toLowerCase()) {
    burger3.consultaPrecio()
}
else(
    alert("ERROR")
);