import React from 'react';

const Recipe = ( { recipe, deleteRecipe } ) => {
    //destructuring props to later be deplayed in table data
    const { name, cuisine, photo, ingredients, preparation } = recipe;

    return(
        <tr>
            <td>
                <p>{name}</p>
            </td>
            <td>
                <p>{cuisine}</p>
            </td>
            <td>
                <img src={photo} alt={name} />
            </td>
            <td>
                <p>{ingredients}</p>
            </td>
            <td>
                <p>{preparation}</p>
            </td>
            <td>
                <button name="delete" id="delete" onClick={deleteRecipe}>Delete</button>
            </td>
        </tr>
    )

}

export default Recipe;