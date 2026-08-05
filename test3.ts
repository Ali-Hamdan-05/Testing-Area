//Property modifiers Exercise
enum Shape {
    Circle,
    Rectangle,
    Triangle
}
interface Position {
    readonly shape: Shape;
    xpos?: number;
    ypos?: number
}
function draw({shape, xpos = 0, ypos = 0}: Position) {
    switch (shape) {
        case Shape.Circle:
            console.log(`Drawing circle at (${xpos}, ${ypos})`);
            break;
        case Shape.Rectangle:
            console.log(`Drawing rectangle at (${xpos}, ${ypos})`);
            break;
        case Shape.Triangle:
            console.log(`Drawing triangle at (${xpos}, ${ypos})`);
            break;
    }
}
draw({ shape: Shape.Circle });
draw({ shape: Shape.Rectangle, xpos: 10, ypos: 20 });
interface Grades{
    readonly [index: string]: number;
    Ali: number;
    Jawad: 2;
}
const grades: Grades = {
    Ali: 85,
    Jawad: 2,
    Roaa: 95
};
for(let student in grades) {
    console.log(`${student}: ${grades[student]}`);
}

//Excess property checks (ignore checks)
interface CarConfig{
    color?: string;
    rpm?: number;
    [index: string]: unknown;
}
function buildCar(config: CarConfig) : {color: string; rpm: number} {
    return { color: config.color as string, rpm: config.rpm as number};
}
let car = buildCar({ colour: "red", rpm: 2000 });

//Extending Types
interface colorful {
    color: string;
}
interface circle {
    radius: number;
}
interface colorfulCircle extends colorful, circle{
}
const cc: colorfulCircle = {
    color: "red",
    radius: 2
}
//classes can only extend one class | interfaces with same name are merged automatically by TS if types are compatible

//Intersection types
type ccType = colorful & circle;
function drawcc(circle: colorful & circle | ccType) {
    console.log(`Drawing ${circle.color} circle with radius ${circle.radius}`);
}
drawcc(cc);

//generic Objects
interface Box<Type> {
    contents: Type;
}
interface Food{
    type: string;
}
let box: Box<Food>;
box = {contents: {type: "protein"}};
console.log(box);