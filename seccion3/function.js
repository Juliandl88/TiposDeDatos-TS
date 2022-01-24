function sumar(num1, num2) {
    return num1 + num2;
}
var suma = sumar(2, 3);
console.log(suma);
function mostrar(a) {
    console.log(a);
}
var mostrar2 = function (a) { console.log(a); };
mostrar2("Julian");
mostrar("Angel");
// Parametros opcionales
var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log("firstName: ".concat(nombre, " lastName: ").concat(apellido, " age: ").concat(edad));
    }
    else {
        console.log("firstName: ".concat(nombre, " lastName: ").concat(apellido));
    }
};
opcionales("Manuel", "Gonzalez");
//Parametros por defecto
var mostrar3 = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 32; }
    return console.log("firstName: ".concat(nombre, " lastName: ").concat(apellido, " age: ").concat(edad));
};
console.log(mostrar3("Martín", "Palermo"));
//Parametros REST
var cartaPostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("Postre: ".concat(postre, " y tiene ").concat(frutas.length, " frutas"));
};
cartaPostres("Torta", "Fresa", "Manzana", "Naranja");
