import React from 'react';
import ReactDOM from 'react-dom';
import './client/css/index.css';
import App from './client/common/components/app.component';
import {Provider} from 'react-redux'
import store from './client/common/services/redux/contact.store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
