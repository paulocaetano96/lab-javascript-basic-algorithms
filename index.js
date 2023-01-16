// Iteration 1: Names and Input
console.log("I'm ready!");

const hacker1 = "Paulo Caetano";
    console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Gabriel Casagrande";
    console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) { 
    console.log("The driver has the longest name, it has " + hacker1.length);
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, is has " + hacker2.length + ".");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length);
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase());
