import React from 'react';
import Typography from '@material-ui/core/Typography';
import {assets} from "../values/assets";
import {pageTitles} from "../values/urls";
import {Container, makeStyles} from "@material-ui/core";
import {strings, toPersianNumbers, zwnj} from "../values/strings";

const useStyles = makeStyles(theme => ({
    CONTAINER: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1%",
    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        padding: ".4%",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        position: "relative",
        marginBottom: "2%",
        // marginTop: "5%",
    },
    imgContainer: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        overflow: "hidden",
    },
    teamImgContainer: {
        width: "25%",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        overflow: "hidden",
    },
    image: {
        height: '500px',
        width: '100%',
        filter: 'opacity(70%) blur(0.5px)',
        borderRadius: '10px',
        border: "2px solid #414141",
    },
    teamImage: {
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        border: "2px solid #414141",
    },
    img: {
        borderRadius: "50%",
        width: "300px",
        height: "300px",
        border: "2px solid #414141",
    },
    fullInfo: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        padding: ".4%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        position: "relative",
    },
    info: {
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        padding: ".4%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        position: "relative",
    },
    explanationBox: {
        width: "46%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "2%",
        paddingRight: "2%",
        justifyContent: "center",
        alignItems: "center",
    },
    explanationBoxCases: {
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "2%",
        paddingRight: "2%",
        justifyContent: "center",
        alignItems: "center",
    },
    infoCases: {
        fontSize: "20px",
        wordBreak: "normal",
        textAlign: 'center'
    },
    infoText: {
        fontSize: "20px",
        wordBreak: "normal",
        textAlign: 'justify',
        textJustify: 'distributed'
    },
    btl: {
        position: "absolute",
        width: "12%",
        height: "3px",
        top: "0",
        left: "0",
        backgroundColor: "black",
    },
    btr: {
        position: "absolute",
        width: "12%",
        height: "3px",
        top: "0",
        right: "0",
        backgroundColor: "black",
    },
    bbl: {
        position: "absolute",
        width: "12%",
        height: "3px",
        bottom: "0",
        left: "0",
        backgroundColor: "black",
        cursor: "pointer"
    },
    bbr: {
        position: "absolute",
        width: "12%",
        height: "3px",
        bottom: "0",
        right: "0",
        backgroundColor: "black",
    },
    bl: {
        position: "absolute",
        left: "0",
        height: "100%",
        width: "3px",
        backgroundColor: "black",
    },
    br: {
        position: "absolute",
        right: "0",
        height: "100%",
        width: "3px",
        backgroundColor: "black",
    }
}));

export default function AboutProject(props) {

    const classes = useStyles();

    React.useEffect(() => {
        document.title = pageTitles.aboutUs;
    }, []);

    return (
        <div className={classes.CONTAINER}>
            <Container maxWidth='lg'>
                <Typography variant="h4" gutterBottom noWrap align='center'>
                    {strings.appName}
                </Typography>
                <Typography variant='subtitle1' className={classes.infoText}>
                    امروزه اوقات فراغت با وجود مشغله{zwnj}های زندگی مدرن ارزش بسیاری یافته است. از این رو بشر همواره در
                    پی یافتن راه حل{zwnj}هایی است که به صرفه جویی هر چه بیشتر در وقت کمک کند. از آن جا که توسعه اینترنت،
                    همه جنبه{zwnj}های زندگی انسان را در برگرفته، استفاده کردن از روش{zwnj}های خرید آنلاین و اینترنتی به
                    جای استفاده از روش{zwnj}های سنتی کمک شایانی به برنامه{zwnj}ریزی و مدیریت زمان انسان{zwnj}ها می{zwnj}کند.
                    از همین روست که هر روز به تعداد کاربران سرویس‌های اینترنتی و مشتریان فروشگاه‌‏‌‏های اینترنتی افزوده
                    می‌‌‏شود.
                </Typography>
            </Container>
            <Typography variant="h5" gutterBottom noWrap align='center' style={{
                marginTop: '5%'
            }}>
                {strings.aboutProject}
            </Typography>
            <div className={classes.container}>
                <div className={classes.fullInfo}>
                    <div className={classes.bl}/>
                    <div className={classes.br}/>
                    <div className={classes.btl}/>
                    <div className={classes.btr}/>
                    <div className={classes.bbl}/>
                    <div className={classes.bbr}/>
                    <div className={classes.explanationBox}>
                        <p className={classes.infoText}>
                            این پروژه برای درس طراحی شیء گرای سیستم{zwnj}ها و با هدف تجربه کار کردن در تیم{zwnj}های
                            توسعه{zwnj}ای که افراد زیادی در تحلیل، طراحی و پیاده{zwnj}سازی آن دخیل هستند، انجام شده است.
                            بک اند این پروژه توسط دو تیم مجزا و با دو فریم ورک جنگو و asp پیاده{zwnj}سازی شده است. بخش
                            کلاینت، در سکو{zwnj}های مختلفی توسعه یافته است. در دسکتاپ از زبان برنامه{zwnj}نویسی C# و
                            فریم ورک الکترون، برای موبایل از زبان برنامه{zwnj}نویسی کاتلین و فریم ورک فلاتر و برای وب
                            سایت نیز از React، ویو و انگولار استفاده شده است.
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.imgContainer}>
                    <img src={assets.ramStyle} className={classes.img}/>
                </div>
                <div className={classes.info}>
                    <div className={classes.bl}/>
                    <div className={classes.br}/>
                    <div className={classes.btl}/>
                    <div className={classes.btr}/>
                    <div className={classes.bbl}/>
                    <div className={classes.bbr}/>
                    <div className={classes.explanationBox}>
                        <p className={classes.infoText}>
                            رهبری این پروژه بر عهده دکتر رضا رمضانی استاد یار گروه مهندسی نرم افزار در دانشکده کامپیوتر
                            دانشگاه اصفهان بوده است. ایشان در زمینه{zwnj}هایی چون داده کاوی، وب معنایی، داده{zwnj}های
                            حجیم و سیستم{zwnj}های بلادرنگ فعالیت می{zwnj}کنند.
                            <br/>
                            هدف ایشان از طرح چنین پروژه{zwnj}ای درگیر شدن افراد با مسائلی است که ممکن است در حین طراحی و
                            اجرای یک پروژه رخ دهد. اختلاف نظر، عدم هماهنگی با سایر بخش{zwnj}ها و ضعف فنی از جمله مواردی
                            است که افراد در پروژه{zwnj}های بزرگ به کرات با آن مواجه می{zwnj}شوند. یکی دیگر از اهداف
                            پروژه یادگیری تکنولوژی{zwnj}های جدید و کار با فریم ورک{zwnj}هایی است که دانشجویان قبلاً با
                            آن{zwnj}ها آشنایی نداشتند.
                        </p>
                    </div>
                </div>
            </div>
            <Container maxWidth='lg'>
                <Typography variant="h4" gutterBottom noWrap align='center'>
                    {strings.developmentTeam}
                </Typography>
                <img src={assets.developmentTeam} className={classes.image}/>
            </Container>
            <div className={classes.container}>
                <div className={classes.info}>
                    <div className={classes.bl}/>
                    <div className={classes.br}/>
                    <div className={classes.btl}/>
                    <div className={classes.btr}/>
                    <div className={classes.bbl}/>
                    <div className={classes.bbr}/>
                    <div className={classes.explanationBoxCases}>
                        <p className={classes.infoCases}>
                            <strong>
                                محمد حسن ابراهیمی
                            </strong>
                            <br/>
                            دانشجوی ترم {toPersianNumbers(7)} مهندسی کامپیوتر دانشگاه اصفهان
                            <br/>
                            سرگروه تیم توسعه React و عضو فعال تیم توسعه Kotlin
                            <br/>
                            طراحی UI پروژه و هماهنگی اعضا
                            <br/>
                            <a href={'https://github.com/mohamadhassan98'}>https://github.com/mohamadhassan98</a>
                        </p>
                    </div>
                </div>
                <div className={classes.teamImgContainer}>
                    <img src={assets.ramStyle} className={classes.teamImage}/>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.teamImgContainer}>
                    <img src={assets.faezee} className={classes.teamImage}/>
                </div>
                <div className={classes.info}>
                    <div className={classes.bl}/>
                    <div className={classes.br}/>
                    <div className={classes.btl}/>
                    <div className={classes.btr}/>
                    <div className={classes.bbl}/>
                    <div className={classes.bbr}/>
                    <div className={classes.explanationBoxCases}>
                        <p className={classes.infoCases}>
                            <strong>
                                فائزه آقابزرگی
                            </strong>
                            <br/>
                            دانشجوی ترم {toPersianNumbers(7)} مهندسی کامپیوتر دانشگاه اصفهان
                            <br/>
                            سرگروه تیم توسعه الکترون و عضو فعال تیم توسعه React
                            <br/>
                            طراحی صفحات و اتصال به سرور
                            <br/>
                            <a href={'https://github.com/faezee77'}>https://github.com/faezee77</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.info}>
                    <div className={classes.bl}/>
                    <div className={classes.br}/>
                    <div className={classes.btl}/>
                    <div className={classes.btr}/>
                    <div className={classes.bbl}/>
                    <div className={classes.bbr}/>
                    <div className={classes.explanationBoxCases}>
                        <p className={classes.infoCases}>
                            <strong>
                                زهرا کمالی
                            </strong>
                            <br/>
                            دانشجوی ترم {toPersianNumbers(7)} مهندسی کامپیوتر دانشگاه اصفهان
                            <br/>
                            عضو تیم{zwnj}های توسعه React و Kotlin
                            <br/>
                            طراحی صفحات و تجربه کاربر
                            <br/>
                            <a href={'https://github.com/zahra1997kml'}>https://github.com/zahra1997kml</a>
                        </p>
                    </div>
                </div>
                <div className={classes.teamImgContainer}>
                    <img src={assets.zahraKml} className={classes.teamImage}/>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.teamImgContainer}>
                    <img src={assets.ramStyle} className={classes.teamImage}/>
                </div>
                <div className={classes.info}>
                    <div className={classes.bl}/>
                    <div className={classes.br}/>
                    <div className={classes.btl}/>
                    <div className={classes.btr}/>
                    <div className={classes.bbl}/>
                    <div className={classes.bbr}/>
                    <div className={classes.explanationBoxCases}>
                        <p className={classes.infoCases}>
                            <strong>
                                صبا عربزادگان
                            </strong>
                            <br/>
                            دانشجوی ترم {toPersianNumbers(7)} مهندسی کامپیوتر دانشگاه اصفهان
                            <br/>
                            عضو فعال تیم React و تحلیل
                            <br/>
                            طراحی صفحات و تجربه کاربر
                            <br/>
                            <a href={'https://github.com/sabaarabzadegan'}>https://github.com/sabaarabzadegan</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.info}>
                    <div className={classes.bl}/>
                    <div className={classes.br}/>
                    <div className={classes.btl}/>
                    <div className={classes.btr}/>
                    <div className={classes.bbl}/>
                    <div className={classes.bbr}/>
                    <div className={classes.explanationBoxCases}>
                        <p className={classes.infoCases}>
                            <strong>
                                فائزه مرادی
                            </strong>
                            <br/>
                            دانشجوی ترم {toPersianNumbers(7)} مهندسی کامپیوتر دانشگاه اصفهان
                            <br/>
                            عضو فعال تیم{zwnj}های الکترون و React
                            <br/>
                            طراحی صفحات و تجربه کاربر
                            <br/>
                            <a href={'https://github.com/faezeh3223'}>https://github.com/faezeh3223</a>
                        </p>
                    </div>
                </div>
                <div className={classes.teamImgContainer}>
                    <img src={assets.faezeh} className={classes.teamImage}/>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.teamImgContainer}>
                    <img src={assets.ramStyle} className={classes.teamImage}/>
                </div>
                <div className={classes.info}>
                    <div className={classes.bl}/>
                    <div className={classes.br}/>
                    <div className={classes.btl}/>
                    <div className={classes.btr}/>
                    <div className={classes.bbl}/>
                    <div className={classes.bbr}/>
                    <div className={classes.explanationBoxCases}>
                        <p className={classes.infoCases}>
                            <strong>
                                زهرا قائدی
                            </strong>
                            <br/>
                            دانشجوی ترم {toPersianNumbers(7)} مهندسی کامپیوتر دانشگاه اصفهان
                            <br/>
                            عضو تیم{zwnj}های React و Kotlin
                            <br/>
                            طراحی صفحات و UI پروژه
                            <br/>
                            <a href={'https://github.com/behnaz987'}>https://github.com/behnaz987</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}