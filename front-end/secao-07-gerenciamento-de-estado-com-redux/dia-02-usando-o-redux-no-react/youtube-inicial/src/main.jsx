import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // contexto do redux (context)
import App from './App';
import store from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <App />
  </Provider>,
);
