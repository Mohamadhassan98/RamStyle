import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import {Container} from "@material-ui/core";
import {Redirect} from 'react-router-dom';
import {baseUrls} from "../values/urls";
import {strings} from "../values/strings";

 export function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        width: 550,
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
    tabs: {

        color: theme.palette.text.primary
    }
}));

export default function SignInUp(props) {

    props.setShowHeaderButtons(false);
    props.setShowFooter(false);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <Container className={classes.root}>
            {props.isLoggedIn && <Redirect to={baseUrls.profile}/>}
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <div>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label={strings.signIn} {...a11yProps(0)}/>
                                    <Tab label={strings.signUp} {...a11yProps(1)}/>
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <Signin {...props}/>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <Signup {...props}/>
                                </TabPanel>
                            </SwipeableViews>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

SignInUp.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};
