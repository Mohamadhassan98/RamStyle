import React from "react";
import AutoRotatingCarousel from "../components/CarouselAutoRotate";
import Brands from "../components/Brands";
import PropTypes from 'prop-types';
import WeAreGood from "../components/WeAreGood";
import OurApplication from "../components/OurApplication";
import {assets} from "../values/assets";
import {makeStyles} from "@material-ui/core";
import {strings} from "../values/strings";
import ProductList from "../components/ProductList";

const useStyle = makeStyles(theme => ({
    img: {
        width: '100%',
        height: 500
    },
    container: {
        marginTop: 10
    }
}));

export default function HomePage(props) {

    const classes = useStyle();

    React.useEffect(() => {
        document.title = strings.appName;
    }, []);

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);

    return (
        <React.Fragment>
            <div className={classes.container}>
                <AutoRotatingCarousel open hideArrows={false}>
                    <img src={assets.carouselItem2} className={classes.img}/>
                    <img src={assets.carouselItem4} className={classes.img}/>
                </AutoRotatingCarousel>
            </div>
            <Brands/>
            <WeAreGood/>
            <ProductList/>
            <OurApplication/>
        </React.Fragment>
    );
}

HomePage.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired
};