import React from "react";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import {strings} from "../values/strings";
import {urls} from "../values/urls";
import Typography from "@material-ui/core/Typography";
import {Container, Link, makeStyles, Paper} from "@material-ui/core";
import {Route} from "react-router-dom";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import MySales from "./MySales";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1)
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    typography: {
        cursor: 'pointer'
    },
    flexItem: {
        marginLeft: 5
    }
}));

export default function ProfilePage(props) {

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);
    const items = [strings.profile, strings.changePassword, strings.mySales];

    const classes = useStyles();

    const currentItems = () => {
        switch (props.history.location.pathname) {
            case urls.changePassword:
                return [items[0], items[2]];
            case urls.profile:
                return [items[1], items[2]];
            case urls.mySales:
                return [items[0], items[1]];
        }
    };

    const onItemClicked = (itemIndex) => {
        switch (currentItems()[itemIndex]) {
            case items[0]:
                props.history.push(urls.profile);
                break;
            case items[1]:
                props.history.push(urls.changePassword);
                break;
            case items[2]:
                props.history.push(urls.mySales);
                break;
        }
    };

    return (
        <Container>
            <Paper className={classes.paper}>
                <FlexBoxContainer alignItems='center' justifyContent='space-between'>
                    <FlexBoxItem>
                        <FlexBoxContainer alignItems='center'>
                            <FlexBoxItem flexBasis={null} className={classes.root}>
                                <Typography className={classes.typography}>
                                    <Link onClick={() => onItemClicked(0)}>
                                        {currentItems()[0]}
                                    </Link>
                                </Typography>
                            </FlexBoxItem>
                            <FlexBoxItem flexBasis={null} className={classes.root}>
                                <Typography>|</Typography>
                            </FlexBoxItem>
                            <FlexBoxItem flexBasis={null} className={classes.root}>
                                <Typography className={classes.typography}>
                                    <Link onClick={() => onItemClicked(1)}>
                                        {currentItems()[1]}
                                    </Link>
                                </Typography>
                            </FlexBoxItem>
                        </FlexBoxContainer>
                    </FlexBoxItem>
                    <FlexBoxItem flexBasis={null} justifySelf='flex-end' className={classes.flexItem}>
                        <Typography className={classes.typography}>
                            {strings.logout}
                        </Typography>
                    </FlexBoxItem>
                </FlexBoxContainer>
            </Paper>
            <Route exact path={urls.profile} render={() => <Profile {...props}/>}/>
            <Route path={urls.changePassword} render={() => <ChangePassword {...props}/>}/>
            <Route path={urls.mySales} render={() => <MySales {...props}/>}/>
        </Container>
    );
}

ProfilePage.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired
};