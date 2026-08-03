"use strict";
console.log("Hello, World!");
let person = "Ali";
let date = new Date();
greet(person, date);
function greet(person, date) {
    console.log(`Hello, ${person}, Today is ${date.toDateString()}.`);
}
const var1 = () => {
    return person + date;
};
let me = {
    name: person,
    age: 21
};
const obj = {
    string1: var1()
};
