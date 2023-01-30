/* This is a fucntion that return a random element from  an array */
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex];

    return randomItem;
}

// a Function to return computer choice 
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];

    const choice = getRandomItem(array);

    return choice;
}

console.log(getComputerChoice());
