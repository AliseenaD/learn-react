// Recipe item interface
interface Recipe {
  id: string;
  name: string;
  ingredients: Set<string>;
}

// Interface for RecipeItem
interface RecipeItemProps {
  recipe: Recipe
}

export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

// Function to implement a recipe item
function RecipeItem({recipe}: RecipeItemProps) {
  const recipeArray = Array.from(recipe.ingredients);

  return (
    <div>
      <b>{recipe.name}</b>
      {recipeArray.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}