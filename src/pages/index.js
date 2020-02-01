import {Route, Switch} from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import {routeUrls} from "../values/urls";
import PropTypes from 'prop-types';
import ProfilePage from './profile/index';
import SignInUp from "./SignInUp";
import ErrorPage from "../components/ErrorPage";
import {strings} from "../values/strings";
import Basket from "./Basket";
import Products from "./Products";
import AboutProject from "./AboutProject";
import ProductDetails from "./ProductDetails";

export function Index(props) {

    const {setShowHeaderButtons: showHeader, setShowFooter: showFooter, isLoggedIn, setLoggedIn, productCategories, setError500, lastBasket, allSellers} = props;
    const matchUrl = props.match.url;

    return (
        <Switch>
            <Route exact path={`${matchUrl}`} render={(props) => <HomePage {...props} setShowHeaderButtons={showHeader}
                                                                           allSellers={allSellers}
                                                                           setShowFooter={showFooter}
                                                                           setError500={setError500}
                                                                           productCategories={productCategories}/>}/>
            <Route path={routeUrls.auth} render={(props) => <SignInUp {...props} setShowFooter={showFooter}
                                                                      isLoggedIn={isLoggedIn}
                                                                      setError500={setError500}
                                                                      setShowHeaderButtons={showHeader}
                                                                      setLoggedIn={setLoggedIn}/>}/>
            <Route path={routeUrls.aboutUs} render={(props) => <AboutProject {...props}/>}/>
            <Route path={routeUrls.profile} render={(props) => <ProfilePage {...props} setShowFooter={showFooter}
                                                                            setShowHeaderButtons={showHeader}
                                                                            setError500={setError500}
                                                                            isLoggedIn={isLoggedIn}
                                                                            setLoggedIn={setLoggedIn}/>}/>
            <Route path={routeUrls.cart} render={(props) => <Basket {...props} setShowHeaderButtons={showHeader}
                                                                    allSellers={allSellers}
                                                                    setError500={setError500}
                                                                    lastBasket={lastBasket}
                                                                    setShowFooter={showFooter}
                                                                    isLoggedIn={isLoggedIn}/>}/>
            <Route path={routeUrls.category}
                   render={(props) => <Products {...props} productCategories={productCategories}
                                                setShowFooter={showFooter}
                                                setShowHeaderButtons={showHeader} setError500={setError500}/>}/>
            <Route path={routeUrls.product}
                   render={(props) => <ProductDetails {...props} setError500={setError500} allSellers={allSellers}
                                                      isLoggedIn={isLoggedIn}/>}/>
            <Route path={routeUrls.error500} render={(props) => <ErrorPage {...props}
                                                                           errorTitle={strings.error500Title}
                                                                           setShowFooter={showFooter}
                                                                           errorBody={strings.error500Body}/>}/>
            <Route render={(props) => <ErrorPage {...props}
                                                 errorTitle={strings.error404Title}
                                                 setShowFooter={showFooter}
                                                 errorBody={strings.error404Body}/>}/>
        </Switch>
    );
}

Index.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    productCategories: PropTypes.array.isRequired,
    setError500: PropTypes.func.isRequired,
    lastBasket: PropTypes.array.isRequired,
    allSellers: PropTypes.array.isRequired
};