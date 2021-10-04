import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import About from './Pages/About';
import ShopCart from './components/ShopCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ShoppingCart: [],
    }
  }

  handleChangeOnShoppingCart = (item) => {
    const { ShoppingCart } = this.state;
    const oldCart = Object.assign([], ShoppingCart);
    oldCart.push(item[0]);    
    this.setState({ShoppingCart: [...oldCart]});
  }

  render() {
    const { ShoppingCart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
              my app
              <Route exact path="/" component={() =><Content handleChangeOnShoppingCart={this.handleChangeOnShoppingCart} />}/>
              <Route path="/about/:id" component={ About } />
              <Route path="/shopping-cart" component={() => <ShopCart shoppingCart={ShoppingCart}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
