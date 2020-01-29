import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Comment from "./CommentNew";
import InteractiveList from "./ProductProperty";
import {a11yProps, TabPanel} from "../pages/SignInUp";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
    myTabs: {
        borderBottom: '1px solid #e8e8e8',
    },
    myTab: {
        width: 200,
    }
}));

export default function ProductTabs() {
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
        // <Paper className={classes.paper}>
            <div className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    // textColor="primary"
                    // variant="fullWidth"
                    aria-label="full width tabs example"
                    className={classes.myTabs}
                >
                    <Tab label="نظرات کاربران" className={classes.myTab} {...a11yProps(0)} />
                    <Tab label="مشخصات محصول" className={classes.myTab} {...a11yProps(1)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Comment/>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <InteractiveList/>
                    </TabPanel>
                </SwipeableViews>
            </div>
        // </Paper>
    );
}
