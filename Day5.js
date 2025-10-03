// **Day 5 – Arrays**

// - Create arrays, push/pop, check length.
// - **Challenge:** Find largest/smallest number in an array.

// let create first the array with 6 list
let number = [5, 10, 20, 25, 35, 40]

// print array
console.log(number)

// let add 50 in array
number.push(50);

// output the array after adding
console.log(number)

// check the length(total) of arrat
console.log(number.length)

// delete a list in array
number.pop();

// output after deleting a list in array
console.log(number)

//  getting the highest and lowest value in array
let highest = Math.max(...number);
let lowest = Math.min(...number);

// print the results
console.log("Highest number in array is", highest)
console.log("Lowest number in array is", lowest)