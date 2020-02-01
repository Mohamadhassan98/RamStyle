import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProductTabs from "../components/ProductTabs";
import TransitionsModal from "../components/modal";
import axios from 'axios';
import {serverUrls} from '../values/serverurls';
import {Container} from "@material-ui/core";
import {baseUrls, pageTitles} from "../values/urls";
import {assets} from "../values/assets";
import Slider from 'react-slick';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import {strings, toPersianNumbers} from "../values/strings";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1500,
    },
    image: {
        width: 400,
        height: 400,
    },
    smallImage: {
        width: 100,
        height: 100,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function ProductDetails(props) {

    const [images, setImages] = React.useState([]);
    const [imModal, setImModal] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [mainImage, setMainImage] = React.useState(assets.noImage);
    const classes = useStyles();
    const [comments, setComments] = React.useState([]);
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        axios.get(serverUrls.productDetails(props.match.params.id)).then(response => {
            // noinspection EqualityComparisonWithCoercionJS
            const seller = props.allSellers.find(value => value.id == response.data.salesman);
            if (seller) {
                response.data.seller = seller.name;
            }
            setProduct(response.data);
        }).catch(error => {
            if (error.response && error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Error while fetching product data ${error}`);
            }
        });
        axios.get(serverUrls.productImages(props.match.id)).then(response => {
            setImages(response.data);
            if (response.data && response.data.length !== 0) {
                setMainImage(response.data[0].imageContent);
            }
        }).catch(error => {
            if (error.response && error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Error while fetching product images ${error}`);
            }
        });
        axios.get(serverUrls.productComments(props.match.params.id)).then(response => {
            setComments(response.data);
        }).catch(error => {
            if (error.response && error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Error while fetching product comments ${error}`);
            }
        });
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (image) => {
        setOpen(true);
        setImModal(image);
    };

    const handleShowBig = (image) => {
        setMainImage(image);
    };

    React.useEffect(() => {
        document.title = pageTitles.productDetail;
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        afterChange: (index => {
        })
    };

    const addToBasket = () => {
        if (!props.isLoggedIn) {
            props.history.push({
                pathname: baseUrls.auth,
                state: {
                    referer: `${props.match}/${props.match.params.id}`
                }
            });
        } else {
            axios.post(serverUrls.basketProducts(), {
                product: props.match.params.id,
                count: 1
            }).then(response => {
                props.history.push(baseUrls.home);
            }).catch(error => {
                if (error.response && error.response.status === 500) {
                    props.setError500(true);
                } else {
                    window.alert(`Error while adding to basket ${error}`);
                }
            });
        }
    };

    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image} onClick={() => handleOpen(assets.image1)}>
                            <img className={classes.img} alt="complex" src={mainImage}/>
                        </ButtonBase>
                        <TransitionsModal open={open} handleClose={handleClose} image={imModal}/>
                        <Slider {...settings} style={{maxWidth: 400}}>
                            {images.map(image =>
                                <Grid item xs key={image.id}>
                                    <ButtonBase onClick={() => handleShowBig(image.imageContent)}>
                                        <img className={classes.smallImage} alt="complex" src={image.imageContent}/>
                                    </ButtonBase>
                                </Grid>
                            )}
                        </Slider>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body2" gutterBottom>
                                    {product && product.name}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                    {strings.seller}: {product && product.seller}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {strings.price}: {product && toPersianNumbers(product.Price)}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {strings.isStock}: {product && product.isStock ? strings.yes : strings.no}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {strings.inventory}: {product && toPersianNumbers(product.count)}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={addToBasket}>
                                    {strings.addToCart}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <ProductTabs comments={comments} product={product} isLoggedIn={props.isLoggedIn}
                             setError500={props.setError500}/>
            </div>
        </Container>
    );
}

ProductDetails.propTypes = {
    setError500: PropTypes.func.isRequired,
    allSellers: PropTypes.array.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};