import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// Home
import Main from "./Home/Main";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path={"/"} exact component={Main} />
            </Router>
        )
    }
}