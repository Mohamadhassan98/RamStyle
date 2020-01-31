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
import axios from "axios";
import {serverUrls} from "../values/serverurls";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Redirect from "react-router/modules/Redirect";

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
        cursor: "pointer",
        margin: "2%"
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
    empty: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        // backgroundColor:"red",

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

    const [data, setData] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [totalCount, setTotalCount] = React.useState(0);
    const [maximumExceeded, setMaximumExceeded] = React.useState(false);

    React.useEffect(() => {
        if (props.allSellers) {
            const newData = props.lastBasket;
            for (let i = 0; i < newData.length; i++) {
                const data = newData[i];
                // noinspection EqualityComparisonWithCoercionJS
                const seller = props.allSellers.find(value => value.id == data.product.salesman);
                if (seller) {
                    data.seller = seller.name;
                }
            }
            setData(newData);
        }
    }, [props.allSellers, props.lastBasket]);

    React.useEffect(() => {
        const newData = props.lastBasket;
        setData(newData);
        const totalPrice = newData.map(value => value.product.Price * value.count).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const totalCount = newData.map(value => value.count).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        setTotalCount(totalCount);
        setTotalPrice(totalPrice);
        for (let i = 0; i < newData.length; i++) {
            const product = newData[i];
            const productId = product.product.id;
            axios.get(serverUrls.productImages(productId)).then(response => {
                if (!response.data || response.data.length === 0) {
                    return;
                }
                const newArray = [...newData];
                const image = response.data[0]['imageContent'];
                newArray[i] = {...product, image: image};
                product.image = response.data[0]['imageContent'];
                setData(newArray);
            }).catch(error => {
                if (error.response && error.response.status === 500) {
                    props.setError500(true);
                } else {
                    window.alert(`Error while retrieving images ${error}`);
                }
            });
        }
    }, [props.lastBasket]);

    const plus = (i) => {
        axios.put(serverUrls.basketProducts(data[i].id), {
            count: data[i].count + 1
        }).then(response => {
            const array = data;
            const temp = array[i];
            array[i].count++;
            setTotalCount(prevState => prevState + 1);
            setTotalPrice(prevState => prevState + (+temp.product.Price));
            setData(array);
        }).catch(error => {
            if (error.response) {
                if (error.response.status === 400) {
                    setMaximumExceeded(true);
                } else if (error.response.status === 500) {
                    props.setError500(true);
                } else {
                    window.alert(`Error while putting basket data ${error}`);
                }
            } else {
                window.alert(`Error while putting basket data ${error}`);
            }
        });
    };

    const minus = (i) => {
        if (data[i].count === 1) {
            axios.delete(serverUrls.basketProducts(data[i].id)).then(response => {
                const array = data;
                const temp = array[i];
                setTotalCount(prevState => prevState - 1);
                setTotalPrice(prevState => prevState - temp.product.Price);
                setData(temp.filter((value, index) => index !== i));
            }).catch(error => {
                if (error.response && error.response.status === 500) {
                    props.setError500(true);
                }
            });
        }
        axios.put(serverUrls.basketProducts(data[i].id), {
            count: data[i].count - 1
        }).then(response => {
            const array = data;
            const temp = array[i];
            array[i].count--;
            setTotalCount(prevState => prevState - 1);
            setTotalPrice(prevState => prevState - temp.product.Price);
            setData(array);
        }).catch(error => {
            if (error.response && error.response.status === 500) {
                props.setError500(true);
            }
        });
    };

    React.useEffect(() => {
        document.title = pageTitles.basket;
    }, []);

    /**************************************************************************************************/
    return (
        <div>
            <Dialog
                open={maximumExceeded}
                onClose={() => setMaximumExceeded(false)}
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{
                        color: 'red'
                    }}>
                        {strings.maximumCountExceeded}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            {!props.isLoggedIn && <Redirect to={{
                pathname: baseUrls.auth,
                state: {
                    referer: baseUrls.cart
                }
            }}/>}
            {data.length === 0 ?
                <div className={classes.empty}>
                    <img src={assets.empty} style={{width: "20%", marginTop: "10%"}}/>
                    <h1>{strings.emptyBasket}</h1>
                </div>
                :
                <FlexBoxContainer alignItems='flex-start'>
                    <div className={classes.style_item1}>
                        {
                            data.map((item, index) =>
                                <div className={item.count >= 1 ? classes.style_container2 : classes.Delete}
                                     key={item.id}>
                                    <div className={classes.img_container}>
                                        <img src={item.image ? item.image : assets.noImage} className={classes.img}/>
                                    </div>
                                    <div className={classes.container2}>
                                        <div className={classes.part}>
                                            <Typography variant="h5" gutterBottom>
                                                {item.product.name}
                                            </Typography>
                                        </div>
                                        <div className={classes.part}>
                                            <FlexBoxContainer alignItems='center'>
                                                <FlexBoxItem flexBasis={null}>
                                                    <Store/>
                                                </FlexBoxItem>
                                                <FlexBoxItem flexBasis={null}>
                                                    <Typography variant="subtitle2" gutterBottom>
                                                        {item.seller}
                                                    </Typography>
                                                </FlexBoxItem>
                                            </FlexBoxContainer>
                                        </div>
                                        <div className={classes.container3}>
                                            <div className={classes.part2}>
                                                <div className={classes.part3}>
                                                    <div className={classes.number}>
                                                        {item.count !== 1 ?
                                                            <Remove className={classes.icons}
                                                                    onClick={() => minus(index)}/>
                                                            :
                                                            <Delete className={classes.icons}
                                                                    onClick={() => minus(index)}/>
                                                        }
                                                        {toPersianNumbers(item.count)}
                                                        <Add className={classes.icons} onClick={() => plus(index)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <FlexBoxContainer justifyContent='flex-end'>
                                                <FlexBoxItem flexBasis={null} flexGrow={1}>
                                                    <div className={classes.price_style}>
                                                        {toPersianNumbers(item.product.Price)}
                                                        <div className={classes.tooman_style}>
                                                            {strings.rial}
                                                        </div>
                                                    </div>
                                                </FlexBoxItem>
                                            </FlexBoxContainer>
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
                                {toPersianNumbers(totalCount)}
                            </div>
                        </div>
                        <div className={classes.style_sum}>
                            <div className={classes.s_style}>
                                {strings.totalPrice}
                            </div>
                            <div className={classes.sum_price_style}>
                                {toPersianNumbers(totalPrice)}
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
                                {toPersianNumbers(totalPrice)}
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
            }
        </div>
    );
}

Basket.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    lastBasket: PropTypes.array.isRequired,
    setError500: PropTypes.func.isRequired,
    allSellers: PropTypes.array.isRequired
};