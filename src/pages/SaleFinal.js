import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from "@material-ui/core/Container";
import {assets} from "../values/assets";

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, کد, زمان, نحوه, هزینه) {
    return {name, کد, زمان, نحوه, هزینه};
}

const rows = [
    createData('', "RSC-123456", "بعد از ظهر", "پست پیشتاز", "رایگان"),
];

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 700,
    },
    paper: {
        padding: theme.spacing(1),
        marginTop: 10,
    },
    image: {
        width: 300,
        height: 300,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const style = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));


export default function Complex() {
    const classes = useStyles();
    style();



    return (
        <Container maxWidth='md'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {/*<StyledTableCell>*/}

                            {/*</StyledTableCell>*/}
                            <StyledTableCell align="center">کد پیگیری</StyledTableCell>
                            <StyledTableCell align="center">زمان تحویل</StyledTableCell>
                            <StyledTableCell align="center">نحوه ارسال سفارش</StyledTableCell>
                            <StyledTableCell align="center">هزینه ارسال</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <StyledTableRow key={row.name}>
                                {/*<StyledTableCell component="th" scope="row">*/}
                                {/*    {row.name}*/}
                                {/*</StyledTableCell>*/}
                                <StyledTableCell align="center">{row.کد}</StyledTableCell>
                                <StyledTableCell align="center">{row.زمان}</StyledTableCell>
                                <StyledTableCell align="center">{row.نحوه}</StyledTableCell>
                                <StyledTableCell align="center">{row.هزینه}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="1" src={assets.pic1}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="2" src={assets.pic2}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                            </Grid>
                            <Grid>
                                <Typography variant="body2" style={{cursor: 'pointer'}}>
                                    <h2> مبلغ قابل پرداخت</h2>
                                    <h2>520000 تومان</h2>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{cursor: 'pointer'}}>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}