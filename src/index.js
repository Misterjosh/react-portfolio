import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// StrictMode was throwing errors against libraries I was using.
ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
