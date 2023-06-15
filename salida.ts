export  { } ;

console.log("Hola mundo");

//Types

var myString: string = "Hello World";
myString = 22 + "";

var myNumber: number = 22;

var myBool: boolean = false;

var myVar: any = "Hello";
myVar = true;

// Strings
var StringArray: string[] = ["item1", "item2", ""];
var NumberArray: number[] = [1, 2, 3];
var BooleanArray: boolean[] = [true, false, true];
var AnyArray: any[] = [true, false, 1, "a"];

//Tuples

var strNumTuple: [string, number];
strNumTuple = ["hello", 1];
//strNumTuple = ["hello", 1, "hola", 2];

//void, null, undefined

var myVoid: void = undefined;
var myNull: null = null;
var myUndefined: undefined = undefined;

//document.write(typeof (myVoid));

//functions

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

var mySum = function (num1: number | string, num2: number | string): number {
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

var Juan = new User("Juan", "juan@juan.com", 23);

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

var gordon = new Member(1, "Gordon", "g@gmail.com", 23);

gordon.payInvoice 

document.write();
