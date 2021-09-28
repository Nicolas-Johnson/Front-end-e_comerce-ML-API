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

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { query, data, loading, notFound } = this.state;
    return (
      <div>
       <Header query={ query } handleChange={ this.handleChange } fetchData={ this.fetchData } getItemsByCategory={ this.getItemsByCategory } />
       <ItemsList data={ data } />
       {loading && <>Loading...</>}
       {notFound && <h1>Desculpa, sua pesquisa não retornou nada.</h1>}
      </div>
    );
  }
}

export default Content;
