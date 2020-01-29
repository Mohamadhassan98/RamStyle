import React from 'react';
import styled, {keyframes} from 'styled-components';
import {makeStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import {assets} from "../values/assets";

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "row",
        padding: ".4%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        position: "relative",
    },
    img: {
        width: "300px",
        height: "300px",
        position: "relative",
        alignSelf: "flex-end",
    }
}));

export default function ErrorPage(props) {

    const classes = useStyles();

    const anim1 = keyframes`
    0% {
        top: 300px;
        font-size: 15px
    }
    100% {
        top: 110px; 
        font-size: 40px
    }`;

    const anim2 = keyframes`
    0% {
        opacity: 0.01;
    }
    100% {
        opacity: 1;
    }`;

    const Error = styled.div`
    p {
        text-align: center;
        font-weight: bold;
    }
    position: absolute;
    align-self: center;
    font-size: 40px;
    animation: ${anim1};
    animation-duration: 1s;
    top: 110px;`;

    const Message = styled.div`
    p {
        text-align: center;
        font-weight: bold;
    }
    position: absolute;
    align-self: center;
    font-size: 40px;
    animation: ${anim2};
    animation-duration: 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    top: 470px;
    opacity: 0;`;

    return (
        <div className={classes.container}>
            <img className={classes.img} src={assets.errorBox}/>
            <Error>
                <p>
                    {props.errorTitle}
                </p>
            </Error>
            <Message>
                <p>
                    {props.errorBody}
                </p>
            </Message>
        </div>
    );
}

ErrorPage.propTypes = {
    errorTitle: PropTypes.string.isRequired,
    errorBody: PropTypes.string.isRequired
};