// this file is to calcuale the median of a list of numbers 

//const listOFnumbersMedian = [1,2,3,4]

// calculating a median has 2 options if the list is even or odd 
// sort list -- future step 


//make a function from existing code 
function calculateMedian(listOfNumbers){
    const listLenght = listOfNumbers.length;
    const midelNumber= ~~(listLenght/2)

    // if list has an odd number of items 
    if (listLenght%2 == 1  ){ 
    
        // get the number in the midel
        //list start counting at 0 so i dont need to add one 
        console.log(`list is odd median is ${listOfNumbers[midelNumber]}`) ;
    }
    // if list has an even number of items 
    else if (listLenght%2 == 0){
        // calulate the averege of the 2 numbes midel numbers 
        // get the 2 center numbers 
        const average =  (listOfNumbers[midelNumber]+listOfNumbers[midelNumber-1])/2
        console.log(`list is even median is ${average}`) ;
        

    } ;

}