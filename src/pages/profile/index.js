import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {baseUrls, profileUrls} from "../../values/urls";
import ProfileHeader from "../../components/ProfileHeader";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import PropTypes from 'prop-types';
import {Container} from "@material-ui/core";
import MySales from "./MySales";
import ErrorPage from "../../components/ErrorPage";
import {strings} from "../../values/strings";

export default function Index(props) {

    const {setError500} = props;

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);

    const matchUrl = props.match.url;
    const {isLoggedIn} = props;

    return (
        <Container>
            {!isLoggedIn && <Redirect to={baseUrls.auth}/>}
            <ProfileHeader {...props}/>
            <Switch>
                <Route exact path={`${matchUrl}`} render={(props) => <Profile setError500={setError500} {...props}/>}/>
                <Route path={`${matchUrl}${profileUrls.changePassword}`}
                       render={(props) => <ChangePassword setError500={setError500} {...props}/>}/>
                <Route path={`${matchUrl}${profileUrls.mySales}`}
                       render={(props) => <MySales {...props} setError500={setError500}/>}/>
                <Route
                    render={(props) => <ErrorPage {...props} title={strings.error404Title}
                                                  body={strings.error404Body}/>}/>
            </Switch>
        </Container>
    );
}

Index.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    setError500: PropTypes.func.isRequired
};