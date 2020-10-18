import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

// Sections
import Main from "./Sections/Main";
import Intro from "./Sections/Intro";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path={"/"} exact component={Intro} />
                <Route path={"/Main"} exact component={Main} />
            </Router>
        )
    }
}