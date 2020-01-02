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
        height: 500
        // maxHeight: '100%'
    }
}));

export default function HomePage(props) {

    const classes = useStyle();

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);
    return (
        <React.Fragment>
            <div style={{
                marginTop: 10
            }}>
                <AutoRotatingCarousel open hideArrows={false}>
                    {/*<img src={assets.carouselItem1} className={classes.img}/>*/}
                    <img src={assets.carouselItem2} className={classes.img}/>
                    {/*<img src={assets.carouselItem3} className={classes.img}/>*/}
                    <img src={assets.carouselItem4} className={classes.img}/>
                </AutoRotatingCarousel>
            </div>
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