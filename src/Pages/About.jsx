import React from 'react';
import { Link } from 'react-router-dom';


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: false,
      notFound: false,
      picIndex: 0,
      amount: 1,
    }
  }

  handleCartAdd = () => {
    const { location: { handleChangeOnShoppingCart } } = this.props;
    const { data, amount } = this.state;
    const amountInNumber = parseInt(amount);
    const objcItem = [{
      amount: amountInNumber,
      id: data.id,
      price: data.price,
      thumb: data.thumbnail,
      title: data.title,
    }];
    handleChangeOnShoppingCart(objcItem);
  }

  handleAmount = ({ target: { value } }) => {this.setState({amount: value})}

  handlePicChange = (value) => {
    const { picIndex, data: { pictures } } = this.state;
    if(value === 'next') {
      if(picIndex >= (pictures.length - 1)) {
        return ' '
      }
      return this.setState((prevState, _props) => ({
        picIndex: prevState.picIndex + 1
      }))
    }
    if(picIndex === 0) {
      return ' '
    }
    this.setState((prevState) => ({
      picIndex: prevState.picIndex - 1
    }))
  }

  fetchData = () => {
    this.setState({ loading: true, notFound: false, data: null }, () => {
      const { match: { params: { id }}} = this.props;
      fetch(`https://api.mercadolibre.com/items?ids=${id}`)
        .then(response => response.json())
        .then(response => {
          if(!response[0].body){
            return this.setState({ loading: false, notFound: true, data: null, });
          }
          this.setState({
            data: response[0].body,
            loading: false,
          })
        });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { loading, notFound, data, picIndex } = this.state;
    return(
      <>
        <h2>About Item</h2>
        <Link to='/'>Home</Link>
        {loading && <div>Loading...</div>}
        {data
          && 
            <div>
              <button onClick={ () => this.handlePicChange('previous') } type="button">{'<'}</button>
              <img width="200" src={ data.pictures[picIndex].url } alt={ `${data.title} ${ data.pictures[picIndex]}` }/>
              <button onClick={ () => this.handlePicChange('next') } type="button">{'>'}</button>
              <h3>{ data.title }</h3>
              <h4>R${ data.price }</h4>
              <div>
                <input type='number' min={1} max={100} onChange={ this.handleAmount } />
                <button type='button'onClick={ this.handleCartAdd }>Add to Cart</button>
              </div>
            </div>}
        {notFound && <div>Item not Found</div>}
      </>
    );
  }
}

export default About;
