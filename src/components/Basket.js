import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {assets} from "../values/assets";
import {makeStyles} from "@material-ui/core";
import {Add, Delete, Remove, Store} from "@material-ui/icons";
import {strings, toPersianNumbers} from "../values/strings";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import {baseUrls, pageTitles} from "../values/urls";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

// noinspection JSUnusedLocalSymbols,JSCheckFunctionSignatures

const useStyles = makeStyles(theme => ({
    style_container2: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        width: "96%",
        margin: "1%",
        borderBottom: "1px solid #c7c7c7",
        padding: "1%",
        alignItems: "stretch"
    },
    img_container: {
        width: "20%",
        cursor: "pointer"
    },
    img: {
        width: "100%"
    },
    container2: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
    },
    part: {
        flexGrow: "1",
        paddingLeft: "5%",
    },
    container3: {
        justifyContent: 'space-between',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    },
    part2: {
        flexGrow: "0.5",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        alignItems: "center",
    },
    part3: {
        alignItems: "flex-end",
        marginLeft: "5%",
        paddingLeft: "5%",
        position: "relative",
        width: "100%",
    },
    price_style: {
        display: "flex",
        width: "60%",
    },
    number: {
        width: "50%",
        height: "40px",
        position: "relative",
        borderRadius: "5px",
        border: "1px solid gray",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icons: {
        cursor: "pointer",
    },
    /***************************************************************************************/
    style_item1: {
        display: "flex",
        alignSelf: "flex-start",
        flexDirection: "column",
        width: "55%",
        backgroundColor: "white",
        position: "relative",
        margin: "3%",
        border: "1px solid gray",
    },
    style_item2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        backgroundColor: "white",
        position: "relative",
        margin: "3%",
        borderRadius: "5px",
        border: "1px solid gray",
        padding: "1%",
    },
    style_sum: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        backgroundColor: "white",
        position: "relative",
        margin: "3%",
        borderBottom: "1px solid #c7c7c7",
        padding: "5px",
    },
    sum_price_style: {
        display: "flex",
        width: "60%",
        justifyContent: 'flex-end'
    },
    s_style: {
        display: "flex",
        width: "40%",
    },
    tooman_style: {
        display: "flex",
        marginLeft: "5px",
    },
    style_button: {},
    Delete: {
        display: "none"
    },
    style1: {
        position: "relative",
        width: "20%",
        textAlign: "center"
    },
    style2: {
        position: "relative",
        width: "60%",
        textAlign: "center"
    },
    style3: {
        position: "relative",
        width: "20%",
        textAlign: "center",
        cursor: "pointer"
    }
}));

export default function Basket(props) {
    props.setShowHeaderButtons(true);
    props.setShowFooter(true);

    const classes = useStyles();

    const array = [
        {
            id: 1,
            name: 'پیراهن راه راه',
            Seller: 'گل سرخ',
            Warranty: 'گارانتی دارد',
            num: 1,
            price: 60000,
            img: assets.image1
        },
        {
            id: 2,
            name: 'پیراهن راه راه',
            Seller: 'گل سرخ',
            Warranty: 'گارانتی دارد',
            num: 1,
            price: 60000,
            img: assets.image1
        },
        {
            id: 3,
            name: 'پیراهن راه راه',
            Seller: 'گل سرخ',
            Warranty: 'گارانتی دارد',
            num: 1,
            price: 60000,
            img: assets.image1
        },
    ];

    const [data, setData] = React.useState(array);
    const [sum, setSum] = React.useState(0);
    const [num, setNum] = React.useState(0);

    const plus = (i) => {
        const array = data;
        const temp = array[i];
        array[i].num++;
        setNum(prevState => prevState + 1);
        setSum(prevState => prevState + temp.price);
        setData(array);
    };

    const minus = (i) => {
        const array = data;
        const temp = array[i];
        array[i].num--;
        setNum(prevState => prevState - 1);
        setSum(prevState => prevState - temp.price);
        setData(array);
    };

    React.useEffect(() => {
        const sum = data.map(value => value.price * value.num).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const num = data.map(value => value.num).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        setSum(sum);
        setNum(num);
    }, []);

    React.useEffect(() => {
        document.title = pageTitles.basket;
    }, []);

    /**************************************************************************************************/
    return (
        <FlexBoxContainer className={classes.style_container} alignItems='flex-start'>
            {!props.isLoggedIn && <Redirect to={baseUrls.auth}/>}

            <div className={classes.style_item1}>
                {
                    data.map((item, index) =>
                        <div className={item.num >= 1 ? classes.style_container2 : classes.Delete}>
                            <div className={classes.img_container}>
                                <img src={item.img} className={classes.img}/>
                            </div>
                            <div className={classes.container2}>
                                <div className={classes.part}>
                                    <Typography variant="h5" gutterBottom>
                                        {item.name}
                                    </Typography>
                                </div>
                                <div className={classes.part}>
                                    <FlexBoxContainer alignItems='center'>
                                        <FlexBoxItem flexBasis={null}>
                                            <Store/>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <Typography variant="subtitle2" gutterBottom>
                                                {item.Seller}
                                            </Typography>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </div>
                                <div className={classes.part}>
                                    <FlexBoxContainer alignItems='center'>
                                        <FlexBoxItem flexBasis={null}>
                                            {/* TODO Icon changed, find replace material one */}
                                            <Add/>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <Typography variant="subtitle2" gutterBottom>
                                                {item.Warranty}
                                            </Typography>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </div>
                                <div className={classes.container3}>
                                    <div className={classes.part2}>
                                        <div className={classes.part3}>
                                            <div className={classes.number}>
                                                {/*<div className={classes.style3}>*/}
                                                {item.num !== 1 ?
                                                    <Remove className={classes.icons} onClick={() => minus(index)}/>
                                                    :
                                                    <Delete className={classes.icons} onClick={() => minus(index)}/>}
                                                {/*</div>*/}
                                                {/*<div className={classes.style2}>*/}
                                                {toPersianNumbers(item.num)}
                                                {/*</div>*/}
                                                {/*<div className={classes.style1}>*/}
                                                <Add className={classes.icons} onClick={() => plus(index)}/>
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className={classes.part2}>*/}
                                    {/*<div className={classes.part3}>*/}
                                    <FlexBoxContainer justifyContent='flex-end'>
                                        <FlexBoxItem flexBasis={null} flexGrow={1}>
                                            <div className={classes.price_style}>
                                                {toPersianNumbers(item.price)}
                                                <div className={classes.tooman_style}>
                                                    {strings.rial}
                                                </div>
                                            </div>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                    {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <div className={classes.style_item2}>
                <div className={classes.style_sum}>
                    <div className={classes.s_style}>
                        {strings.productCount}
                    </div>
                    <div className={classes.sum_price_style}>
                        {toPersianNumbers(num)}
                    </div>
                </div>
                <div className={classes.style_sum}>
                    <div className={classes.s_style}>
                        {strings.totalPrice}
                    </div>
                    <div className={classes.sum_price_style}>
                        {toPersianNumbers(sum)}
                        <div className={classes.tooman_style}>
                            {strings.rial}
                        </div>
                    </div>
                </div>
                <div className={classes.style_sum}>
                    <div className={classes.s_style}>
                        {strings.priceToPay}
                    </div>
                    <div className={classes.sum_price_style}>
                        {toPersianNumbers(sum)}
                        <div className={classes.tooman_style}>
                            {strings.rial}
                        </div>
                    </div>
                </div>
                <div className={classes.style_button}>
                    <Button variant="contained" color="secondary">
                        {strings.continuePurchaseProcedure}
                    </Button>
                </div>
            </div>
        </FlexBoxContainer>
    );
}

Basket.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};