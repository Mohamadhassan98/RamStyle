import React from "react";
import AutoRotatingCarousel from "../components/CarouselAutoRotate";
import BestSellers from "../components/BestSellers";
import PropTypes from 'prop-types';
import WeAreGood from "../components/WeAreGood";
import OurApplication from "../components/OurApplication";
import {assets} from "../values/assets";
import {Container, makeStyles} from "@material-ui/core";
import CategoryList from "../components/CategoryList";
import {pageTitles} from "../values/urls";

const useStyles = makeStyles(theme => ({
    img: {
        width: '100%',
        height: 500
    },
    container: {
        marginTop: 10,
        // maxWidth: theme.breakpoints.values.lg
    }
}));

export default function HomePage(props) {

    const classes = useStyles();

    React.useEffect(() => {
        document.title = pageTitles.home;
    }, []);

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);

    return (
        <React.Fragment>
            <Container className={classes.container} maxWidth='lg'>
                <AutoRotatingCarousel open hideArrows={false}>
                    <img src={assets.carouselItem2} className={classes.img}/>
                    <img src={assets.carouselItem4} className={classes.img}/>
                </AutoRotatingCarousel>
            </Container>
            <BestSellers setError500={props.setError500}/>
            <WeAreGood/>
            <CategoryList {...props}/>
            <OurApplication/>
        </React.Fragment>
    );
}

HomePage.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    productCategories: PropTypes.array.isRequired,
    setError500: PropTypes.func.isRequired
};