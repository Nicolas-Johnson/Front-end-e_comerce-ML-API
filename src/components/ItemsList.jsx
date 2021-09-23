import React from 'react';
import CardItems from './CardItems';

class ItemsList extends React.Component {
  render() {
    const { data } = this.props;
    return(
      <>
       <h1>ITEMS LIST</h1>
       {data.map(({ title, id }) => <CardItems key={ id } title={ title } />)}
      </>
    );
  }
}

export default ItemsList;
