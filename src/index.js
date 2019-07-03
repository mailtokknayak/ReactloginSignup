import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/component/App';
import './index.css';
import { Provider} from 'react-redux';
import Store from './store'

 
// var store = Store([]);




ReactDOM.render(
   <App />,
  document.getElementById('root')
);
