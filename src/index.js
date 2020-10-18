import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Router';
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";

const history = createBrowserHistory();

ReactDOM.render(
    <React.Fragment>
        <Router history={history}>
            <App />
        </Router>
    </React.Fragment>,
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
