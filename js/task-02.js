const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function addIngredientsList(ingredients) {
  const parentIngredients = document.querySelector('#ingredients');

  const ingredientsLi = ingredients.map(ingredient => {
    const ingredientLi = document.createElement('li');
    ingredientLi.textContent = ingredient;
    ingredientLi.classList.add('item');
    return ingredientLi;
  });

  parentIngredients.append(...ingredientsLi);
}

addIngredientsList(ingredients);
