import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../app'
import Form from './Form'

const Router=()=>{
  return(
  <BrowserRouter>
    <Route path="/form" component={Form}/>
  </BrowserRouter>
  );
  
}

export default Router;