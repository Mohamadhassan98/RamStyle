import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
        maxWidth: '100%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        direction: "rtl",
        wrap: 'nowrap',
        overflow: 'hidden'
    },
    line: {

        backgroundColor: 'black',
        width: '100%',
        height: '.1px',
    }

}));

export default function MATN(props) {


    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    {props.Title}
                </Typography>
                <div className={classes.line}/>
                <Typography variant="body1" gutterBottom>
                    {props.body}
                </Typography>
            </Paper>
        </div>
    );
}