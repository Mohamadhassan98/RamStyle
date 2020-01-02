import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import {assets} from "../values/assets";

const useStyles = makeStyles(theme => ({
    paper: {
        maxWidth: '100%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        wrap: 'nowrap',
        overflow: 'hidden',
        textAlign: 'center',
    },
}));

//fixme disable elevation
//fixme extract strings
export default function WeAreGood() {

    const classes = useStyles();
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={assets.quality} alt="original product"/>
                        <Typography variant="h5" gutterBottom>
                            کالای اورجینال
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            ..............................
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={assets.fast} alt="fast send"/>
                        <Typography variant="h5" gutterBottom>
                            ارسال سریع و رایگان
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            ..............................
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={assets.warranty} alt="warranty"/>
                        <Typography variant="h5" gutterBottom>
                            ضمانت بازگشت کالا
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            ..............................
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}