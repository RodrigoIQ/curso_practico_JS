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

const test = triangle_area(5,10)
console.log(test)

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

//SQUARE FORMULAS 
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

//CICLE FORMULAS 
function get_circle_area(){
    const input = document.getElementById("InputRadius");
    const value = input.value;
    const area = circle_area(value);
    alert(area);
};

function get_circle_perimeter(){
    const input = document.getElementById("InputRadius");
    const value = input.value;
    const perimeter = circumference(value);
    alert(perimeter);
};

//Triangle formulas

function get_Triangle_area(){
    const height = document.getElementById("inputheight");
    const base = document.getElementById("inputBase");
    const area = triangle_area(height,base);
    alert(area);
};

function get_Triangle_Perimeter(){
    const side1 = document.getElementById("side2");
    const side2 = document.getElementById("side1");
    const base = document.getElementById("inputBase");
    const perimeter = triangle_perimeter(side1,side2,base);
}