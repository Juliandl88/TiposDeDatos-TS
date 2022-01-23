console.log("Hola mundo");

//Types

let myString: string = "Hello World";
myString = 22 + "";

let myNumber: number = 22;

let myBool: boolean = false;

let myVar: any = "Hello";
myVar = true;

// Strings
let StringArray: string[] = ["item1", "item2", ""];
let NumberArray: number[] = [1, 2, 3];
let BooleanArray: boolean[] = [true, false, true];
let AnyArray: any[] = [true, false, 1, "a"];

//Tuples

let strNumTuple: [string, number];
strNumTuple = ["hello", 1];
//strNumTuple = ["hello", 1, "hola", 2];

//void, null, undefined

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

//document.write(typeof (myVoid));

//functions

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

function getName(firstName: string, lastName?: string): string {
  return `${firstName}  ${lastName};`;
}

function myVoidFunction(): void {
  return;
}

//Interfaces

interface ITodo {
  title: string;
  text: string;
}

function showTodo(todo: ITodo) {
  console.log(`${todo.title} - ${todo.text}`);
}

showTodo({
  title: "Test",
  text: "Hello World",
});

//Clases

class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  register() {
    console.log(`${this.name} is registered`);
  }

  showMeAge(age: number) {
    this.age = age;
    console.log(`${this.name} is ${this.age}`);
  }

  private showAge() {
    return this.age;
  }

  payInvoice(){
      console.log(`${this.name} paid invoice`);
  }

}

let Juan = new User("Juan", "juan@juan.com", 23);

console.log(Juan.register());

class Member extends User {
    id: number;

    constructor(id: number, name:string, email: string, age:number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let gordon = new Member(1, "Gordon", "g@gmail.com", 23);

gordon.payInvoice();

document.write();
