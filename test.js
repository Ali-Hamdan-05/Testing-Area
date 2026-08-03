"use strict";
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
