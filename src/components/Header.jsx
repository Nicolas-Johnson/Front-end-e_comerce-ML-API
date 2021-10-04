import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    }
  }

  callCategorie = ({ target }) => {
    const categorie = target.value;
    const options = [...target];
    const find = options.find((option) => option.value === categorie);    
    const { getItemsByCategory } = this.props;
    getItemsByCategory(find.id, find.value);

  }

  fetchCategories = () => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then(response => response.json())
      .then(response => this.setState({categories: response}));
  }

  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    const { query, handleChange, fetchData } = this.props;
    const { categories } = this.state;
    return (
      <div>
       <label htmlFor="searchFor">
           Search:
           <input name="query" type="text" value={ query } onChange={ handleChange } />
       </label>
       <button type="button" onClick={ fetchData }>Search</button>
       <label htmlFor="Categories">
         Categories
         <select name="Categories" onChange={(event) => this.callCategorie(event)}>
           {categories.map(({ name, id }) => <option key={ id } id={ id }>{ name }</option>)}
         </select>
       </label>
       <button type="button"><Link to={ {pathname: "/shopping-cart"} }>Shopping Cart</Link></button>
      </div>
    );
  }
}

export default Header;
