import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { message } from './reducer';


const store=createStore(message);
ReactDOM.render(
<App/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
