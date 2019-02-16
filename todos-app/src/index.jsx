import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
//Global styles
import './resources/scss/typography.scss';
import './resources/scss/containers.scss';
import './resources/scss/margins.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
