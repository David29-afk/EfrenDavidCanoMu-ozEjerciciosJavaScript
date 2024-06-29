// ejercicio 1


let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));


    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
    
// ejercicio 2

  
// let suma = 0;


// while (true) {

//     let numero = parseFloat(prompt("Ingrese un número (o 0 para terminar):"));

//     if (numero === 0) {
//         break;
//     }


//     if (numero) {
//         suma += numero; 
//     } else {
//         console.log("No ha ingresado un número válido. Por favor, ingrese un número válido.");
//     }
// }


// console.log("La suma total de los números ingresados es:", suma);

// ejercicio 3


// let numeroSecreto = Math.floor(Math.random() * 100) + 1;


// let intentos = 0;


// let adivinado = false;


// while (!adivinado) {
    
//     let numeroIngresado = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));

   
//     intentos++;

   
//     if (numeroIngresado === numeroSecreto) {
        
//         console.log("¡Felicidades! Has adivinado el número secreto", numeroSecreto );
//         console.log("en tantos intentos:", intentos );
//         adivinado = true; 
//     } else if (numeroIngresado < numeroSecreto) {
        
//         console.log("El número secreto es mayor. Intenta nuevamente.");
//     } else {
//         console.log("El número secreto es menor. Intenta nuevamente.");
//     }
// }



// ejercicio 4


// let numero = prompt("Ingresa un número para verificar si es primo:");


// numero = parseInt(numero);


// function esPrimo(num) {
//     if (num <= 1) return false; 
//     if (num <= 3) return true; 
//     if (num % 2 === 0 || num % 3 === 0) return false; 


//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true;
// }


// if (esPrimo(numero)) {
//     console.log(numero + " es un número primo.");
//     alert(numero + " es un número primo.");
// } else {
//     console.log(numero + " no es un número primo.");
//     alert(numero + " no es un número primo.");
// }


// ejercicio 5



// let numero = prompt("Ingresa un número entero positivo:");
// let number = parseInt(numero);


// if (isNaN(number) || number <= 0) {
//     console.log("Por favor, ingresa un número entero positivo válido.");
// } else {

//     console.log("Los numero divisores son:");
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             console.log(i);
//         }
//     }
// }

// ejercicio 6

// let elementos = ["David", 19, "mexicano", "pelonegro", "estudiante", "programacion", "futbol", "escritura", "trabajo", "perro"]

// for (let i = 0; i < elementos.length; i++) {
//     console.log(elementos[i]);
// }

// ejercicio 7

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for (let i = 0; i < numeros.length; i++) {
//     let doble = numeros[i] * 2;
//     console.log("El doble es:", doble);
// }


// ejercicio 8

// let personas = [
//     { nombre: "Juan", edad: 30, ciudad: "Madrid", color: "naranja" },
//     { nombre: "María", edad: 25, ciudad: "Barcelona", color: "negro" },
//     { nombre: "Pedro", edad: 35, ciudad: "Valencia", color: "blanco" },
//     { nombre: "Laura", edad: 28, ciudad: "Sevilla", color: "rojo" },
//     { nombre: "Carlos", edad: 32, ciudad: "Bilbao", color: "azul" }
// ];

// for (let i = 0; i < personas.length; i++){
//     let presentacion = "Hola mi nombre es " + personas [i].nombre + " tengo " + personas [i].edad + "años " + "vivo en " + personas[i].ciudad + " y mi color favorito es " + personas[i].color

//     console.log(presentacion);
// }

// console.log("Fin de la Presentacion");


// ejercicio 9


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) {
//         console.log(numeros[i]);
//     }
// }

// ejercicio 10

// let sumaPares = 0;
// let sumaImpares = 0;


// function calcularSumas() {
//     while (true) {

//         let numero = parseInt(prompt("Ingresa un número (Ingresa 0 para terminar):"));

//         if (numero === 0) {
//             break; 
//         }


//         if (numero % 2 === 0) {
//             sumaPares += numero; 
//         } else {
//             sumaImpares += numero; 
//         }
//     }


//     console.log("La suma de los números pares es:", sumaPares);
//     console.log("La suma de los números impares es:", sumaImpares);
// }


// calcularSumas();



// ejercicio 11


// let numeros = [42, 12, 67, 34, 89, 23, 56, 91, 8, 17];


// let maximo = numeros[0]; 


// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > maximo) {
//         maximo = numeros[i]; 
//     }
// }


// console.log("El número más grande en el array es:" + maximo);



// ejercicio 12


// let numeros = [42, 12, 67, 34, 89, 23, 56, 91, 8, 17];


// let minimo = numeros[0]; 


// for (let i = 1; i < numeros.length; i++) {

//     if (numeros[i] < minimo) {
//         minimo = numeros[i]; 
//     }
// }


// console.log("El número menor en el array es:" + minimo);


// ejercicio 13

// let ganador = false
// while (ganador == false){

//     juegoJugador1 = parseInt (prompt ("Ingresa la opcion Jugador 1 (1-Piedra 2-Papel 3-Tijera) Ingresame la opcion en numero"))

//     juegoJugador2 = parseInt (prompt ("Ingresa la opcion Jugador 2 (1-Piedra 2-Papel 3-Tijera) Ingresame la opcion en numero"))

//     if (juegoJugador1 ==1 && juegoJugador2 ==3 || juegoJugador1 ==2 && juegoJugador2 ==1 || juegoJugador1 ==3 && juegoJugador2 ==2){
//         ganador = true
//         console.log("Felicitaciones gano el jugador 1");
//     } else if (juegoJugador2 ==1 && juegoJugador1 ==3 || juegoJugador2 ==2 && juegoJugador1 ==1 || juegoJugador2 ==3 && juegoJugador1 ==2){
//         ganador = true
//         console.log("Felicitaciones gano el jugador 2" );
//     } else {
//         console.log("Empataron los jugadores, vuelve a interntarlo");
//     }
    
// }


// ejercicio 14

// let asterisco = "* "

// for(let i = 1; i<=5; i++){
//     console.log(asterisco);
//     asterisco += "* "
// }

// ejercicio 15

// let asterisco2 = "* * * * * "

// for(let i = 5; i>=1; i--){
//     console.log(asterisco2);
//     asterisco2 = asterisco2.substring(0, asterisco2.length -2)
// }


// ejercicio 16



// let numerosDesordenados = [42, 12, 67, 34, 89, 23, 56, 91, 8, 17];


// for (let i = 0; i < numerosDesordenados.length - 1; i++) {
    
//     let indiceMinimo = i;
//     for (let j = i + 1; j < numerosDesordenados.length; j++) {
//         if (numerosDesordenados[j] < numerosDesordenados[indiceMinimo]) {
//             indiceMinimo = j;
//         }
//     }

    
//     if (indiceMinimo !== i) {
//         let intercambio = numerosDesordenados[i];
//         numerosDesordenados[i] = numerosDesordenados[indiceMinimo];
//         numerosDesordenados[indiceMinimo] = intercambio;
//     }
// }



// console.log("Array ordenado:" + numerosDesordenados);