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
import {pageTitles} from "../values/urls";
import {assets} from "../values/assets";
import Slider from 'react-slick';

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

export default function ProductDetail(props) {

    const [values, setValues] = React.useState(null);
    const [imModal, setImModal] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    React.useEffect(() => {
        // let {match: param} = props.match;
        axios.get(serverUrls.productDetail).then(response => {
            setValues({
                values: response.data
            });
        });
    });

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (image) => {
        setOpen(true);
        setImModal(image);
        console.log(image)
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

    return (
        <Container>
            <div className={classes.root}>
                {/*<Paper className={classes.paper}>*/}
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image} onClick={() => handleOpen(assets.image1)}>
                            <img className={classes.img} alt="complex" src={assets.image1}/>
                        </ButtonBase>
                        <TransitionsModal open={open} handleClose={handleClose} image={imModal}/>
                        <Slider {...settings} style={{maxWidth: 400}}>
                            {/*<Grid container spacing={3}>*/}
                            <Grid item xs>
                                <ButtonBase onClick={() => handleOpen(assets.image1)}>
                                    <img className={classes.smallImage} alt="complex" src={assets.image1}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs>
                                <ButtonBase onClick={() => handleOpen(assets.image1)}>
                                    <img className={classes.smallImage} alt="complex" src={assets.image1}/>
                                </ButtonBase> </Grid>
                            <Grid item xs>
                                <ButtonBase onClick={() => handleOpen(assets.image1)}>
                                    <img className={classes.smallImage} alt="complex" src={assets.image1}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs>
                                <ButtonBase onClick={() => handleOpen(assets.image1)}>
                                    <img className={classes.smallImage} alt="complex" src={assets.image1}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs>
                                <ButtonBase onClick={() => handleOpen(assets.image1)}>
                                    <img className={classes.smallImage} alt="complex" src={assets.image1}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs>
                                <ButtonBase onClick={() => handleOpen(assets.image1)}>
                                    <img className={classes.smallImage} alt="complex" src={assets.image1}/>
                                </ButtonBase>
                            </Grid>
                            {/*</Grid>*/}
                        </Slider>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            {/*<Grid item>*/}
                            {/*    <Typography variant="body2" style={{cursor: 'pointer'}}>*/}
                            {/*        Remove*/}
                            {/*    </Typography>*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/*</Paper>*/}
                <ProductTabs/>
            </div>
        </Container>
    );
}