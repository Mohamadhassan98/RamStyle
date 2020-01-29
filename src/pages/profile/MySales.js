import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container} from "@material-ui/core";
import axios from 'axios';
import {serverUrls} from "../../values/serverurls";
import PropTypes from 'prop-types';
import {strings} from "../../values/strings";

const TableCellStyle = makeStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}));

const TableRowStyle = makeStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}));

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function MySales(props) {

    const classes = useStyles();
    const tableCellStyle = TableCellStyle();
    const tableRowStyle = TableRowStyle();

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get(serverUrls.completedBaskets).then(response => {
            setData(response.data);
        }).catch(error => {
            if (error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Error while getting completed baskets ${error.response.status}`);
            }
        });
    }, []);

    return (
        <Container maxWidth='md'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell classes={tableCellStyle} align='center'>{strings.number}</TableCell>
                            <TableCell classes={tableCellStyle} align='center'>{strings.trackingCode}</TableCell>
                            <TableCell classes={tableCellStyle} align='center'>{strings.basketRecordTime}</TableCell>
                            <TableCell classes={tableCellStyle} align='center'>{strings.basketPrice}</TableCell>
                            <TableCell classes={tableCellStyle} align='center'>{strings.basketStatus}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.length !== 0 ? data.map((row, index) => (
                                <TableRow classes={tableRowStyle} key={index}>
                                    <TableCell classes={tableCellStyle} align='center'>{index}</TableCell>
                                    <TableCell classes={tableCellStyle} align='center'>{row.trackingCode}</TableCell>
                                    <TableCell classes={tableCellStyle} align='center'>{row.recordTime}</TableCell>
                                    <TableCell classes={tableCellStyle} align='center'>{row.price}</TableCell>
                                    <TableCell classes={tableCellStyle} align='center' component="th"
                                               scope="row">{row.product_status_summary}</TableCell>
                                </TableRow>
                            )) :
                            <TableRow classes={tableRowStyle} align='center'>
                                <TableCell classes={tableCellStyle} align='center' colSpan={5}>
                                    {strings.noSalesFound}
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

MySales.propTypes = {
    setError500: PropTypes.func.isRequired
};