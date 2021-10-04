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