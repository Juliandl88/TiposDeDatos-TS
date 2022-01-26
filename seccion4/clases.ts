//CLASES

class Vehiculo{
    marca:string;
    fecha:string;
    puertas:number;

    constructor(marca:string, fecha:string, puertas:number){
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }

    acelerar():void{
        console.log("Acelerando...");
    }

    frenar():void{
        console.log("Frenando...");
    }
}

const coche = new Vehiculo("Ford", "2020", 4);

console.log(coche.marca);
console.log(coche.fecha);
coche.acelerar();

// HERENCIA

class Padre{
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarNombre():void{
    console.log(this.nombre);
    }
}

class Hijo extends Padre{
    apellido:string;

    constructor(nombre:string, edad:number, apellido:string ){
        super(nombre, edad);
        this.apellido = apellido;
    }

    mostrarNombreHijo():void{
        console.log(this.nombre);
    }
}

const nuevoHijo = new Hijo("Tomás", 23, "García");

console.log(nuevoHijo.edad);
nuevoHijo.mostrarNombre();
nuevoHijo.mostrarNombreHijo();

//MODIFICADORES DE ACCESO PUBLICO

class Animal{
    public nombre:string;
    public peso:number;

    public constructor(nombre:string, peso:number){
        this.nombre = nombre;
        this.peso = peso;
    }

    public moverse():void{
        console.log("moviendose...");
    }
}

const perro = new Animal("Matilda", 15);

perro.moverse();

//MODIFICADORES DE ACCESO PRIVADO

class Animal2{
    private nombre:string;
    private peso:number;

    public constructor(nombre:string, peso:number){
        this.nombre = nombre;
        this.peso = peso;
    }

    public moverse():void{
        console.log("moviendose...");
    }
}

const perro2 = new Animal2("Malvina", 15);

perro2.moverse(); // El atributo nombre y peso son provados, no se puede acceder



//MODIFICADORES DE ACCESO PROTEGIDO

// class Cliente {
    
//         private _nombre : string;

//         public get nombre() : string {
//             if(this._nombre) {
//             return this._nombre;
//         }else{
//             return "Sin nombre";
//         }
//     }
//         public set value(value : string) {
//             this._nombre = value;
//         }

//         constructor(nombre?:string) {
//             this._nombre = nombre;

//         }
        
    
// }

// let cliente = new Cliente();

// console.log(cliente.nombre);

// INTERFACES 

interface Persona{
    //atributos
    nombre:string;


}

function caminar(persona:Persona):void{
    console.log("La persona " + persona.nombre + " esta caminando");
}

let nuevaPersona = {nombre:"Juan"};
caminar(nuevaPersona);

//INTERFACES CON PARAMETROS OPCIONALES

interface Persona3{
    //atributos
    nombre?:string;
    peso:number
    altura:number

}

let persona = {altura:2, peso:120};

function mostrarPersona(persona:Persona3){
    let mediaPeso:number = persona.altura / persona.peso 
    if(persona.nombre){
        return `${persona.nombre} tiene un peso de ${persona.peso} kg y una altura de ${persona.altura} m`;
    }else{
        return `no se quien sos pero tiene una media de peso de ${mediaPeso} kg`;
    }
}

console.log(mostrarPersona(persona));

//ATRIBUTOS DE SOLO LECTURA

interface Persona4{
    readonly nombre:string;
    readonly apellido:string;

}

let persona2:Persona4 = {nombre:"Julian", apellido:"Garcia"};
// persona2.nombre = "Joaquin"
console.log(persona2);

// INTERFACES PARA FUNCIONES 

interface General{
    (nombre:string, apellido:string, edad:number):void
}

let funcionGeneral:General = function(nombre:string, apellido:string, edad:number):void{
    console.log(`${nombre} ${apellido} tiene ${edad} años`);
}

funcionGeneral("Juan", "Garcia", 23);

//FUNCIONES GENERICAS

function mostrar(dato:string):string {    // FUNCTION ESTANDAR
    return dato;
}

console.log(mostrar("Hola"));

function mostrarGenerica<T>(dato:T):T{  // FUNCTION GENERICA
    return dato;
}

console.log(mostrarGenerica("Chau"));

//CLASES GENERICAS

class Persona5<T>{
    nombre:string;
    edad:T;

    Mostrar:(dato:T)=>T

}

const obj = new Persona5();

//INTERFACES GENERICAS

interface Persona6<T>{
    nombre:T
}

let obj2:Persona6<string> = {nombre:"Juan"};
let num:Persona6<number> = {nombre:44};


