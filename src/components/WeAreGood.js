import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import {assets} from "../values/assets";
import {strings} from "../values/strings";

const useStyles = makeStyles(theme => ({
    paper: {
        maxWidth: '100%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        wrap: 'nowrap',
        overflow: 'hidden',
        textAlign: 'center',
        boxShadow:"none",
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
                            {strings.originalTitle}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {strings.originalBody}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={assets.fast} alt="fast send"/>
                        <Typography variant="h5" gutterBottom>
                            {strings.freeAndFastSendTitle}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {strings.freeAndFastSendBody}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={assets.warranty} alt="warranty"/>
                        <Typography variant="h5" gutterBottom>
                            {strings.warrantyTitle}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {strings.warrantyBody}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}