import React from 'react';
import { Component } from 'react';
import YTSearch from 'youtube-api-search';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        <br />
        value of the input: { this.state.term}
      </div>
    );
  }
}

export default SearchBar;
