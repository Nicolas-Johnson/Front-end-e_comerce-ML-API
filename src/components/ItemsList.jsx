import React from 'react';
import { Link } from 'react-router-dom';
import CardItems from './CardItems';

class ItemsList extends React.Component {
  render() {
    const { data } = this.props;
    return(
      <>
        <h3>ITEMS LIST</h3>        
        {data.map(({ title, id, thumbnail, price }) =>
          <Link key={ id } to={`/about/${id}`}>
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
