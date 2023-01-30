function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex];

    return randomItem;
}

function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];

    const choice = getRandomItem(array);

    return choice;
}

console.log(getComputerChoice());
