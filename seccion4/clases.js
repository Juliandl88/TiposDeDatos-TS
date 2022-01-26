//CLASES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, fecha, puertas) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log("Acelerando...");
    };
    Vehiculo.prototype.frenar = function () {
        console.log("Frenando...");
    };
    return Vehiculo;
}());
var coche = new Vehiculo("Ford", "2020", 4);
console.log(coche.marca);
console.log(coche.fecha);
coche.acelerar();
// HERENCIA
var Padre = /** @class */ (function () {
    function Padre(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Padre.prototype.mostrarNombre = function () {
        console.log(this.nombre);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(nombre, edad, apellido) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.apellido = apellido;
        return _this;
    }
    Hijo.prototype.mostrarNombreHijo = function () {
        console.log(this.nombre);
    };
    return Hijo;
}(Padre));
var nuevoHijo = new Hijo("Tomás", 23, "García");
console.log(nuevoHijo.edad);
nuevoHijo.mostrarNombre();
nuevoHijo.mostrarNombreHijo();
//MODIFICADORES DE ACCESO PUBLICO
var Animal = /** @class */ (function () {
    function Animal(nombre, peso) {
        this.nombre = nombre;
        this.peso = peso;
    }
    Animal.prototype.moverse = function () {
        console.log("moviendose...");
    };
    return Animal;
}());
var perro = new Animal("Matilda", 15);
perro.moverse();
//MODIFICADORES DE ACCESO PRIVADO
var Animal2 = /** @class */ (function () {
    function Animal2(nombre, peso) {
        this.nombre = nombre;
        this.peso = peso;
    }
    Animal2.prototype.moverse = function () {
        console.log("moviendose...");
    };
    return Animal2;
}());
var perro2 = new Animal2("Malvina", 15);
perro2.moverse(); // El atributo nombre y peso son provados, no se puede acceder
function caminar(persona) {
    console.log("La persona " + persona.nombre + " esta caminando");
}
var nuevaPersona = { nombre: "Juan" };
caminar(nuevaPersona);
var persona = { altura: 2, peso: 120 };
function mostrarPersona(persona) {
    var mediaPeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return "".concat(persona.nombre, " tiene un peso de ").concat(persona.peso, " kg y una altura de ").concat(persona.altura, " m");
    }
    else {
        return "no se quien sos pero tiene una media de peso de ".concat(mediaPeso, " kg");
    }
}
console.log(mostrarPersona(persona));
var persona2 = { nombre: "Julian", apellido: "Garcia" };
// persona2.nombre = "Joaquin"
console.log(persona2);
var funcionGeneral = function (nombre, apellido, edad) {
    console.log("".concat(nombre, " ").concat(apellido, " tiene ").concat(edad, " a\u00F1os"));
};
funcionGeneral("Juan", "Garcia", 23);
//FUNCIONES GENERICAS
function mostrar(dato) {
    return dato;
}
console.log(mostrar("Hola"));
function mostrarGenerica(dato) {
    return dato;
}
console.log(mostrarGenerica("Chau"));
//CLASES GENERICAS
var Persona5 = /** @class */ (function () {
    function Persona5() {
    }
    return Persona5;
}());
var obj = new Persona5();
var obj2 = { nombre: "Juan" };
var num = { nombre: 44 };
