// ** Day 2 – Operators & Expressions **

//     - Practice arithmetic(+, -, \*, /, %) and logical operators(>, <, ==, !=, &&, ||).
// - ** Challenge:** Small calculator for two numbers.

console.log("Number 1 = 7 and Number 2 = 11 ");

const num1 = 7;
const num2 = 11;

let answer = num1 + num2;
console.log("Add = ", answer);
answer = num1 - num2;
console.log("Minus = ", answer);
answer = num1 * num2;
console.log("Times = ", answer);
answer = num1 / num2;
console.log("Divide = ", answer);

console.log("Is Num1 greater than Num2?", num1 > num2);
console.log("Is num1 lessthen num2?", num1 < num2);
console.log("Is num1 and num2 is equal?", num1 == num2)
console.log("Is num1 and num2 is not equal?", num1 != num2)
console.log("Is num1 and num2 are greater than zero? ", num1 > 0 && num2 > 0);
console.log("Is num1 and num2 are less than zero? ", num1 < 0 && num2 < 0);
console.log("Is num1 greater then 10 or num 2 greater than 10", num1 > 10 || num2 > 10);

