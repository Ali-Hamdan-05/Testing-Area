console.log("Hello, World!");
let person = "Ali";
let date : Date = new Date();

greet(person, date);

function greet(person: string, date: Date){
    console.log(`Hello, ${person}, Today is ${date.toDateString()}.`);
}

//Union Types Example
const var1: string | number | Function = () => {
    return person + date;
} 

//Type Alias + Literal Types Example
type ingnoreMe = number | string;
type Person = {
    name: string,
    age: number,
    loc: "Lebanon"
}
let me: Person = {
    name: person,
    age: 21,
    loc: "Lebanon"
}

//Combine Type Alias and object creation
const obj: {
    string1 : string
} = {
    string1: var1()
}

//Type Assertion
let value: any = "Stringgg";
let strlen: number = (value as string).length;

//enum and Symbol
enum Dir{
    Up,
    Down,
    Left,
    Right
}
const direction1: symbol = Symbol(Dir.Right);
const direction2: symbol = Symbol(Dir.Right);
console.log(direction1 === direction2);
