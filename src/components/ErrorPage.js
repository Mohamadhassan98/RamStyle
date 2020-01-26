import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 128,
        height: 128,
    },
}));

export default function ErrorPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className={classes.img} alt="complex" src={props.image}/>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item>
                                <Typography gutterBottom variant="h5">
                                    {props.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {props.body}
                                </Typography>
                            </Grid>
                            <Grid item style={{display: "flex", alignItems: "center"}}>
                                <ArrowRightAltIcon fontSize="small"/>
                                <Typography variant="subtitle2" style={{cursor: 'pointer'}}>
                                    بازگشت به صفحه اصلی
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

ErrorPage.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};
