import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import About from './Pages/About';
import ShopCart from './components/ShopCart';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
              my app
              <Route exact path="/" component={ Content }/>
              <Route path="/about/:id" component={ About } />
              <Route path="/shopping-cart" component={ ShopCart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
