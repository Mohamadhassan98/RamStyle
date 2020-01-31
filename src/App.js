import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import {Index} from './pages';
import {routeUrls} from "./values/urls";
import Footer from "./components/Footer";
import axios from 'axios';
import {serverUrls} from "./values/serverurls";
import {useCookies} from "react-cookie";
import {assets} from "./values/assets";
import BankPort from "./BankPort";
import BankSuccessful from "./BankSuccessful";

export default function App(props) {

    const [headerButtonsShow, setHeaderButtonShow] = React.useState(false);
    const [showFooter, setShowFooter] = React.useState(true);
    const [productCategories, setProductCategories] = React.useState([]);
    const [isLoggedIn, setLoggedIn] = React.useState(false);
    const [basketProducts, setBasketProducts] = React.useState([]);
    const [error500, setError500] = React.useState(false);
    const [cookies] = useCookies(['csrftoken']);
    const [sellers, setSellers] = React.useState([]);

    React.useEffect(() => {
        axios.defaults.headers['Content-Type'] = 'application/json';
        axios.get(serverUrls.allCategories).then(response => {
            setProductCategories(response.data);
        }).catch(error => {
            console.log('catch get all categories: ', error);
            if (error.response && error.response.status === 500) {
                setError500(true);
            } else {
                window.alert(`Something went wrong... ${error}`);
            }
        });
    }, []);

    React.useEffect(() => {
        axios.get(serverUrls.isLoggedIn).then(response => {
            setLoggedIn(true);
            console.log('logged in');
        }).catch(error => {
            console.log('catch get is logged in: ', error);
            if (error.response && error.response.status === 500) {
                setError500(true);
            } else if (error.response.status === 401) {
                setLoggedIn(false);
                console.log('Not logged in');
            } else {
                window.alert(`Error while checking for sign in ${error}`);
            }
        });
    }, []);

    React.useEffect(() => {
        if (isLoggedIn && cookies.csrftoken) {
            axios.get(serverUrls.lastBasket).then(response => {
                if (response.data.length !== 0) {
                    const basket = response.data[0];
                    setBasketProducts(basket['products']);
                } else {
                    axios.post(serverUrls.createBasket).then(response1 => {
                        setBasketProducts([]);
                    }).catch(error => {
                        console.log('catch creating basket: ', error);
                        if (error.response && error.response.status === 500) {
                            setError500(true);
                        } else {
                            window.alert(`Error creating basket... ${error}`);
                        }
                    });
                }
            }).catch(error => {
                console.log('catch get last basket: ', error);
                if (error.response && error.response.status === 500) {
                    setError500(true);
                } else {
                    window.alert(`Error getting last basket... ${error}`);
                }
            });
        } else {
            setBasketProducts([]);
        }
    }, [isLoggedIn, cookies]);

    React.useEffect(() => {
        const csrf = cookies['csrftoken'];
        console.log(csrf);
        if (csrf) {
            axios.defaults.headers['X-CSRFToken'] = csrf;
        }
    }, [cookies]);

    React.useEffect(() => {
        axios.get(serverUrls.sellers).then(response => {
            for (let i = 0; i < response.data; i++) {
                const value = response.data[i];
                if (!value.profileImage) {
                    value.profileImage = assets.noImage;
                }
            }
            setSellers(response.data);
        }).catch(error => {
            if (error.response && error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Error while getting sellers ${error}`);
            }
        });
    }, []);

    return (
        <div className="App">
            <Switch>
                <Route exact path={routeUrls.bankPort}
                       render={(props) => <BankPort {...props} setError500={setError500}/>}/>
                <Route exact path={routeUrls.bankSuccessful} render={(props) => <BankSuccessful {...props}/>}/>
                <Footer show={showFooter} {...props}>
                    <Header showButtons={headerButtonsShow} {...props} productCategories={productCategories}
                            isLoggedIn={isLoggedIn} setError500={setError500}
                            cartSize={basketProducts ? basketProducts.length : 0}/>
                    {error500 && <Redirect to={routeUrls.error500}/>}
                    <Route path={routeUrls.home}
                           render={(props) => <Index {...props} setShowFooter={setShowFooter}
                                                     allSellers={sellers}
                                                     setShowHeaderButtons={setHeaderButtonShow}
                                                     isLoggedIn={isLoggedIn}
                                                     setLoggedIn={setLoggedIn}
                                                     setError500={setError500}
                                                     lastBasket={basketProducts}
                                                     productCategories={productCategories}/>}/>
                </Footer>
            </Switch>
        </div>
    );
}