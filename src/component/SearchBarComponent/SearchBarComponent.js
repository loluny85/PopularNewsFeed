import React from 'react';
import './SearchBarComponent.css';

const SearchBarComponent = (props) => {
    return (
      <div className="search-bar-container">
          <input type='text' placeholder='Search NY Times Most Popular' onChange={props.filterResultBySearchTerm} />
          <i className="fas fa-search"></i>
      </div>
    );
}

export default SearchBarComponent;
