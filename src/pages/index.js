import {Route, Switch} from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import {baseUrls} from "../values/urls";
import PropTypes from 'prop-types';
import ProfilePage from './profile/index';
import SignInUp from "./SignInUp";

export function Index(props) {
    const {setShowHeaderButtons: showHeader, setShowFooter: showFooter} = props;
    const matchUrl = props.match.url;
    return (
        <Switch>
            <Route exact path={`${matchUrl}`} render={(props) => <HomePage {...props} setShowHeaderButtons={showHeader}
                                                                           setShowFooter={showFooter}/>}/>
            <Route path={baseUrls.auth} render={(props) => <SignInUp {...props} setShowFooter={showFooter}
                                                                     setShowHeaderButtons={showHeader}/>}/>
            <Route path={baseUrls.profile} render={(props) => <ProfilePage {...props} setShowFooter={showFooter}
                                                                           setShowHeaderButtons={showHeader}/>}/>
        </Switch>
    );
}

Index.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired
};