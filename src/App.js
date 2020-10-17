import React, {useEffect} from 'react';
import { useDispatch } from "react-redux"
import { loadBreweries } from "./store/actions/breweries"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Breweries from "./containers/Breweries";
import SingleBrewery from "./containers/SingleBrewery";

function App() {
  const dispatch = useDispatch()
  /**
   * Initial load the breweries 
   */
  useEffect(() => {
    dispatch(loadBreweries())
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Breweries} />
          <Route path="/:slug" exact component={SingleBrewery} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
