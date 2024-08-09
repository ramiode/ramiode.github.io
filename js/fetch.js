export function fetchFoodTrivia(){
    const apiKey = "78dc4caaa7c04849834a0c9a7965ee7c";
    const results = fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`).
    then((response) => response.json()).
    then((data) => data.text).
    catch((error) => console.log(error));

    return results;
}

