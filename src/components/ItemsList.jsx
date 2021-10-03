import React from 'react';
import CardItems from './CardItems';

class ItemsList extends React.Component {
  render() {
    const { data, handleChangeOnShoppingCart } = this.props;
    return(
      <>
        <h3>ITEMS LIST</h3>        
        {data.map(({ title, id, thumbnail, price }) =>
            <CardItems
              key={ id }
              id={ id }
              price={ price }
              thumbnail={ thumbnail }
              title={ title }
              handleChangeOnShoppingCart={ handleChangeOnShoppingCart }
            />          
        )}
      </>
    );
  }
}

export default ItemsList;
