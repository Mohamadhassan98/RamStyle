import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from "./components/Header";
import LoginInUp from "./pages/LoginInUp";
import HomePage from "./pages/HomePage";


export default function App(props) {

    const [headerButtonsShow, setHeaderButtonShow] = React.useState(false);

    return (
        <div className="App">
            <Header showButtons={headerButtonsShow} {...props}/>
            <Route exact path='/' render={() => <HomePage setShowHeaderButtons={setHeaderButtonShow}/>}/>
            <Route path='/auth' render={() => <LoginInUp {...props} setShowHeaderButtons={setHeaderButtonShow}/>}/>
        </div>
    );
}