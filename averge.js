// calculate the average of a array 
// how to make an array from user inpur 

// hard coded array for 
listOfNumbers2 = [15,3,2]

// function for average 
function calculate_average(ListOfNumbers){
    const sumlistOfNumbers = ListOfNumbers.reduce(
        function (sumvalue = 0, newvalue){
            return sumvalue + newvalue
        }   
    );

    const average1 = sumlistOfNumbers/ListOfNumbers.length;
    return average1;

}