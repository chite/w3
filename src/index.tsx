import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
const RESET_STYLE = require('./style/reset.scss');
const SCSS_STYLE = require('./style/style.scss');
import App from './components/App';
import store from './store/configurestore';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root')); 