import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
  onInputChange(event) {
    console.log(event);
  }

  render() {
    return <input onChange={this.onInputChange} />;
    // return <input onChange={event => console.log(event)}
  }
}

export default SearchBar;
