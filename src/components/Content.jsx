import React from 'react';
import Header from './Header';
import ItemsList from './ItemsList';


class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      query: 'Ofertas do Dia',
      category: '',
      data: [],
      loading: false,
      notFound: false,
      ShoppingCart: [],
    }
  }

  handleChange = ({ target: { name, value} }) => {
    this.setState({ [name]: value });
  }

  getItemsByCategory = (id, value) => {
    this.setState({ loading: true, data: [], notFound: false, category: value }, () =>{
      fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`)
        .then(response => response.json())
        .then(response => {
          this.setState({
            data: response.results,
            loading: false,
            notFound: false,
          })
        }).catch((error) => {
          console.log(error);
        });
    })
  }

  fetchData = () => {
    this.setState({ loading: true, data: [], notFound: false, }, () =>{
      const { query, category } = this.state;
      fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${query}`)
        .then((response) => response.json())
        .then((response) => {
          if(response.results.length === 0){
            return this.setState({ loading: false, notFound: true, data: [], });
          }
          this.setState({
            data: response.results,
            loading: false,
            notFound: false,
          })
      }).catch((error) => {
        console.log(error);
      });
    })
  }

  handleChangeOnShoppingCart = (item) => {
    //console.log('item:', item);
    //setTimeout(() => {this.item.push(item)}, 2000);
  }

  addItem = (item) => {
    this.setState((prevState) => ({ShoppingCart: [...prevState.ShoppingCart, item]}));
  }

  componentDidMount() {
    this.fetchData();
    setTimeout(() => {console.log('monted:', this.item)}, 3000);
    //if(this.item.length >=1){
      //this.addItem(this.item);
    //};
  }

  render() {
    const { query, data, loading, notFound, ShoppingCart } = this.state;
    return (
      <div>
       <Header shoppingCart={ ShoppingCart } query={ query } handleChange={ this.handleChange } fetchData={ this.fetchData } getItemsByCategory={ this.getItemsByCategory } />
       <ItemsList data={ data } handleChangeOnShoppingCart={ this.handleChangeOnShoppingCart }/>
       {loading && <>Loading...</>}
       {notFound && <h1>Desculpa, sua pesquisa não retornou nada.</h1>}
      </div>
    );
  }
}

export default Content;
