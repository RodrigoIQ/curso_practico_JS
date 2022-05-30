// code for square lenght, area, perimeter
console.group("square")
const squarelength = 5;

console.log(`square leght = ${squarelength} cm`);

const squerePerimeter = squarelength*4;

console.log(`squer Perimenter =  ${squerePerimeter} cm`);

const squareArea = squarelength*squarelength;

console.log(`square area =${squareArea} cm`);
console.groupEnd();

// code for triangle 
console.group("Triangle")
const triangle_side1 = 6;
const triangle_side2 = 6;
const triangle_base = 4;
const triangle_height = 5.5;


const triangle_perimeter  = triangle_side1+triangle_side2+triangle_base;
const triangle_area =  ( triangle_height * triangle_base)/2


console.log(`Sides of the triangle measure = ${triangle_side1} cm, `
+`${triangle_side2} cm, `
+`${triangle_base} cm, `);

console.log(`triangle height = ${triangle_height} cm`);

console.log(`trigle perimenter = ${triangle_perimeter} cm`);

console.log(`triangle Area = ${triangle_area}`);


console.groupEnd();

//Circle 
console.group("Circle");
const radius = 4;
const diameter = radius*2;
const PI = Math.PI;

const circumference = 2*PI*radius;
const circle_area = PI*radius*radius;

//Circle consle logs 
console.log(`the radius of the circle is = ${radius}`);
console.log(`the diameter of the circle is = ${diameter}`);

console.log(`Circle circumference = ${circumference}`);
console.log(`Circle area = ${circle_area}`);



console.groupEnd();
