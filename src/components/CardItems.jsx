import React from 'react';
import { Link } from 'react-router-dom';

class CardItems extends React.Component {
  render() {
    const { title, thumbnail, price, id, handleChangeOnShoppingCart } = this.props;
    return(
      <Link  to={ { pathname: `/about/${id}`, id: `${id}`, handleChangeOnShoppingCart } }>
        <img src={ thumbnail } alt={ title } width="150" />
        <h1>{ title }</h1>
        <h3>R${ price }</h3>
      </Link>
    );
  }
}

export default CardItems;
