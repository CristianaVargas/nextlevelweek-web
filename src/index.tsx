import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Para o React renderizar o componente <App> dentro da Id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
