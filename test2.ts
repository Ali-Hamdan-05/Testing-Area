//Rest Parameter Example
function add(...arr: number[]): number {
    return arr.reduce((sum, val) => sum + val, 0);
}

console.log(add(1, 2, 3, 4, 5));

//Spread Example
function print3(...strings: string[]) {
    console.log(...strings);
}
const arr: string[] = ["Hello", "World", "!"];
print3(...arr);

//Generic Functions & this keyword Example
class Human{
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
function gen<T extends {name: string}>(obj: T): string {
    return obj.name;
}
const fadel = {
    name: "fadel",
    age: 17,
    printHuman
}
function printHuman(this: Human) {
    console.log(this.name, this.age);
}
gen(new Human("Ahmad", 27));
fadel.printHuman();

//Function Overloads
function ov(x: string): never;
function ov(x: number): never;
function ov(x: boolean): never;
function ov(): any {
    return;
}
function overload(x: string): any;
function overload(x: string, y: number): any;
function overload(x: string, y: number, z: boolean): any;
function overload(x: string, y?: number, z?: boolean): any {
    if(y !== undefined && z !== undefined) {
        return x + y + z;
    } else if(y !== undefined) {
        return x + y;
    } else {
        return x;
    }
}
overload("Hello");
overload("Hello", 5);
overload("Hello", 5, true);