import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './context/store';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    padding:0;
    margin:0;
  box-sizing:border-box;
};

  body {
    background-color: #333;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <GlobalStyle />
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
