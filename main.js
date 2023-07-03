//Ejercicio 1

//  let nombre = "Gabriel"

//   function saludar(nombre){
//           let resultado = nombre
//           return resultado
//   }

//   let retorno = saludar(nombre)

//   console.log("Hola, buen dia " + retorno)

//Ejercicio 2

// let numero1 = 6
// let numero2 = 8

// function multiplicar(a,b){
//     let resultado = a*b
//     console.log(resultado)
// }

// multiplicar(numero1,numero2)

//Ejercicio 3

// function areaTriangulo(base,altura){
//     let resultado = (base + altura) / 2
//     console.log(resultado)
// }

// areaTriangulo(5,3)


// function perimetroTriangulo(a,b,c){
//     let resultado = a + b + c
//     console.log(resultado)
// }

// perimetroTriangulo(4,5,6)

//Ejercicio 4 

// function calcularPrecio(precio, cantidad) {
//     let precioTotal = precio * cantidad;
//     if (cantidad >= 20){
//         precioTotal = precioTotal - (precioTotal * 0.2);
//         console.log(precioTotal)
//         return precioTotal
//     }else if (cantidad >= 10){
//         precioTotal = precioTotal - (precioTotal * 0.1)
//         console.log(precioTotal)
//         return precioTotal
//     }
// }
// calcularPrecio(20,20) 
// calcularPrecio(20,10)

// Ejercicio 5

// function EsMayorDeEdad(edad){
//     if(edad >= 18){
//         console.log("Eres mayor de edad")
//     }else if(edad <= 18){
//         console.log("Eres menor de edad")
//     }
// }

// EsMayorDeEdad(20)
// EsMayorDeEdad(17)

// Ejercicio 6
 
// function calcularImpuesto(ingresoAnual){
//     let impuestos 
// if(ingresoAnual <= 10000){
//     impuestos = (ingresoAnual * 0.1)
//     console.log(impuestos)
//     return ingresoAnual
// }else if(ingresoAnual > 10000 && ingresoAnual <= 20000){
//     impuestos = (ingresoAnual * 0.15)
//     console.log(impuestos)
//     return ingresoAnual
// }else{
// impuestos = (ingresoAnual * 0.2)
// console.log(impuestos)
// return ingresoAnual
// }
    
// }

// calcularImpuesto(8000)
// calcularImpuesto(15000)
// calcularImpuesto(80000)

// ejercicio 7 

// function verificarDia(dia){
//     switch(dia){
//         case 1: 
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//           return "Es un dia laboral"
//           break
//         case 6:
//         case 7:
//           return "Es fin de semana"
//           break
    
//           default:
//             return "El numero que ingreso no es correcto"
//     }
// }
// console.log(verificarDia(3))
// console.log(verificarDia(6))
// console.log(verificarDia(10))

