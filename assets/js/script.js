//Wait for Dom to finish loading before running the game
//Get the button elements and add event listners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {
    //Creates two random numbers between1 and 25.
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {}

function calculateCorrectScore() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtactQuestion() {}

function displayMultiplyQuestion() {}
