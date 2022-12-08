import React, { useState } from "react";

function RecipeCreate( { createRecipe } ) {
//building initial state to make for more DRY code
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
///declare a piece of state
  const [newRecipes, setNewRecipe ] = useState(initialState)
///change handler to govern the target key value pair
  const onChangeHandler = ( { target } ) => {
    setNewRecipe({
      ...newRecipes,
      [target.name]: target.value
    });
  };
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    createRecipe(newRecipes);
    setNewRecipe({...initialState});
  }
  
  return (
    <form name="create" onSubmit={onSubmitHandler}>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <input 
                name="name"
                id="name"
                placeholder="Name"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.name}
                required
              />
            </td>
            <td>
              <input 
                name="cuisine" 
                id="cuisine"
                placeholder="Cuisine"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.cuisine}
                required
              />
            </td>
            <td>
              <input 
                name="photo" 
                id="photo"
                placeholder="URL"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.photo}
                required
              />
            </td>
            <td>
              <textarea 
                name="ingredients" 
                id="ingredients"
                placeholder="Ingredients"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.ingredients}
                required
              />
            </td>
            <td>
              <textarea 
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                type="text"
                onChange={onChangeHandler}
                value={newRecipes.preparation}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;