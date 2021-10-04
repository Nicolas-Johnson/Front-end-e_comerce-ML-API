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
  handleQuantidade = (expression, amount, index, lengthCart) => {
    if(expression === 'add') {
      const { CartItems } = this.state;
      const Items = Object.assign([], CartItems);
      Items[index].amount = amount + 1;
      this.setState({ CartItems: [...Items] }, () => {
        this.getTotalPrice();
      });
    } else if(expression === 'sub') {
        if(amount > 1) {
          const { CartItems } = this.state;
          const Items = Object.assign([], CartItems);
          Items[index].amount = amount - 1;
          this.setState({ CartItems: [...Items] }, () => {
            this.getTotalPrice();
          });
        }
    }
  }
  handleRemoveItem = (index) => {
    const { CartItems } = this.state;
    const Items = Object.assign([], CartItems);
    Items.splice(index, 1);
    this.setState({CartItems: [...Items]}, () => {
      this.getTotalPrice();
    });
  }

  getTotalPrice = () => {
    const { CartItems } = this.state;
    const amount = CartItems.map((item) => item.amount).reduce((acc, curr) => (acc + curr), 0);
    const prices = CartItems.map((item) => item.price * item.amount).reduce((acc, curr) => (acc + curr), 0);
    const floatFixed = parseFloat(prices.toFixed(2));
    this.setState({totalPrice: floatFixed, totalAmount: amount})
  }

  componentDidMount() {
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
                    <button type="button" onClick={ () => this.handleQuantidade('sub', amount, index, (CartItems[-1] - 1)) }>-</button>
                    { amount }
                    <button type="button" onClick={ () => this.handleQuantidade('add', amount, index) }>+</button>
                    <h4>Valor: { parseFloat((price * amount).toFixed(2)) }</h4>
                    <button type="button" onClick={() => this.handleRemoveItem(index)}> X </button>
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

