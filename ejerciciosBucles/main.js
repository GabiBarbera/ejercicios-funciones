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

//  let introduce = prompt("Escribe un número")
//  let numeros

//  for (numeros = 2; numeros < introduce / 2; numeros++) {
//      if (introduce % numeros === 0) {
//          console.log(numeros, " lo divide ")
//      }
//  }

//Ejercicio 5 

// const marcasDeAutos = ["audi", "volskwagen", "mercedenz-benz", "renault", "ford", "chevrolet", "daewoo", "bmw", "volvo", "dodge"]

// for (const marca of marcasDeAutos) {
//     console.log(marca)

// }

//Ejercicio 6

// let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// for (let numero of numeros) {
//     console.log(numero * 2)
// }

//Ejercicio 7

// let arrayFamillia = [

//     padre = {
//         nombre: "Carlos",
//         edad: 40,
//         altura: 185,
//         deporte: "futbol"
//     },
//     madre = {
//         nombre: "Carla",
//         edad: 38,
//         altura: 1.65,
//         deporte: "hockey"
//     },
//     hijo1 = {
//         nombre: "Pedro",
//         edad: 10,
//         altura: 1.55,
//         deporte: "futbol"
//     },
//     hijo2 = {
//         nombre: "agustin",
//         edad: 12,
//         altura: 1.59,
//         deporte: "basquet"
//     },
//     hija = {
//         nombre: "raquel",
//         edad: 8,
//         altura: 1.45,
//         deporte: "natacion"
//     }
// ]

// for (const familia of arrayFamillia) {
//     console.log(`Hola soy ${familia.nombre} y tengo ${familia.edad} mi altura es de ${familia.altura}, mi deporte favorito es ${familia.deporte}`)
// }

//Ejercicio 9

// const numerosImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let numero of numerosImpares) {
//     if (numero % 2 !== 0)
//         console.log(numero)
// }

//Ejercicio 10 

// let numero = Number(prompt("Ingrese un numero"))
// let numCalculo = []
// let sumaPar = 0
// let sumaImpar = 0

// while (numero != 0) {
//     numCalculo.push(numero)
//     numero = Number(prompt("Ingrese su numero"))
// }

// for (let i = 1; i <= numCalculo.length - 1; i++) {
//     if (numCalculo[i] % 2 === 0) {
//         sumaPar += numCalculo[i]
//     } else {
//         sumaImpar += numCalculo[i]
//     }
// }
// console.log(sumaPar)
// console.log(sumaImpar)

//Ejercicio 11 

// function obtenerMaximo(numeros) {

//     let maximo = numeros[0];
//     for (let i = 1; i < numeros.length; i++) {
//       if (numeros[i] > maximo) {
//         maximo = numeros[i];
//       }
//     } 
//     return maximo;
//   }


//   let numeros = [5, 12, 3, 9, 7, 4, 11, 8, 6, 10];

//   let maximo = obtenerMaximo(numeros);
//   console.log("El número más grande es " + maximo);