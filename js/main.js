
// Asignamos y declaramos las variables globales que vamos a utilizar
let edad
edad= parseInt (prompt("Ingrese su edad"))
// Creamos un condicional para que el usuario ingrese a bebidas alcoholicas, solo si es mayor de edad
if (edad >= 18) {
    console.log("bienvenido a bebidas marote ")
} else if (edad == ""){ 
    alert ("Ingrese su edad por favor")
} else { 
    alert ("No podemos permitirte el ingreso al sector bebidas alcoholicas. Pero puedes buscar otros productos!")
}

let nombre 
nombre= prompt ("Ingrese su nombre")

// Creamos un condicional para que el usuario ingrese un nombre
if(nombre == ""){ 
    alert ("No ha ingresado su nombre")
} else if (nombre != "") { 
alert ("Hola " + nombre + " bienvenido a bebidas marote ") }


// Empezamos a pedir datos por el SORTEO!!

alert ("Estas de suerte! Tenemos ofertas increibles y podes participar de un sorteo!");
console.log ("comienza el sorteo");
let numbersorteo = parseInt (prompt("Ingresa un numero del 1 al 10"));
let resultadofinal = 0;

// Creamos una funcion para sumar la edad del usuario mas el numero que eligio

function resultadoSorteo () { 
    
    resultadofinal =(numbersorteo + edad);
    console.log (resultadofinal);
    alert ("Excelente! Ya estas participando")
}

resultadoSorteo ();
console.log ("Su numero ha sido guardado correctamente")


// Creamos ciclo para dar descuento en base a la bebida elegida
console.log ("comenzamos con los descuentos")
alert ("Por ultimo, queremos consultarte, cual bebida disfrutas mas en este mundial? ")

let bebidaelegida = prompt ("Podes elegir entre: cerveza, vino, aperitivos")
while(bebidaelegida != "ESC" ) {

switch (bebidaelegida) {
case "cerveza":
alert("Te regalamos un descuento de 50% en Schneider");
break;
case "vino":
alert("Disfruta el mundial con un descuento de 50 en Toro Viejo");
break;
case "aperitivos":
alert ("Alenta a la seleccion con Fernet Branca! Te regalamos 40% de descuento");
break;
default:
alert(" Si no sabes que elegir, te regalamos un descuento del 25% al finalizar tu compra");
break;
}
break;

}