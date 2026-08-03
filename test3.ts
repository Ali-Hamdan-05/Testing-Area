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