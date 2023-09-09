
const btn = document.getElementById('cocktailButton');
        
cocktailButton.addEventListener('click', () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const cocktail = data.drinks[0];
            const cocktailInfo = document.getElementById('cocktailInfo');
            cocktailInfo.innerHTML = `
                <h2>${cocktail.strDrink}</h2>
                <p>Ingredientes:</p>
                <ul>
                    <li>${cocktail.strIngredient1}</li>
                    <li>${cocktail.strIngredient2}</li>
                    <li>${cocktail.strIngredient3}</li>
                </ul>
                <p>Instrucciones:</p>
                <p>${cocktail.strInstructions}</p>
                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});