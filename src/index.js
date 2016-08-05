import YOUTUBE from './API_KEY'; //API KET for youtube api

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = YOUTUBE;

const App = () => {//ES6 style syntax
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
