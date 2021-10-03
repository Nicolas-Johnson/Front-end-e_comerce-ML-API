import React from 'react';

class ShopCart extends React.Component {
  constructor() {
    super();
    this.state = {
        CartItems: [{
          amount: 2,
          id: "MLB1700794361",
          price: 52.95,
          thumb: "http://http2.mlstatic.com/D_913699-MLB45114024383_032021-I.jpg",
          title: "Tênis Sapatênis Confortável Oferta Sapato Leve Promoção",
        },
        {
          amount: 1,
          id: "MLB1700794362",
          price: 52.95,
          thumb: "http://http2.mlstatic.com/D_913699-MLB45114024383_032021-I.jpg",
          title: "Tênis Sapatênis Confortável Oferta Sapato Leve Promoção",
        }],
        loading: false,
    }
  }
  handleQuantidade = (expression, id, index) => {
    //const { CartItems } = this.state;
    //console.log(index);
    //const finde = CartItems.find((item) => item.id === id);
    if(expression === 'add') {
      return this.setState((prevState) => {
        const { CartItems } = prevState;
        const { amount } = CartItems[index];
        const soma = amount + 1;
        return CartItems;
      })
    }      
  }

  getTotalPrice = () => {
    const { CartItems } = this.state;
    const amount = CartItems.map((item) => item.amount).reduce((acc, curr) => (acc + curr), 0);
    const prices = CartItems.map((item) => item.price * item.amount).reduce((acc, curr) => (acc + curr), 0);
    const floatFixed = parseFloat(prices.toFixed(2));
    this.setState({totalPrice: floatFixed, totalAmount: amount})
    //const totalPrice = CartItems.reduce((acc, curr) => (acc.price + curr.price), 0);
    //console.log(prices, amount);
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
  componentDidMount() {
    //const { shoppingCart } = this.props;
    //console.log(shoppingCart);
    this.getTotalPrice();
  }

  render() {
    const { CartItems, loading, totalPrice, totalAmount } = this.state;
    return (
      <div>
          <h1>Shopping Cart</h1>
          {loading && <h2>Loading...</h2>}
          <div>
              <h2>Items</h2>
              {CartItems.map(({ id, thumb, amount, title, price }, index) => (
                <div key={ id }>
                  <img src={ thumb } alt={ title } width='100' />
                  <h3>{ title }</h3>
                  <div>
                    <h4>quantidade:</h4>
                    <button type="button" onClick={ () => this.handleQuantidade('sub', id, index) }>-</button>
                    { amount }
                    <button type="button" onClick={ () => this.handleQuantidade('add', id, index) }>+</button>
                    <h4>Valor: { price }</h4>
                  </div>
                </div>
              ))}
          </div>
          <h2>quantidade: { totalAmount }</h2>
          <h2>Total: { totalPrice }</h2>
      </div>
    );
  }
}

export default ShopCart;


//return this.setState(({ CartItems }) => (CartItems: ((CartItems[index].amount) + 1)));
//    } this.setState(({ CartItems }) => (CartItems: ((CartItems[index].amount) - 1)));