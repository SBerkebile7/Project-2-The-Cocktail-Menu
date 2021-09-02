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

async function searchWordFormHandler(event) {
    event.preventDefault();

    $("#drink-section").stop();
    $("#drink-section").empty();

    const search = document.querySelector('#search-directions').value;

    console.log("You chose: " + search);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
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

    for(i=0; i < cocktail.drinks.length; i++) {

        let thisDrinkID = cocktail.drinks[i].idDrink;
        
        drinkSection.innerHTML += `
            <div class="col-4 scroll mt-1" >

                <div class="card" style="width: 18rem;">
                    <img src="${cocktail.drinks[i].strDrinkThumb}" class="card-img-top" alt="...">
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

document.querySelector('.word-post-search').addEventListener('submit', searchWordFormHandler);