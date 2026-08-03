"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, World!");
let person = "Ali";
let date = new Date();
greet(person, date);
function greet(person, date) {
    console.log(`Hello, ${person}, Today is ${date.toDateString()}.`);
}
//Union Types Example
const var1 = () => {
    return person + date;
};
let me = {
    name: person,
    age: 21,
    loc: "Lebanon"
};
//Combine Type Alias and object creation
const obj = {
    string1: var1()
};
//Type Assertion
let value = "Stringgg";
let strlen = value.length;
//enum and Symbol
var Dir;
(function (Dir) {
    Dir[Dir["Up"] = 0] = "Up";
    Dir[Dir["Down"] = 1] = "Down";
    Dir[Dir["Left"] = 2] = "Left";
    Dir[Dir["Right"] = 3] = "Right";
})(Dir || (Dir = {}));
const direction1 = Symbol(Dir.Right);
const direction2 = Symbol(Dir.Right);
console.log(direction1 === direction2);
//# sourceMappingURL=test.js.map