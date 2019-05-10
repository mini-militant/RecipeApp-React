import React, { Component } from 'react';
import './style.css';
import Form from "./components/Form"
import Recipes from './components/Recipes'

const API_KEY="1c78f1c16d6170949cff9f1f4d1fa09c" ;

class App extends Component{

    state={
      recipes:[]
    }

   getRecipe=async(e)=>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_url=await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=15`);
    const data = await api_url.json();
    console.log(data);
    this.setState({
      recipes:data.recipes
    })
  }

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }

}
 

export default App;