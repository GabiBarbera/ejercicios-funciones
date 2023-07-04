// Ejercicio 1

//  function esMayor(num1,num2){
//      if(num1 > num2){
//          console.log("Es mayor")
//      }else{
//          console.log("Es menor")
//      }
//  }
//  esMayor(92,9)
//  esMayor(3,6)

// Ejercicio 2

// function sonIguales(num1,num2){
// if(num1 == num2){
//     console.log("Son iguales")
// }else{
//     console.log("No son iguales")
// }
// }

// Ejercicio 3

// sonIguales(5,5)
// sonIguales(5,8)

// function esMasGrande(num1,num2){
//     if(num1 === num2){
//         console.log("Son iguales")
//     }else if(num1 = num2){
//         console.log(`Es mas grande ` + num1)
//     }else{
//         console.log(`Es mas grande ` + num2)
//     }
// }

// esMasGrande(5,5)
// esMasGrande(5,4)
// esMasGrande(6,4)

//Ejercicio 4

// function esMasChico(num1,num2,num3){
//     if(num1 < num2 && num1 < num3){
//         console.log("Es mas chico " + num1)
//     }else if(num2 < num3 && num2 < num1){
//     console.log("Es mas chico " + num2)
//     }else{
//         console.log("Es mas chico " + num3)
//     }
// }

// esMasChico(3,4,5)
// esMasChico(8,5,10)
// esMasChico(5,4,2)

//Ejercicio 5

// const persona1 = {
//     nombre: "Gabriel",
//     edad: 29,
//     altura: 169
// }

// const persona2 = {
//     nombre: "Bruno",
//     edad: 23,
//     altura: 180
// }

// console.log(persona1.altura < persona2.altura)
// console.log(persona1.edad < persona2.edad)

// function altura(personaUno, personaDos) {
//     let alturaPersona1 = personaUno.altura
//     let alturaPersona2 = personaDos.altura
//     if (alturaPersona1 > alturaPersona2) {
//         console.log(`La persona mas alta es ${personaUno.nombre}`)
//     } else {
//         console.log(`La persona mas alta es ${personaDos.nombre}`)
//     }
// }

// altura(persona1, persona2)

// function edad(personaUno, personaDos) {
//     let edadPersona1 = personaUno.edad
//     let edadPersona2 = personaDos.edad
//     if (edadPersona1 > edadPersona2) {
//         console.log(`La persona mas grande es ${personaUno.nombre}`)
//     } else {
//         console.log(`La persona mas grande es ${personaDos.nombre}`)
//     }
// }

// edad(persona1, persona2)

//Ejercicio 6

// let edad = prompt("Ingrese su edad")
// let altura = prompt("Ingrese su altura")
// let vision = prompt("Ingrese su vision 0/10")

// function licencia(edad, altura, vision) {
//     if (edad < 18 || altura < 150 || vision < 8) {
//         console.log("Permiso denegado")
//     } else if (edad >= 18 && altura >= 150 && vision >= 8) {
//         console.log("Permiso aceptado")
//     }
// }
// licencia(edad, altura, vision)