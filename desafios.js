let operacion = prompt("Elija una operacion: suma, resta, multiplicacion, division. Si desea terminar, escriba salir");

while(operacion != "salir"){

    let numeroA = parseInt(prompt("Ingrese el primer numero"));
    let numeroB = parseInt(prompt("Ingrese el segundo numero"));

    if (operacion.toLowerCase() == "suma"){
        alert(numeroA + numeroB);
    }
    else if (operacion.toLowerCase() == "resta"){
        alert(numeroA - numeroB);
    }
    else if (operacion.toLowerCase() == "multiplicacion"){
        alert(numeroA * numeroB);
    }
    else if (operacion.toLowerCase() == "division"){
        alert(numeroA / numeroB);
    }
    else (alert = "Error");

    operacion = prompt("Elija una operacion: suma, resta, multiplicacion, division. Si desea terminar, escriba salir");

}
