import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UpperHeader from "./components/UpperHeader";
import LoginInUp from "./pages/LoginInUp";
import HomePage from "./pages/HomePage";


export default function App(props) {

    const [headerButtonsShow, setHeaderButtonShow] = React.useState('false');

    return (
        <div className="App">
            <UpperHeader showButtons={headerButtonsShow}/>
            <Router>
                <Switch>
                    <Route exact path='/' render={() => <HomePage setShowHeaderButtons={setHeaderButtonShow}/>}/>
                    <Route path='/shop/' component={LoginInUp}/>
                </Switch>
            </Router>
        </div>
    );
}