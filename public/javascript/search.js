async function searchFormHandler(event) {
    event.preventDefault();

    $("#drink-section").stop();
    $("#drink-section").empty();

    const search = document.querySelector('#search-area').value;
    
    if(search == 'gin') {
        console.log("You chose: " + search);
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    displayCocktail(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    } 
    else if (search == "rum") {
        console.log("You chose: " + search);
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    displayCocktail(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    } else if (search == "tequila") {
        console.log("You chose: " + search);
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    displayCocktail(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    } else if (search == "whiskey") {
        console.log("You chose: " + search);
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    displayCocktail(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    } else if (search == "vodka") {
        console.log("You chose: " + search);
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    displayCocktail(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
}

async function displayCocktail(cocktail) {
    for(i=0; i < cocktail.drinks.length; i++) {
        // console.log(cocktail.drinks[i].strDrink);
        let drinkSection = document.querySelector('#drink-section');

        let drinkName = document.createElement('h2');

        drinkName.innerHTML = cocktail.drinks[i].strDrink;

        drinkSection.appendChild(drinkName);

        let drinkImg = document.createElement('img');
        drinkImg.src = cocktail.drinks[i].strDrinkThumb;

        drinkSection.appendChild(drinkImg);

        let thisDrinkID = cocktail.drinks[i].idDrink;

        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${thisDrinkID}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(cocktail) {
            let drinkSection = document.querySelector('#drink-section');
            var drinkUl = document.createElement('ul')

            drinkSection.appendChild(drinkUl);
            for(let i = 1; i < 16; i++) {
                if(cocktail.drinks[0][`strIngredient${i}`] !== null) {
                    console.log(cocktail.drinks[0][`strIngredient${i}`]);

                    let ingredient = document.createElement('li')
                    ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ": " + cocktail.drinks[0][`strIngredient${i}`];
            
                    drinkSection.appendChild(ingredient);
                }   
            }

            let instructions = document.createElement('div');
            instructions.innerHTML = cocktail.drinks[0].strInstructions;

            drinkSection.appendChild(instructions);
        });
    }
};

async function getDrinkID(cocktailID) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`)
    .then(function(res) {
        return res.json();
    })
    .then(function(res) {
        displayCocktailInfo(res);
    });
}

function displayCocktailInfo(cocktail) {
    let drinkSection = document.querySelector('#drink-section');
    var drinkUl = document.createElement('ul')

    drinkSection.appendChild(drinkUl);
    for(let i = 1; i < 16; i++) {
        if(cocktail.drinks[0][`strIngredient${i}`] !== null) {
            // console.log(cocktail.drinks[0][`strIngredient${i}`]);

            let ingredient = document.createElement('li')
            ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ": " + cocktail.drinks[0][`strIngredient${i}`];
            
            drinkSection.appendChild(ingredient);
        }
    }

    let instructions = document.createElement('div');
    instructions.innerHTML = cocktail.drinks[0].strInstructions;

    drinkSection.appendChild(instructions);
}

document.querySelector('.post-search').addEventListener('submit', searchFormHandler);