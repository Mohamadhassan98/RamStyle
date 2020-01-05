import React from 'react';
import {Route} from 'react-router-dom';
import Header from "./components/Header";
import {Index} from './pages';
import {baseUrls} from "./values/urls";
import Footer from "./components/Footer";


export default function App(props) {

    const [headerButtonsShow, setHeaderButtonShow] = React.useState(false);
    const [showFooter, setShowFooter] = React.useState(true);

    return (
        <div className="App">
            <Footer show={showFooter}>
                <Header showButtons={headerButtonsShow} {...props}/>
                <Route path={baseUrls.home} render={(props) => <Index {...props} setShowFooter={setShowFooter}
                                                                      setShowHeaderButtons={setHeaderButtonShow}/>}/>
            </Footer>
        </div>
    );
}