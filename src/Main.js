import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import Tournament from './components/tournament';
import Pitch from './components/pitch';


export class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/"><App /></Route>
                        <Route path="/tournament"><Tournament /></Route>
                        <Route path="/pitch"><Pitch/></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;
