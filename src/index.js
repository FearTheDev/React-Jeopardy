import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Fun Redux Stuff
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {jeopardyReducer} from './store/reducers';
import {BrowserRouter as Router} from 'react-router-dom';


const store = createStore(jeopardyReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
