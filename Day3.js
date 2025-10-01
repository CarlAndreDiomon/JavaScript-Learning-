// ** Day 3 – Conditionals **

//     - Learn`if`, `else if`, `else`.
// - ** Challenge:** Grade calculator and teen check.

// ** Day 3 – Conditionals **
// Learn: if, else if, else
// Challenge: Grade calculator and teen check

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter your grade: ", (grade) => {
    grade = Number(grade);

    console.log("\n--- Grade Result ---");
    if (grade >= 90) {
        console.log("You got an A!");
    } else if (grade >= 80) {
        console.log("You got a B!");
    } else if (grade >= 70) {
        console.log("You got a C!");
    } else if (grade >= 60) {
        console.log("You got a D!");
    } else {
        console.log("You got an F!");
    }

    rl.question("\nEnter your age: ", (age) => {
        age = Number(age);

        console.log("\n--- Teen Check ---");
        if (age >= 13 && age <= 19) {
            console.log("You are a teenager!");
        } else {
            console.log("You are not a teenager.");
        }

        rl.close();
    });
});
