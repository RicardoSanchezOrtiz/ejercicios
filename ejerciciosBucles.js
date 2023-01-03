/* Ejercicio 1 */
function tablaMultiplicar(numero){
    let multiplos =[1,2,3,4,5,6,7,8,9,10];
    for(let factor of multiplos){
        factor = factor*numero
        console.log(factor)
    }
}
/* Ejercicio 2 */
function acumulador(valorInicial){
    let acumulado = 0 + valorInicial;
    do{
        let numero= parseInt(prompt("Ingrese un numero: "))
        acumulado = acumulado + numero;
        console.log(acumulado)
    
}while(numero != 0)
}
/* Ejercicio 3 */
function adivinanzas(numero){
    let intento = 0;
    while (numero != intento){
        let intento = parseInt(prompt("Que numero es?"))
        if(numero>intento){
            console.log("El numero es menor al que ingresó, porfavor intente de nuevo")
        }
        else if (numero<intento){
         console.log("El numero es mayor al que ingresó")
        }
        else break
}   console.log("Felicitaciones, el numero es: "+ numero)
}
/* Ejercicio 4 */

function primo(numero){
    const arr = Array.from({length: numero}, (_, index) => index + 1);
    console.log(arr);
    let divisores = []
    for (let prueba of arr){
        let resultado = numero%prueba
        if(resultado === 0){
            divisores.push(prueba)
        }
    }
    if (divisores.length === 2){
        return "Es primo"
    }
    else return "No es primo"
}

/* Ejercicio 5 */

function mostrarDivisores(numero){
    const arr = Array.from({length: numero}, (_, index) => index + 1);
    console.log(arr);
    let divisores = []
    for (let prueba of arr){
        let resultado = numero%prueba
        if(resultado === 0){
            divisores.push(prueba)
        }
    }
    console.log(divisores)
}

/* Ejercicio 6 */

function mostrarNumero(array){
    for (let indicador of array){
        console.log(indicador)
    }
}

/* Ejercicio 7 */

function mostrarDoble(array){
    for (let indicador of array){
        console.log(indicador*2)
    }
}

/* Ejercicio 8 */

const familia = [{nombre: "Ramiro",comida: "sancocho", edad: "34", escolaridad: "universitario"},
{nombre: "Stephany",comida: "Pollo frito", edad: "32", escolaridad: "universitaria"},
{nombre: "Jacinto",comida: "Empanada", edad: "71", escolaridad: "primaria"},
{nombre: "Victor",comida: "Helado", edad: "8", escolaridad: "pre-escolar"},
{nombre: "Daniela",comida: "Compota", edad: "5", escolaridad: "pre-escolar"}]

function presentacion(){
    for (let indice of familia){
        let presentacionIndividual = "Buenas, mi nombe es "+ indice.nombre + " Mi comida favorita es "+ indice.comida +
    " Tengo " + indice.edad + " anios" + " Mi nivel de escolaridad es "+ indice.escolaridad
        console.log(presentacionIndividual)
    }
}

/* Ejercicio 9 */

function numerosImpares(array){
    let arrayVacio = []
    for (let element of array){
        if (element%2 !== 0){
            arrayVacio.push(element)
        }
    }
    console.log(arrayVacio)
}

/* Ejercicio 10 */

function sumaIndividual(){
    let numero = 1
    let sumatoriaPar= 0
    let sumatoriaImpar = 0
    while (numero !== 0){
        numero = parseInt(prompt("Ingrese su numero"))
        if (numero%2 === 0){
            sumatoriaPar += numero
            console.log(sumatoriaPar)
        }
        else {sumatoriaImpar += numero
            console.log(sumatoriaImpar)}
}
}

/* Ejercicio 11 */

function numeroMayor (array){
    let mayor = array[0]
    for (indice of array){
        if (mayor < indice){
            mayor = indice
        }
    }
    console.log(mayor)
}

/* Ejercicio 12 */

function numeroMenor (array){
    let menor = array[0]
    for (indice of array){
        if (menor > indice){
            menor = indice
        }
    }
    console.log(menor)
}

/* Ejercicio 31 */

function ppt(){
    let nombre1 = prompt("Nombre jugador 1")
    let nombre2 = prompt("Nombre jugador 2")
    let jugador1 = ""
    let jugador2 = ""
    let empate = true
    while (empate === true){
        jugador1 = prompt("Eleccion?")
        jugador2 = prompt("Eleccion?")
        let ganador1 = (jugador1 === "tijera" && jugador2 === "papel") || (jugador1 === "papel"&& jugador2 === "piedra") ||(jugador1 === "piedra" && jugador2 === "tijera")
        let ganador2 = (jugador2 === "tijera" && jugador1 === "papel") || (jugador2 === "papel"&& jugador1 === "piedra") ||(jugador2 === "piedra" && jugador1 === "tijera")
        if (ganador1 === true){
            empate = false
            return console.log("Felicidades "+ nombre1 + ", ganaste")
        }
        else if (ganador2 === true){
            empate = false 
            return console.log("Felicidades "+ nombre2 + ", ganaste")
        }
        }
    
}

/* Ejercicio 14 */

function arbol(simbolo){
    console.log(simbolo)
    for(let distancia = 0; distancia < 8 ; distancia +=2){
        let espacio = " "
        console.log(simbolo + espacio.repeat(distancia) + simbolo)
    }
}

/* Ejercicio 15 */

function arbolAlReves(simbolo){
    for(let distancia = 8; distancia > 0 ; distancia -=2){
        let espacio = " "
        console.log(simbolo + espacio.repeat(distancia) + simbolo)
    }
    console.log(simbolo)
}

/* Ejercicio 16 */

function bubbleSort(array){
    for(let j = 0; j < array.length; j++){
        for( let i = 0; i < array.length; i++){
            let respaldo = 0
            if (array[i]< array[i+1]){
                respaldo = array[i+1]
                array[i+1] = array [i]
                array[i] = respaldo 
            }
        }
    }
    console.log(array)
}