import React from "react";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import {strings} from "../values/strings";
import {baseUrls, profileUrls} from "../values/urls";
import Typography from "@material-ui/core/Typography";
import {Container, Link, makeStyles, Paper} from "@material-ui/core";
import PropTypes from 'prop-types';
import axios from 'axios';
import {serverUrls} from "../values/serverurls";

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

export default function ProfileHeader(props) {

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);
    const items = [strings.profile, strings.changePassword, strings.mySales];

    const classes = useStyles();

    const currentItems = () => {
        switch (props.history.location.pathname) {
            case `${baseUrls.profile}${profileUrls.changePassword}`:
                return [items[0], items[2]];
            case baseUrls.profile:
                return [items[1], items[2]];
            case `${baseUrls.profile}${profileUrls.mySales}`:
                return [items[0], items[1]];
        }
    };

    const onItemClicked = (itemIndex) => {
        switch (currentItems()[itemIndex]) {
            case items[0]:
                props.history.push(baseUrls.profile);
                break;
            case items[1]:
                props.history.push(`${baseUrls.profile}${profileUrls.changePassword}`);
                break;
            case items[2]:
                props.history.push(`${baseUrls.profile}${profileUrls.mySales}`);
                break;
        }
    };

    const onLogOutClicked = () => {
        axios.post(serverUrls.logOut).then(response => {
            props.setLoggedIn(false);
            props.history.push(baseUrls.home);
        }).catch(error => {
            //TODO Show appropriate error
            window.alert('TODO: Show appropriate error');
        });
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
                        <Typography className={classes.typography} onClick={onLogOutClicked}>
                            {strings.logout}
                        </Typography>
                    </FlexBoxItem>
                </FlexBoxContainer>
            </Paper>
        </Container>
    );
}

ProfileHeader.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    setLoggedIn: PropTypes.func.isRequired
};