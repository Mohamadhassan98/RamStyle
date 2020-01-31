import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import {baseUrls} from "./values/urls";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 100
    },
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 20,
        color: "green"
    },
    pos: {
        marginBottom: 20,
    },
}));

export default function BankSuccessful(props) {
    const classes = useStyles();

    const homePageClicked = () => {
        props.history.push({
            pathname: baseUrls.trackingCode,
            state: {
                code: props.location.state.code
            }
        });
    };

    return (
        <Container maxWidth="md" className={classes.container}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        اطلاعات رسید
                    </Typography>
                    <Typography variant="body2" component="p">
                        کاربر گرامی برداشت از کارت شما با موفقیت انجام شد
                        <br/>
                        جهت تکمیل فرایند خرید و انتقال به صفحه اصلی روی دکمه زیر کلید کنید
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" size="small" onClick={homePageClicked}>
                        تکمیل خرید و انتقال به صفحه اصلی
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}