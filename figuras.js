// code for square lenght, area, perimeter
console.group("square")

function squarePerimeter(side){
    return side*4
};

function squareArea(side){
    return side*side
};

console.groupEnd();

//code for triangle 
 console.group("Triangle")


function triangle_perimeter(side1,side2,base){
    return side1+side2+base
};

function triangle_area(height,base){
    return (height*base)/2
};

console.groupEnd();


console.group("Circle");

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

console.groupEnd();


//Interact with html

function getSquarePerimeter(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter)
};

function getSquareArea(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const perimeter = squareArea(value);
    alert(perimeter)
};


