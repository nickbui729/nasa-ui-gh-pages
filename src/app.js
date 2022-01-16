import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import MainLayoutComponent from './App/components/MainLayoutComponent/MainLayoutComponent';
import CategoriesContainer from './App/components/Categories/CategoriesContainer';
import SearchBarPage from './App/components/SearchBar/SearchBarPage';
import CategoryGroupContainer from './App/components/Categories/CategoryGroupContainer';

function App() {
  
  return (
    <React.Fragment>
      <Router>

        <MainLayoutComponent />

        <Switch>
          <Route path="/categories" component={CategoriesContainer} /> 
          <Route path="/search" component={SearchBarPage} />
          <Route path="/category" component={CategoryGroupContainer} />

          
        </Switch>

      </Router>
    </React.Fragment>
  )
}

export default App;
