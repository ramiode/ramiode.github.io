import {fetchFoodTrivia} from"./fetch.js";

const triviaButton = document.getElementById("triviaButton");
const triviaBox = document.getElementById("triviaBox");
triviaButton.addEventListener("click", updateTriviaBox);

async function updateTriviaBox(){
    let triviaText = await fetchFoodTrivia();
    triviaBox.innerText=triviaText;
}