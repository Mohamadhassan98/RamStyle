import React from "react";
import {Route, Switch} from "react-router-dom";
import {profileUrls} from "../../values/urls";
import ProfileHeader from "../../components/ProfileHeader";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import PropTypes from 'prop-types';
import {Container} from "@material-ui/core";
import MySales from "./MySales";

export default function Index(props) {

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);
    const matchUrl = props.match.url;
    return (
        <Container>
            <ProfileHeader {...props}/>
            <Switch>
                <Route exact path={`${matchUrl}`} render={(props) => <Profile {...props}/>}/>
                <Route path={`${matchUrl}${profileUrls.changePassword}`}
                       render={(props) => <ChangePassword {...props}/>}/>
                <Route path={`${matchUrl}${profileUrls.mySales}`} render={(props) => <MySales {...props}/>}/>
            </Switch>
        </Container>
    );
}

Index.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired
};