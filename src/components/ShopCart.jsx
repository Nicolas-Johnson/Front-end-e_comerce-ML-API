import React from 'react';

class ShopCart extends React.Component {
  constructor() {
    super();
    this.state = {
        CartItems: [],
    }
  }

  AddToCard = (data, amount) => {
    const objcItem = {
      data,
      amount,
    };

    this.setState((prevState) => {
        return {CartItems: [...prevState.CartItems, objcItem]}
    });
  }

  render() {
    //const { cartItems } = this.state;
    return (
      <div>
          <h1>Shopping Cart</h1>
          <div>
              <h2>Items</h2>
              <div>
                  {/*cartItems.map*/}
                  <h3>Item</h3>
                  <h4>quantidade: { 0+0 }</h4>
                  <h4>Valor: { 0+0 }</h4>
              </div>
          </div>
          <h2>quantidade: { 0+0 }</h2>
          <h2>Total: { 0+0 }</h2>
      </div>
    );
  }
}

export default ShopCart;
