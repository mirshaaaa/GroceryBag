import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import Recipes from './components/Recipes';
import Addrecipe from './components/Addrecipe';
import SList from './components/SList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import {Provider} from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Recipes}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/recipe/add" component={Addrecipe}/>
          <Route exact path="/shoppinglist" component={SList}/>
        </Switch>
      
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
