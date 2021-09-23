
import React from 'react';

class Header extends React.Component {
  render() {
    const { query, handleChange, fetchData } = this.props;
    return (
      <div>
       <label htmlFor="searchFor">
           Search:
           <input name="query" type="text" value={ query } onChange={ handleChange } />
       </label>
       <button type="button" onClick={ fetchData }>Search</button>
      </div>
    );
  }
}

export default Header;
