import React from 'react';
import Typography from '@material-ui/core/Typography';
import {assets} from "../values/assets";
import {pageTitles} from "../values/urls";

export default function AboutProject(props) {

    React.useEffect(() => {
        document.title = pageTitles.aboutProject;
    }, []);

    const CONTAINER = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1%",

    };
    const container = {
        width: "90%",
        // height:"200px",
        //     backgroundColor:"#c7c7c7",
        display: "flex",
        flexDirection: "row",
        padding: ".4%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        position: "relative",
        marginBottom: "5%",
        marginTop: "5%",

    };
    const imgContainer = {
        width: "25%",
        display: "flex",
        flexDirection: "column",
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
        marginBottom: "5%",


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
        cursor: "pointer"
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
        <div style={CONTAINER}>
            <Typography variant="h4" gutterBottom>درباره ی پروژه</Typography>
            <div style={container}>
                <div style={imgContainer}>
                    <img src={assets.image1} style={img}/>
                </div>
                <div style={info}>
                    <div style={bl}/>
                    <div style={br}/>
                    <div style={btl}/>
                    <div style={btr}/>
                    <div style={bbl}/>
                    <div style={bbr}/>
                    <div style={explanationBox}>
                        <p style={{fontSize: "20px", wordBreak: "normal"}}>
                            درباره ی پروژه
                            <br/>
                            ....
                            <br/>
                            ....
                            <br/>
                            .....
                            <br/>
                            ....
                            <br/>
                            ....
                            <br/>
                            .....
                            <br/>
                            ....
                            <br/>
                            ....
                            <br/>
                            .....

                        </p>
                    </div>


                </div>
            </div>
            <Typography variant="h4" gutterBottom>اعضای گروه </Typography>
            <div style={container}>
                <div style={imgContainer}>
                    <img src={assets.image1} style={{...img, cursor: "pointer"}}/>
                    <Typography variant="h6" gutterBottom>محمد حسن ابراهیمی</Typography>
                </div>

                <div style={imgContainer}>
                    <img src={assets.image1} style={{...img, cursor: "pointer"}}/>
                    <Typography variant="h6" gutterBottom>زهرا قائدی</Typography>
                </div>

                <div style={imgContainer}>
                    <img src={assets.image1} style={{...img, cursor: "pointer"}}/>
                    <Typography variant="h6" gutterBottom>زهرا کمالی</Typography>
                </div>

                <div style={imgContainer}>
                    <img src={assets.image1} style={{...img, cursor: "pointer"}}/>
                    <Typography variant="h6" gutterBottom>فائزه مرادی</Typography>
                </div>

                <div style={imgContainer}>
                    <img src={assets.image1} style={{...img, cursor: "pointer"}}/>
                    <Typography variant="h6" gutterBottom>فائزه آقابزرگی</Typography>
                </div>

                <div style={imgContainer}>
                    <img src={assets.image1} style={{...img, cursor: "pointer"}}/>
                    <Typography variant="h6" gutterBottom>صبا عرب زادگان</Typography>
                </div>
            </div>
        </div>

    );
}