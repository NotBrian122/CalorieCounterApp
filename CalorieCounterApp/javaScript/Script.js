//entering peramaeters


document.getElementById('EnterButton').onclick = function checksBeforeSendingToAPI(){
    let loop = true;
    while(loop = true){

        let changeInputText = document.getElementById('userInputSection');
        changeInputText.textContent ='You didnt a food to search<br>Enter one:';
        changeInputText.style.color = 'red';

        const dishItem =document.getElementById('userInput').value;

        if(dishItem === null){
            changeInputText.textContent ='You didnt a food to search<br>Enter one:';
            changeInputText.style.color = 'red';
        }else{
            loop = false; 
        }   
    }

    const restrictiveDiets = document.getElementById('restrivtiveDietsCheckBoxes').querySelectorAll('input[type="checkbox"]');
    const selectedRestrictions = [];
    
    for(let i = 0; i< restrictiveDiets.lenght;i++){
        if(restrictiveDiets[i].checked){
            selectedRestrictions.push(restrictiveDiets[i].value);
        }   
    }
}

//this is the async function here, it works
async function recepieApi(){
const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=side%20salad&diet=vegetarian&intolerances=gluten&includeIngredients=cheese%2Cnuts&excludeIngredients=eggs&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=false&addRecipeNutrition=false&maxReadyTime=45&sort=max-used-ingredients&offset=0&number=10&ranking=10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ecb0d06655msha906d7ba7c6fb4dp1cf144jsn93f5e5fdcf27',
		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

