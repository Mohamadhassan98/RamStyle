import React from 'react';
import {Route} from 'react-router-dom';
import Header from "./components/Header";
import {Index} from './pages';
import {routeUrls} from "./values/urls";
import Footer from "./components/Footer";
import axios from 'axios';
import {serverUrls} from "./values/serverurls";

export default function App(props) {

    const [headerButtonsShow, setHeaderButtonShow] = React.useState(false);
    const [showFooter, setShowFooter] = React.useState(true);
    const [productCategories, setProductCategories] = React.useState([]);
    const [isLoggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        axios.get(serverUrls.allCategories).then(response => {
            setProductCategories(response.data);
        }).catch(error => {
            //TODO show appropriate error page
            window.alert('TODO: Show appropriate error');
        });
    }, []);

    React.useEffect(() => {
        axios.get(serverUrls.isLoggedIn).then(response => {
            setLoggedIn(true);
        }).catch(error => {
            setLoggedIn(false);
        });
    }, []);

    return (
        <div className="App">
            <Footer show={showFooter}>
                <Header showButtons={headerButtonsShow} {...props} productCategories={productCategories}
                        isLoggedIn={isLoggedIn}/>
                <Route path={routeUrls.home} render={(props) => <Index {...props} setShowFooter={setShowFooter}
                                                                       setShowHeaderButtons={setHeaderButtonShow}
                                                                       isLoggedIn={isLoggedIn}
                                                                       setLoggedIn={setLoggedIn}/>}/>
            </Footer>
        </div>
    );
}