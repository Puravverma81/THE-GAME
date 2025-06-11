


const choices = ["rock", "paper", "scissors"];

const userChoiceSpan = document.getElementById("userChoice");
const computerChoiceSpan = document.getElementById("computerChoice");
const resultSpan = document.getElementById("gameResult");

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        userChoiceSpan.textContent = capitalize(userChoice);
        computerChoiceSpan.textContent = capitalize(computerChoice);
        resultSpan.textContent = result;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(user, computer) {
    if (user === computer) return "It's a draw!";
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "Congratulations , U win!";
    } else {
        return "Computer wins!";
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
