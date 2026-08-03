"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Rest Parameter Example
function add(...arr) {
    return arr.reduce((sum, val) => sum + val, 0);
}
console.log(add(1, 2, 3, 4, 5));
//Spread Example
function print3(...strings) {
    console.log(...strings);
}
const arr = ["Hello", "World", "!"];
print3(...arr);
//Generic Functions & this keyword Example
class Human {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function gen(obj) {
    return obj.name;
}
const fadel = {
    name: "fadel",
    age: 17,
    printHuman
};
function printHuman() {
    console.log(this.name, this.age);
}
gen(new Human("Ahmad", 27));
fadel.printHuman();
function ov() {
    return;
}
function overload(x, y, z) {
    if (y !== undefined && z !== undefined) {
        return x + y + z;
    }
    else if (y !== undefined) {
        return x + y;
    }
    else {
        return x;
    }
}
overload("Hello");
overload("Hello", 5);
overload("Hello", 5, true);
//# sourceMappingURL=test2.js.map