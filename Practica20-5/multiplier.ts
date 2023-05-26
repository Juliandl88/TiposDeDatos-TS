const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b)
}

multiplicator(2, 4, "Multiplied numbers 2 and 4, the result is: ")

const divide = (a: number, b: number, printText: string) => {
    console.log(printText, a / b)
}

multiplicator(2, 4, "Divided numbers 2 and 4, the result is: ")

const suma = (a: number, b: number, printText: string) => {
    console.log(printText, a + b)
}

suma(2, 4, "Suma numbers 2 and 4, the result is: ")

const resta = (a: number, b: number, printText: string) => {
    console.log(printText, a + b)
}

resta(2, 4, "Resta numbers 2 and 4, the result is: ")
console.log(resta)
console.log(suma)
console.log(multiplicator)
console.log(divide)