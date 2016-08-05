import React from 'react';
import ReactDOM from 'react-dom';

import YOUTUBE from './API_KEY';

const API_KEY = YOUTUBE;

const App = () => {//ES6 style syntax
  return <div>Hi</div>;
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
