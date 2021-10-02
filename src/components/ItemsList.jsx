import React from 'react';
import { Link } from 'react-router-dom';
import CardItems from './CardItems';

class ItemsList extends React.Component {
  teste = (data, amount) => {
    console.log('amount:', amount);
    console.log('DATA:', data);
    //const { handleChangeOnShoppingCart } = this.props;
    //handleChangeOnShoppingCart()
  }

  render() {
    const { data, handleChangeOnShoppingCart } = this.props;
    return(
      <>
        <h3>ITEMS LIST</h3>        
        {data.map(({ title, id, thumbnail, price }) =>
          <Link key={ id } to={ { pathname: `/about/${id}`, id: `${id}`, handleChangeOnShoppingCart } }>
            <CardItems
              price={ price }
              thumbnail={ thumbnail }
              title={ title }
            />
          </Link>
        )}
      </>
    );
  }
}

export default ItemsList;
