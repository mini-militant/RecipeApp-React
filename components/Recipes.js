import React from 'react';

const Recipes = (props) => {
  return(
    <div className="container">
      <div className="row">
        { props.recipes.map((recipe)=> {
          return(
            <div className="col-md-4">
              <div className="recipe__box">
                <div key={recipe.recipe_id}>
                  <img src= {recipe.image_url} alt="error"/>
                  <p >{recipe.title}</p>
                </div>
              </div>
            </div>
           );
        } ) }
      </div>
    </div>
  );
}

export default Recipes;