import React from "react";

import Recipe from './Recipe';

function RecipeList( { recipes, deleteRecipe } ) {
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            recipes.map( (recipe, index) => {
              return (
                <Recipe 
                  recipe={recipe} 
                  key={index}
                  deleteRecipe={() => deleteRecipe(index)} 
                />)
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;