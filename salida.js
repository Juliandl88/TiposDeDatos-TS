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
console.log("Hola mundo");
//Types
var myString = "Hello World";
myString = 22 + "";
var myNumber = 22;
var myBool = false;
var myVar = "Hello";
myVar = true;
// Strings
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3];
var BooleanArray = [true, false, true];
var AnyArray = [true, false, 1, "a"];
//Tuples
var strNumTuple;
strNumTuple = ["hello", 1];
//strNumTuple = ["hello", 1, "hola", 2];
//void, null, undefined
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//document.write(typeof (myVoid));
//functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    return "".concat(firstName, "  ").concat(lastName, ";");
}
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
showTodo({
    title: "Test",
    text: "Hello World"
});
//Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered"));
    };
    User.prototype.showMeAge = function (age) {
        this.age = age;
        console.log("".concat(this.name, " is ").concat(this.age));
    };
    User.prototype.showAge = function () {
        return this.age;
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " paid invoice"));
    };
    return User;
}());
var Juan = new User("Juan", "juan@juan.com", 23);
console.log(Juan.register());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, "Gordon", "g@gmail.com", 23);
gordon.payInvoice();
document.write();
