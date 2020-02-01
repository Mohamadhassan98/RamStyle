import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Comment from "./CommentNew";
import InteractiveList from "./ProductProperty";
import {a11yProps, TabPanel} from "../pages/SignInUp";
import PropTypes from 'prop-types';
import {strings} from "../values/strings";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
    myTabs: {
        borderBottom: '1px solid #e8e8e8',
    },
    myTab: {
        width: 200,
    }
}));

export default function ProductTabs(props) {
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
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                aria-label="full width tabs example"
                className={classes.myTabs}
            >
                <Tab label={strings.productDetails} className={classes.myTab} {...a11yProps(0)} />
                <Tab label={strings.comments} className={classes.myTab} {...a11yProps(1)} />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <InteractiveList product={props.product}/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Comment setError500={props.setError500} isLoggedIn={props.isLoggedIn} product={props.product}
                             comments={props.comments}/>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

ProductTabs.propTypes = {
    product: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    setError500: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};