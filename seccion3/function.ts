function sumar(num1:number, num2:number):number {
  return num1 + num2;   
}

const suma:number = sumar(2,3);

console.log(suma);

function mostrar(a):void{
  console.log(a);
}

const mostrar2 = (a):void =>{console.log(a)};

mostrar2("Julian");

mostrar("Angel");

// Parametros opcionales

const opcionales = (nombre:string, apellido:string, edad?:number) =>{ // se le agrega el signo ? al parametro opcional
  if(edad){
    console.log(`firstName: ${nombre} lastName: ${apellido} age: ${edad}`);
  }else{
  console.log(`firstName: ${nombre} lastName: ${apellido}`);
  }
};

opcionales("Manuel", "Gonzalez");

//Parametros por defecto

const mostrar3 = (nombre:string, apellido:string, edad:number=32)=>{
  return console.log(`firstName: ${nombre} lastName: ${apellido} age: ${edad}`);
}

console.log(mostrar3("Martín", "Palermo"));

//Parametros REST

const cartaPostres = (postre:string, ...frutas:string[]):void =>{
  console.log(`Postre: ${postre} y tiene ${frutas.length} frutas`);
};

cartaPostres("Torta", "Fresa", "Manzana", "Naranja");