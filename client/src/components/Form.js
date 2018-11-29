import React from 'react';
const Form = props => (
  <div className='container'>
  <form onSubmit={props.getRecipe} style={{ marginBottom:"5rem" }}>
  <button className="form__button">Enter Recipe Name</button>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">Search</button>
  </form>
  </div>
);
export default Form;