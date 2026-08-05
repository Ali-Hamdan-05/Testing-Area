"use strict";
//Property modifiers Exercise
var Shape;
(function (Shape) {
    Shape[Shape["Circle"] = 0] = "Circle";
    Shape[Shape["Rectangle"] = 1] = "Rectangle";
    Shape[Shape["Triangle"] = 2] = "Triangle";
})(Shape || (Shape = {}));
function draw({ shape, xpos = 0, ypos = 0 }) {
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
const grades = {
    Ali: 85,
    Jawad: 2,
    Roaa: 95
};
for (let student in grades) {
    console.log(`${student}: ${grades[student]}`);
}
function buildCar(config) {
    return { color: config.color, rpm: config.rpm };
}
let car = buildCar({ colour: "red", rpm: 2000 });
const cc = {
    color: "red",
    radius: 2
};
function drawcc(circle) {
    console.log(`Drawing ${circle.color} circle with radius ${circle.radius}`);
}
drawcc(cc);
let box;
box = { contents: { type: "protein" } };
console.log(box);
