import { BrowserRouter,Switch,Route } from 'react-router-dom';
import React from 'react';
import App from '../app'
import Form from './Form'
import Recipe from './Recipe'

const Router=()=>{
  return(
  <BrowserRouter>
  <Switch>
  <Route  exact path="/" component={App} />
  <Route  exact path="/recipe/:id" component={Recipe} />
  </Switch>
    
  </BrowserRouter>
  );
  
}

export default Router;