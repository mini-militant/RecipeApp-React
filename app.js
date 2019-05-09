import React, { Component } from 'react';
import './style.css';
import Form from "./components/Form"

const API_KEY="91a91e6a73bffff78256088bda385737" ;

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
        <Form 
        getRecipe={this.getRecipe}/>
      </div>
    );
  }

}
 

export default App;