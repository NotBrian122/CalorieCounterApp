
/*
//this is the base inputs for the recepie page
while(inpt1 === null){
    let input1 = document.getElementById('Ingreident1');
    const ingredient1 = input1.textContent;
}

while(input2 === null){

    let input2 = document.getElementById('Ingreident2');
    const ingredient2 = input2.textContent;
}

while(input3 === null){
    let input3 = document.getElementById('Ingreident3');
    const ingredient3 = input3.textContent;
}


*/


//this is an sync function for teh respecies 
async function fetchRecpieResults(){
//trying to see if this will give a response

const url =`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredient1}%2C${ingredient2}%2C${ingredient3}&number=5&ignorePantry=true&ranking=1`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ecb0d06655msha906d7ba7c6fb4dp1cf144jsn93f5e5fdcf27',
		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
	const data = await response.json();
	console.log(data);

    data.forEach(recipe => {//foreach object in this array created

        card = document.createElement('div');
        card.setAttribute('class','display');

        const h2 = document.createElement('h2');
        h2.textContent = recipe.title;
        
        const image = document.createElement('img');
        image.setAttribute('height','200px');
        image.setAttribute('width','200px');
        image.setAttribute('src',recipe.image);

        const p = document.createElement('p');
        p.textContent = 'Missing ingreditents' + recipe.missedIngredientsCount;

        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(p);
        
    });

} catch (error) {
	console.error(error);

}
}


