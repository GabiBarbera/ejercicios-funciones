//Ejercicio 1

let numero = prompt("Ingrese un número:")

if (!Number(numero)) {
    console.log("Por favor, ingrese un número válido.")
} else {
    console.log("Tabla de multiplicar del número " + numero)

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        console.log(numero + " x " + i + " = " + resultado)
    }
}

//Ejercicio 2 

