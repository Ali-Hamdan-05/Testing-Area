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

//Type Alias Example
type Person = {
    name: string,
    age: number
}
let me: Person = {
    name: person,
    age: 21
}

//Combine Type Alias and object creation
const obj: {
    string1 : string
} = {
    string1: var1()
}