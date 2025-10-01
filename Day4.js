// ** Day 4 – Loops **

//     - Use`for` and `while` loops.
// - ** Challenge:** Multiplication table, sum of first 10 numbers.


console.log("Multiplication Table");

//  let the variable number start at 1, if number is less than or equal 10 number plus 1.
for (let number = 1; number <= 10; number++) {

    // Add a break line and Output the current number table
    console.log(`\n Table ${number}`);

    // let the variable multi(multiplier) start at 1, if multi less than or equal 10 multi plus 1.
    for (let multi = 1; multi <= 10; multi++) {

        // output the current number times current multi = number times multi
        console.log(`${number} x ${multi} = ${number * multi}`);

    }
}


