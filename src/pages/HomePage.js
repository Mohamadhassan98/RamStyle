import React from "react";
import AutoRotatingCarousel from "../components/CarouselAutoRotate";
import item1 from "../assets/carousel-item-1.jpg";
import Brands from "../components/Brands";
import PropTypes from 'prop-types';
import WeAreGood from "../components/WeAreGood";
import OurApplication from "../components/OurApplication";
import Footer from "../components/Footer";

export default function HomePage(props) {

    props.setShowHeaderButtons(true);
    return (
        <React.Fragment>
            <AutoRotatingCarousel open hideArrows={false}>
                <img src={item1} style={{
                    width: '100%',
                    maxHeight: '100%'
                }}/>
                <img src={item1} style={{
                    width: '100%',
                    maxHeight: '100%'
                }}/>
            </AutoRotatingCarousel>
            <Brands/>
            <WeAreGood/>
            <OurApplication/>
            <Footer/>
        </React.Fragment>
    );

}

HomePage.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired
};