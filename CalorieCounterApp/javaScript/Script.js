//entering peramaeters


document.getElementById('EnterButton').onclick = function checksBeforeSendingToAPI(){
    let loop = true;//for the do while loop
   
        let changeInputText = document.getElementById('headdingInputText');//input text (to be changed later)

        const dishItem =document.getElementById('userInput');//this is the text the user is inputting
        const menuItem = dishItem.textContent;

        //do while loop for the main debugging 
    do{
        if(menuItem == null){//if the item is null then it will dynalically change the webpage to suit the user
             changeInputText.textContent ='You didnt a food to search Enter one:';
             changeInputText.style.color = 'red';
             return;

        }else if(menuItem != null && isNaN(menuItem))//so if the menu item isint a number and isist null then
            {
            changeInputText.textContent ='Input Sucessful';
            changeInputText.style.color = 'black';
             const outputMenuItemArr = menuItem.split(',');//splitting the items up incase there is more than 1 item submitted
             loop = false;//breaing the loop
            }else{
                changeInputText.textContent ='You didnt a food to search <br> Enter one:';
                changeInputText.style.color = 'red';
                return;
            }

    }while(loop = true);

//checkboxes section for processing. 

    const restrictiveDiets = document.querySelectorAll('dietsCheckBoxes');//dietary requirements checkboxes
    const selectedRestrictions = [];//adding this to the array of items
    
    for(let i = 0; i< restrictiveDiets.lenght; i++){
        if(restrictiveDiets[i].checked){
            selectedRestrictions.push(restrictiveDiets[i].value);//value present push it to this one 
        }   
    }

    const allergenCheckBoxes = document.querySelectorAll('AllergensCheckboxes');
    const selectedAllgerns = [];//adding this to an array of items.

    for(let i = 0; i< allergenCheckBoxes.length;i++){
        if(allergenCheckBoxes[i].checked){
            selectedAllgerns.push(allergenCheckBoxes[i].value);//value present push it to this one 
        }
    }
    
}
function figuringOutRestrictionsToAddToUrL(outputMenuItemArr,selectedRestrictions,selectedAllgerns){//passing in these arrays
    
    let userInput ='';
    let dietaryRestrionsString ='';
    let allegerRestrictionsString ='';

    if(selectedRestrictions != null ){
        dietaryRestrionsString +=`diet=`;//if their not null include these
    }
    if(selectedAllgerns != null){//if their not null include these
        allegerRestrictionsString +=`intolerances=`;
    }
     for(let i = 0; i < 10;i++){//lenght 10 as theres 11 allergens and im doing 2 in one here

        if(outputMenuItemArr.lenght === 1){//user input 
            userInput =+ `${outputMenuItemArr[0]}%20`;

        }else if(outputMenuItemArr.lenght > 1){
            userInput =+ `${outputMenuItemArr[i]}%2C%20`;
        }


        if(selectedRestrictions.lenght ===1)//selected dietery restricitons 
        {
            dietaryRestrionsString +=`${selectedRestrictions[0]}%20`;
        }else if (selectedRestrictions.lenght > 1)
        {
             dietaryRestrionsString +=`${selectedRestrictions[i]}%20`
        }


        if(allegerRestrictions.length === 1){
            allegerRestrictionsString += `${selectedAllgerns[0]}%20`;
        }else if (allegerRestrictions.length >1){
            allegerRestrictionsString +=  `${selectedAllgerns[i]}%20`;//this is all formatting and im running out of time 

        }
    }
        const websiteUrl =`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${}&${}&intolerances=gluten&includeIngredients=cheese%2Cnuts&excludeIngredients=eggs&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=false&addRecipeNutrition=false&maxReadyTime=45&sort=max-used-ingredients&offset=0&number=10&ranking=10`;
    return websiteUrl;
};

function creatingCards(result){
    const mainCard = document.getElementById('displayCards');

    const cardProps ={//this was supposed to be a class that would get the values of the json and apply them to the card
        //I ran out of time 
      extednedIngreidents : ""  
    }


}


//this is the async function here, it works...mostly
async function recepieApi(){


const url = figuringOutRestrictionsToAddToUrL(outputMenuItemArr,selectedRestrictions,selectedAllgerns);


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
    array.forEach(result => {
        
    });
} catch (error) {
	console.error(error);
}
}

//im sorry for this pice of shit project. I ran out of time due to overworking. Im very aware that this is a
//attendance class and not an online course. Cost of living is too much these days. 
//if i get the time I really want to finihs this project. 