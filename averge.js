// calculate the average of a array 
// how to make an array from user inpur 

// hard coded array for 
listOfNumbers = [15,3,2]

// function for average 
function calculate_average(ListOfNumbers){
    const sum_listOfNumbers = listOfNumbers.reduce(
        function (sum_value = 0, new_value){
            return sum_value + new_value;
        }
    );

    const average = sum_listOfNumbers/listOfNumbers.lenght;
    return average

}