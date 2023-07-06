//Ejercicio 1

// let numero = prompt("Ingrese un número:")

// if (!Number(numero)) {
//     console.log("Por favor, ingrese un número válido.")
// } else {
//     console.log("Tabla de multiplicar del número " + numero)

//     for (let i = 1; i <= 10; i++) {
//         let resultado = numero * i
//         console.log(numero + " x " + i + " = " + resultado)
//     }
// }

//Ejercicio 2 

// let numero = Number(prompt("Ingrese su numero"))
// let arrayDeNumeros = []

// while (numero != 0) {
//     arrayDeNumeros.push(numero)
//     numero = Number(prompt("Ingrese su numero"))
//     console.log(arrayDeNumeros)
// }

// console.log(arrayDeNumeros[arrayDeNumeros.length - 1])

// Ejercicio 3

// let ultimoNumero = arrayDeNumeros[arrayDeNumeros.length - 1]
// console.log(`El ultimo numero ingresado fue ${ultimoNumero}`)

// let numeroIngresado = Number(prompt("Ingrese su numero para adivinar"))
// let contador = 1
// if (numeroIngresado == null || numeroIngresado == " ") {
//     alert("No ingresaste un numero")
// } else {
//     while (numeroIngresado != ultimoNumero && numeroIngresado >= 1 && numeroIngresado <= 100) {
//         contador++
//         if (numeroIngresado > ultimoNumero) {
//             alert("Es mas grande")
//         } else {
//             alert("Es mas chico")
//         }
//         numeroIngresado = Number(prompt("Ingrese un numero para adivinar"))
//     }
//     alert(`Ganaste en ${contador} intentos`)
// }

// console.log(`Lo adivinaste en ${contador} intentos`)

//Ejercicio 4

