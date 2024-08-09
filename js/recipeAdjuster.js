const portionSize = document.getElementById("portionSize");
const ingredientsList = document.getElementById("ingredients").querySelectorAll("li");

let baseValues = Array(ingredientsList.length).fill(0);
for (let i = 0; i < ingredientsList.length; i++){
    baseValues[i] = parseInt(ingredientsList[i].textContent.split(" ")[0]);
}

let inputValue;
portionSize.addEventListener("input", function(event){
    if(portionSize.value > 0){
        inputValue = portionSize.value;
        recipeUpdate(inputValue);
    }
    
});

function recipeUpdate(portion){
    for(let i = 0; i < ingredientsList.length; i++){
        let ingredient = ingredientsList[i].textContent;
        let newMeasurement = baseValues[i] * portion;
        ingredientsList[i].textContent = newMeasurement + " " + ingredient.split(" ")[1];
    }

}