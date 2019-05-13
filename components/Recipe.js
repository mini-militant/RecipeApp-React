import React from "react"

const API_KEY="1c78f1c16d6170949cff9f1f4d1fa09c" ;

class Recipe extends React.Component{

  state={
    activeRecipe: []
  }
  
  componentDidMount=async ()=>{
    const title=this.props.location.state.recipe;
    const req=await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const res = await req.json();
    this.setState({
      activeRecipe:res.recipes[0]
    });
    console.log(this.state.activeRecipe);
  }

  render(){
    return(
      <div className="container">
        <div className="active-recipe">
          <img src={this.state.activeRecipe.image_url}
            alt={this.state.activeRecipe.title}/>
          <h3 className="active-recipe__title">{this.state.activeRecipe.title}</h3>
          <h4 className="active-recipe__publisher">
          Publisher: <span> {this.state.activeRecipe.publisher} </span>
          </h4>
          <p className="active-recipe__website">
             <span> <a href={this.state.activeRecipe.publisher_url}>{this.state.activeRecipe.publisher_url}</a> </span>
          </p>
          <button className="active-recipe__button">Go Home</button>
        </div>
      </div>
    );
  }
}

export default Recipe;