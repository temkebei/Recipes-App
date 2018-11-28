import React from 'react';

const form = props => (
    <form onSubmit ={props.getRecipe} style={{ marginBottom:"2rem"}}>
        <input className="form__input" type ="text" name="recipeName" />
        <button className="form__button">Search Recipes</button>
    </form>
)
export default form;