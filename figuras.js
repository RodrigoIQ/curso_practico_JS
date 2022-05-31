// code for square lenght, area, perimeter
console.group("square")
// const squarelength = 5;

// console.log(`square leght = ${squarelength} cm`);

function squarePerimeter(side){
    return side*4
};

// console.log(`squer Perimenter =  ${squerePerimeter} cm`);

function squareArea(side){
    return side*side
};

//console.log(`square area =${squareArea} cm`);
console.groupEnd();

//code for triangle 
 console.group("Triangle")
// const triangle_side1 = 6;
// const triangle_side2 = 6;
// const triangle_base = 4;
// const triangle_height = 5.5;

function triangle_perimeter(side1,side2,base){
    return side1+side2+base
};

function triangle_area(height,base){
    return (height*base)/2
};



// console.log(`Sides of the triangle measure = ${triangle_side1} cm, `
// +`${triangle_side2} cm, `
// +`${triangle_base} cm, `);

// console.log(`triangle height = ${triangle_height} cm`);

// console.log(`trigle perimenter = ${triangle_perimeter} cm`);

// console.log(`triangle Area = ${triangle_area}`);


console.groupEnd();

//Circle 
console.group("Circle");
// const radius = 4;
// const diameter = radius*2;
const PI = Math.PI;

function diameterCircle(radius){
    return radius*2
};

function circumference(radius){
    const diameter = diameterCircle(radius);
    return PI*diameter
};

function circle_area(radius){
    return PI*radius*radius
};


//Circle consle logs 
// console.log(`the radius of the circle is = ${radius}`);
// console.log(`the diameter of the circle is = ${diameter}`);

// console.log(`Circle circumference = ${circumference}`);
// console.log(`Circle area = ${circle_area}`);



console.groupEnd();
