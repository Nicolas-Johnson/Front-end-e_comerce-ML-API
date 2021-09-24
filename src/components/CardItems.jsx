import React from 'react';

class CardItems extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return(
      <>
      <img src={ thumbnail } alt={ title } width="150" />
       <h1>{ title }</h1>
       <h3>R${ price }</h3>
      </>
    );
  }
}

export default CardItems;
