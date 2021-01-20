import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import Tournament from './components/tournament';


export class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/"><App /></Route>
                        <Route path="/tournament"><Tournament /></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;
