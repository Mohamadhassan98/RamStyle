import React from 'react';
import {assets} from "../values/assets";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const container = {
            width: "100%",
            // height:"200px",
            //backgroundColor:"red",
            display: "flex",
            flexDirection: "row",
            padding: ".4%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            position: "relative",

        };
        const imgContainer = {
            width: "25%",
            //backgroundColor:"blue",
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            overflow: "hidden",

        };
        const img = {
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            border: "2px solid #414141",


        };
        const info = {
            width: "70%",
            height: "100%",
            // backgroundColor:"red",
            display: "flex",
            flexDirection: "row",
            padding: ".4%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            position: "relative",


        };
        const explanationBox = {
            width: "46%",
            height: "100%",
            // backgroundColor:"blue",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "2%",
            paddingRight: "2%",
            justifyContent: "center",
            alignItems: "center",


        };
        const chartsBox = {
            width: "48%",
            height: "100%",
            // backgroundColor:"blue",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "2%",
            paddingRight: "2%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
        };
        const chartContainer = {
            width: "100%",
            margin: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

        };
        const chart = {
            height: "25px",
            display: "flex",
        };

        const color1 = {
            backgroundColor: "#5cff67"
        };
        const color2 = {
            backgroundColor: "#2da3ff"
        };
        const color3 = {
            backgroundColor: "#ff434d"
        };
        const percent50 = {
            width: "40%",
        };
        const percent60 = {
            width: "48%",
        };
        const percent70 = {
            width: "56%",
        };
        const percent80 = {
            width: "64%",
        };
        const percent90 = {
            width: "72%",
        };
        const percent100 = {
            width: "80%",
        };
        const line = {
            width: "3px",
            height: "300px",
            backgroundColor: "black",
        };
        const btl = {
            position: "absolute",
            width: "12%",
            height: "3px",
            top: "0",
            left: "0",
            backgroundColor: "black",

        };
        const btr = {
            position: "absolute",
            width: "12%",
            height: "3px",
            top: "0",
            right: "0",
            backgroundColor: "black",

        };
        const bbl = {
            position: "absolute",
            width: "12%",
            height: "3px",
            bottom: "0",
            left: "0",
            backgroundColor: "black",
        };
        const bbr = {
            position: "absolute",
            width: "12%",
            height: "3px",
            bottom: "0",
            right: "0",
            backgroundColor: "black",
        };
        const bl = {
            position: "absolute",
            left: "0",
            height: "100%",
            width: "3px",
            backgroundColor: "black",
        };
        const br = {
            position: "absolute",
            right: "0",
            height: "100%",
            width: "3px",
            backgroundColor: "black",

        };

        return (
            <div style={container}>
                <div style={imgContainer}>
                    <img src={assets.image1} style={img}/>
                </div>
                <div style={info}>
                    <div style={bl}></div>
                    <div style={br}></div>
                    <div style={btl}></div>
                    <div style={btr}></div>
                    <div style={bbl}></div>
                    <div style={bbr}></div>
                    <div style={explanationBox}>
                        <p style={{fontSize: "20px", wordBreak: "normal"}}>
                            فلانی
                            <br/>
                            نقشش در پروژه
                            <br/>
                            و.....
                        </p>
                    </div>
                    <div style={line}></div>
                    <div style={chartsBox}>
                        <div style={chartContainer}>
                            <p style={{
                                fontSize: "20px",
                                wordBreak: "normal",
                                width: "20%",
                                overflow: "hidden"
                            }}>مشارکت</p>
                            <div style={{...chart, ...color1, ...percent100}}></div>
                        </div>

                        <div style={chartContainer}>
                            <p style={{
                                fontSize: "20px",
                                wordBreak: "normal",
                                width: "20%",
                                overflow: "hidden"
                            }}>یادگیری</p>
                            <div style={{...chart, ...color2, ...percent70}}></div>
                        </div>

                        <div style={chartContainer}>
                            <p style={{fontSize: "20px", wordBreak: "normal", width: "20%", overflow: "hidden"}}>علاقه
                                مندی</p>
                            <div style={{...chart, ...color3, ...percent60}}></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}

export default AboutUs;