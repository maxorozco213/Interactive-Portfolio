import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// Sections
import Main from "./Sections/Main";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path={"/"} exact component={Main} />
            </Router>
        )
    }
}