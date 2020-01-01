import React from "react";
import AutoRotatingCarousel from "../components/CarouselAutoRotate";
import Brands from "../components/Brands";
import PropTypes from 'prop-types';
import WeAreGood from "../components/WeAreGood";
import OurApplication from "../components/OurApplication";
import {assets} from "../values/assets";

export default function HomePage(props) {

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);
    return (
        <React.Fragment>
            <AutoRotatingCarousel open hideArrows={false}>
                <img src={assets.carouselItem1} style={{
                    width: '100%',
                    maxHeight: '100%'
                }}/>
                <img src={assets.carouselItem1} style={{
                    width: '100%',
                    maxHeight: '100%'
                }}/>
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