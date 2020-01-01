import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container} from "@material-ui/core";

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

function createData(shop_status, cost, date_order, order_id, row_num) {
    return {shop_status, cost, date_order, order_id, row_num};
}

const rows = [
    createData('لغو شده', 159, 'دیروز', 'rsc-24', 1),
    createData('لغو شده', 237, 'امروز', 'rsc-29', 2),
    createData('لغو شده', 262, 'دیروز', 'rsc-99', 3)
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function MySales() {
    const classes = useStyles();

    return (
        <Container maxWidth='md'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell>شماره سفارش</StyledTableCell>
                            <StyledTableCell>تاریخ ثبت سفارش</StyledTableCell>
                            <StyledTableCell>مبلغ</StyledTableCell>
                            <StyledTableCell>وضعیت خرید</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <StyledTableRow key={row.shop_status}>
                                <StyledTableCell>{row.row_num}</StyledTableCell>
                                <StyledTableCell>{row.order_id}</StyledTableCell>
                                <StyledTableCell>{row.date_order}</StyledTableCell>
                                <StyledTableCell>{row.cost}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.shop_status}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
