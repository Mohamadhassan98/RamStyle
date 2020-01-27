import {Route, Switch} from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import {baseUrls} from "../values/urls";
import PropTypes from 'prop-types';
import ProfilePage from './profile/index';
import SignInUp from "./SignInUp";
import ErrorPage from "../components/ErrorPage";
import {strings} from "../values/strings";
import {assets} from "../values/assets";

export function Index(props) {

    const {setShowHeaderButtons: showHeader, setShowFooter: showFooter, isLoggedIn, setLoggedIn, productCategories} = props;
    const matchUrl = props.match.url;

    return (
        <Switch>
            <Route exact path={`${matchUrl}`} render={(props) => <HomePage {...props} setShowHeaderButtons={showHeader}
                                                                           setShowFooter={showFooter}
                                                                           categoryList={productCategories}/>}/>
            <Route path={baseUrls.auth} render={(props) => <SignInUp {...props} setShowFooter={showFooter}
                                                                     setShowHeaderButtons={showHeader}
                                                                     setLoggedIn={setLoggedIn}/>}/>
            <Route path={baseUrls.profile} render={(props) => <ProfilePage {...props} setShowFooter={showFooter}
                                                                           setShowHeaderButtons={showHeader}
                                                                           isLoggedIn={isLoggedIn}
                                                                           setLoggedIn={setLoggedIn}/>}/>
            <Route render={(props) => <ErrorPage {...props} title={strings.error404Title} body={strings.error404Body}
                                                 image={assets.image1}/>}/>
        </Switch>
    );
}

Index.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    productCategories: PropTypes.array.isRequired
};