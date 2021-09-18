  // Comentario simple
/* Comentario
Multilinea */

// Variables


var numeroUno = 30;

var nombreUsuario;

var apellidoUsuario;

numeroUno = 100;

var mensaje = "Mensaje enviado desde la variable Mensaje"

alert ("ATENCION");
nombreUsuario = prompt("Ingrese su nombre");
apellidoUsuario = prompt("Ingrese su apellido");


console.log("Bienvenido al sistema " + nombreUsuario + " " + apellidoUsuario);



var numeroA = 20;
var numeroB = 40;


var numeroC;


// SUMA //

numeroC = 30 + 30;

// RESTA //

numeroC = 100 - 20;

// DIVISION //

numeroC = 100 / 2;

// MULTIPLICACION //

numeroC = 100 * 2;

// CONCATENACION // 

numeroC = "string" + 20;

var numeroUno = prompt("Ingrese el primer numero");
var numeroDos = prompt("Ingrese el segundo numero");

var resultado = parseInt(numeroUno) + parseInt(numeroDos);

alert ("Bueno " + nombreUsuario + " " + apellidoUsuario + " el resultado es " + resultado);

alert ("Ahora calculemos el area de un cuadrado");

var numCuadrado1 = prompt("Ingrese la medida de un lado del cuadrado");

var resultadoArea = parseInt(numCuadrado1) * parseInt(numCuadrado1);

alert ("El area del cuadrado es de " + resultadoArea);

var numeroAleatorio = prompt("Pone un numero y te digo el que sigue");

var numeroConsecutivo =  parseInt(numeroAleatorio) + 1;

alert ("El numero que le sigue es " + numeroConsecutivo);

var edadA = prompt("Decime tu edad");

var edadB = prompt("Ahora la de tu abuelo");

var diferenciaEdad = parseInt(edadB) - parseInt(edadA);

alert ("Vos y tu abuelo se llevan " + diferenciaEdad + " años.");

var edadNacimiento = 2021 - prompt("En que ano naciste?") ;

alert ("Tenes " + edadNacimiento + " años.")