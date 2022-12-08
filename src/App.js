import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const createRecipe = (newRecipe) => {
    setRecipes([
      ...recipes,
      newRecipe
    ])
  };
  const deleteRecipe = (indexToDelete) => {
    setRecipes( (currentRecipe) => currentRecipe.filter( (_, index) => index !== indexToDelete));
  };

  
  return (
    <div className="App">
      <header><h1>Jarren's Recipes</h1></header>
      <RecipeList 
        recipes={recipes} 
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate 
        createRecipe={createRecipe}
      />
    </div>
  );
}

export default App;