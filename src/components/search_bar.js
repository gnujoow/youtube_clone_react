import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.setState({ term: event.target.value })} />
        <br />
      </div>
    );
  }
}

export default SearchBar;
