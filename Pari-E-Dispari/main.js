// Choose even or odd
const userChoice = prompt("Choose even or odd")

// Chose the number
const userNumb = Number(prompt("Choose a number from 1 to 5"))

// Generate a random number 1 to 5
const randomNumber = Math.ceil(Math.random() * 5)

// Outuput
const result = userNumb + randomNumber;
console.log(`Your number is ${userNumb}, the number of pc is ${randomNumber}`);
console.log(result);

// Loop for the even or odd