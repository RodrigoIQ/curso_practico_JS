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
    const input_height = document.getElementById("inputheight");
    const input_base = document.getElementById("inputBase");
    const value_base = input_base.value;
    const value_height =  input_height.value;
    const area = triangle_area(value_height,value_base);
    alert(area);
};

function get_Triangle_Perimeter(){
    const side1 = Number(document.getElementById("inputSide2").value);
    const side2 = Number(document.getElementById("inputSide1").value);
    const base = Number(document.getElementById("inputBase").value);
    const perimeter = triangle_perimeter(side1,side2,base);
    console.log(perimeter);
    alert(perimeter);
};

function triangle_heigt(){
	//formuka sqrt((side1*side1) - ((base*base)/4))
	const side1 = Number(document.getElementById("inputSide1"));
	const base = Number(document.getElementByID("inputBase"));
	
	const height = Math.sqrt(((side1*side1)-((base*base)/4));
	alert(height)
} 