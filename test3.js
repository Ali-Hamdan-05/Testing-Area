"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=test3.js.map