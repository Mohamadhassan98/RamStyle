import React from 'react';
import {Route} from 'react-router-dom';
import Header from "./components/Header";
import LoginInUp from "./pages/LoginInUp";
import HomePage from "./pages/HomePage";
import {urls} from "./values/urls";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";


export default function App(props) {

    const [headerButtonsShow, setHeaderButtonShow] = React.useState(false);
    const [showFooter, setShowFooter] = React.useState(true);

    return (
        <div className="App">
            <Footer show={showFooter}>
                <Header showButtons={headerButtonsShow} {...props}/>
                <Route exact path={urls.home} render={() => <HomePage setShowHeaderButtons={setHeaderButtonShow}
                                                                      setShowFooter={setShowFooter}/>}/>
                <Route path={urls.auth}
                       render={() => <LoginInUp {...props} setShowHeaderButtons={setHeaderButtonShow}
                                                setShowFooter={setShowFooter}/>}/>
                <Route path={urls.profile}
                       render={() => <ProfilePage {...props} setShowHeaderButtons={setHeaderButtonShow}
                                                  setShowFooter={setShowFooter}/>}/>
            </Footer>
        </div>
    );
}