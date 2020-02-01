import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {strings} from "../values/strings";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export default function InteractiveList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        {strings.productDetails}
                    </Typography>
                    <div className={classes.demo}>
                        <Typography variant='h6'>
                            {props.product && props.product.description}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

InteractiveList.propTypes = {
    product: PropTypes.object.isRequired
};