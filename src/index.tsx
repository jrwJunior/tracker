import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// styled
import GlobalStyle from 'views/styled/global';

import store from 'states/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
