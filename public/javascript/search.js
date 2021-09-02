async function searchFormHandler(event) {
    event.preventDefault();

    $("#drink-section").stop();
    $("#drink-section").empty();

    const search = document.querySelector('#search-area').value;

    console.log("You chose: " + search);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`)
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

async function displayCocktail(cocktail) {
    let drinkSection = document.querySelector('#drink-section');
    let numDrinks = cocktail.drinks.length;

    if (cocktail.drinks.length > 12) {
        numDrinks = 12;
    }

    for(i=0; i < numDrinks; i++) {

        let thisDrinkID = cocktail.drinks[i].idDrink;
        
        drinkSection.innerHTML += `
            <div class="col-4">
                <div class="card scroll" style="width: 18rem;">
                    <div class="card-body drink-img-${i}">
                        <style>
                        .drink-img-${i} {
                            height: 18rem;
                            background-image: url(${cocktail.drinks[i].strDrinkThumb});
                            background-size: cover;
                            background-position: center;
                        }
                        </style>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${cocktail.drinks[i].strDrink}</h5>
                    </div>
                    <ul id="ingredient-section-${i}" class="list-group list-group-flush">
                    </ul>
                </div>
            </div>
        `;

        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${thisDrinkID}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(cocktail) {
            let ingredientSection = document.querySelector(`#ingredient-section-${i}`);
            for(let i = 1; i < 16; i++) {
                if(cocktail.drinks[0][`strIngredient${i}`] !== null) {

                    console.log(cocktail.drinks[0][`strIngredient${i}`]);

                    let ingredient = document.createElement('li')
                    $(ingredient).addClass('list-group-item');
                    ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ": " + cocktail.drinks[0][`strIngredient${i}`];
             
                    ingredientSection.appendChild(ingredient);
                }   
            }

            let instructions = document.createElement('div');
            $(instructions).addClass('list-group-item');
            instructions.innerHTML = cocktail.drinks[0].strInstructions;

            ingredientSection.appendChild(instructions);
        });
    }
};

document.querySelector('.post-search').addEventListener('submit', searchFormHandler);