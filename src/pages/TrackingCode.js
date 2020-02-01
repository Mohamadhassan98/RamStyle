import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {strings} from "../values/strings";

const useStyles = makeStyles({
    card: {
        minWidth: 275,

        width: '345px',
        height: '200px',
        marginLeft: '125px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function TrackingCode(props) {
    const trackingCode = props.location.state.code;
    const classes = useStyles();
    return (
        <Container maxWidth="sm" style={{marginTop: '200px'}}>
            <Card className={classes.card}>
                <CardContent style={{marginRight: '100px'}}>
                    <Typography variant="h5" component="h2">
                        {strings.trackingCode}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {trackingCode}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
