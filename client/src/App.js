import React, { Component } from "react";
import "./App.css";

import Recipes from "./components/Recipes";
import Form from "./components/Form";

const API_KEY ="d770724855dcdda3a349d61d83b25d9c";

class App extends Component {
  state = {
    recipes:[]
  }
  getRecipe = async(e) =>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  render(){
    return (
      <div className ="app">
      <header className="App-header">
      <h1 className="App-title">Recipes Search App</h1>
                <nav>
                    <li><a>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </nav>
      </header>
      <Form getRecipe={this.getRecipe} />
     <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;