import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './redux/store'
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store} >
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
