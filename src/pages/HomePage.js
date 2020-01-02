import React from "react";
import AutoRotatingCarousel from "../components/CarouselAutoRotate";
import Brands from "../components/Brands";
import PropTypes from 'prop-types';
import WeAreGood from "../components/WeAreGood";
import OurApplication from "../components/OurApplication";
import {assets} from "../values/assets";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    img: {
        width: '100%',
        maxHeight: '100%'
    }
}));

export default function HomePage(props) {

    const classes = useStyle();

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);
    return (
        <React.Fragment>
            <AutoRotatingCarousel open hideArrows={false}>
                <img src={assets.carouselItem1} className={classes.img}/>
                <img src={assets.carouselItem1} className={classes.img}/>
            </AutoRotatingCarousel>
            <Brands/>
            <WeAreGood/>
            <OurApplication/>
        </React.Fragment>
    );
}

HomePage.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired
};