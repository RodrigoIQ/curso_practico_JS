// function that finds the mode the of an array 
//hard coded array 
const listOfNumbers = [1,2,3,3,3,4,4,4,4,5,5,5,8,8,9]

// try with for loop 
const uniqueItems = listOfNumbers.filter(
    function(value,index,self){
        return self.indexOf(value) === index;
    }
);

console.log(uniqueItems);