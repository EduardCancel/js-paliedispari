// Choose even or odd
const userChoice = prompt("Choose even or odd");

// Chose the number
const userNumb = Number(prompt("Choose a number from 1 to 5"));

// generate a random number

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const pcNumb = getRandomNumber(1, 5);
console.log(pcNumb);

function isEven(num1, num2) {
    const sum = num1 + num2;

    if (sum % 2 === 0) {
    return true;
}
    return false;
}

if (isEven(pcNumb, userNumb) && userChoice == "pari") {
    alert("yuo win!");
} else if (isEven(pcNumb, userNumb) == false && userChoice == "dispari") {
    alert("yuo win!");
} else {
    alert("You lose :( try again");
}
