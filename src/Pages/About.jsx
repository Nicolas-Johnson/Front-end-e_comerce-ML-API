import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: false,
      notFound: false,
      picIndex: 0,
    }
  }

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
    this.setState((prevState, _props) => ({
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
          console.log(response[0].body)}
        );
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { loading, notFound, data, picIndex } = this.state;
    console.log(data);
    return(
      <>
        <h2>About Item</h2>
        {loading && <div>Loading...</div>}
        {data 
          && 
            <div>
              <button onClick={ () => this.handlePicChange('previous') } type="button">{'<'}</button>
              <img width="200" src={ data.pictures[picIndex].url } alt={ `${data.title} ${ data.pictures[picIndex]}` }/>
              <button onClick={ () => this.handlePicChange('next') } type="button">{'>'}</button>
              <h3>{ data.title }</h3>
              <h4>R${ data.price }</h4>
            </div>}
        {notFound && <div>Item not Found</div>}
      </>
    );
  }
}

export default About;
