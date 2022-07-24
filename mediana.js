// this file is to calcuale the median of a list of numbers 

const listOFnumbersMedian = [1,2,3,4,5]

// calculating a median has 2 options if the list is even or odd 
// sort list -- future step 

const listLenght = listOFnumbersMedian.length;
console.log(`list has ${listLenght} items the median is ${listLenght%2}`);


if (listLenght%2 == 1  ){ 
 
    // get the number in the midel
    //list start counting at 0 so i dont need to add one 
    midelNumber= ~~(listLenght/2)
    console.log(`list is odd ${midelNumber}`) ;
}// else if (list is even){
//     // calulate the averege of the 2 numbes midel numbers 
// } ;