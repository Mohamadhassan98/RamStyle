import React from "react";
import {Container, Typography} from "@material-ui/core";
import eTrust from '../assets/logo.png';
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import Link from "@material-ui/core/Link";
import {assets} from "../values/assets";
import PropTypes from 'prop-types';

const classes = {
    maxWidth: '25px'
};

export default function Footer(props) {

    const {show, children} = props;

    return (
        <div>
            {show ?
                <FlexBoxContainer flexDirection='column' style={{
                    minHeight: '100vh'
                }} justifyContent='space-between'>
                    <FlexBoxItem flexBasis={null}>
                        {children}
                    </FlexBoxItem>
                    <FlexBoxItem flexBasis={null}>
                        <Container maxWidth='xl'>
                            <FlexBoxContainer justifyContent='space-between'>
                                <FlexBoxItem justifySelf='center'>
                                    <FlexBoxContainer flexDirection='column' justifyContent='center'>
                                        <FlexBoxItem>
                                            <Typography variant='h6' align='center'>
                                                راهنمای خرید از رم استایل
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    نحوه ثبت سفارش
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    رویه ارسال سفارش
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    شیوه های پرداخت
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <FlexBoxContainer flexDirection='column'>
                                        <FlexBoxItem>
                                            <Typography variant='h6' align='center'>
                                                خدمات مشتریان
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    پاسخ به پرسش های متداول
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    رویه بازگرداندن کالا
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    شرایط استفاده
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    حریم خصوصی
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    گزارش اشکال
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <FlexBoxContainer flexDirection='column'>
                                        <FlexBoxItem>
                                            <Typography variant='h6' align='center'>
                                                با رم استایل
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    اتاق خبر رم استایل
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    فروش در رم استایل
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    فرصت های شغلی
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    تماس با رم استایل
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' align='center'>
                                                <Link>
                                                    درباره ما
                                                </Link>
                                            </Typography>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                                <FlexBoxItem flexBasis='150%'>
                                    <FlexBoxContainer flexDirection='column' alignItems='center'>
                                        <FlexBoxItem>
                                            <img src={eTrust} alt='E-trust logo'/>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <FlexBoxContainer flexDirection='column'>
                                                <FlexBoxItem>
                                                    <Typography align='center'>
                                                        رم استایل را در شبکه های اجتماعی دنبال کنید
                                                    </Typography>
                                                </FlexBoxItem>
                                                <FlexBoxItem>
                                                    <FlexBoxContainer>
                                                        <FlexBoxItem flexBasis={null}>
                                                            <img src={assets.instagram} alt='instagram logo'
                                                                 style={classes}/>
                                                        </FlexBoxItem>
                                                        <FlexBoxItem flexBasis={null}>
                                                            <img src={assets.twitter} alt='twitter logo'
                                                                 style={classes}/>
                                                        </FlexBoxItem>
                                                        <FlexBoxItem flexBasis={null}>
                                                            <img src={assets.aparat} alt='aparat logo' style={classes}/>
                                                        </FlexBoxItem>
                                                        <FlexBoxItem flexBasis={null}>
                                                            <img src={assets.linkedin} alt='LinkedIn logo'
                                                                 style={classes}/>
                                                        </FlexBoxItem>
                                                    </FlexBoxContainer>
                                                </FlexBoxItem>
                                            </FlexBoxContainer>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                            </FlexBoxContainer>
                        </Container>
                    </FlexBoxItem>
                </FlexBoxContainer>
                : children}
        </div>
    );
}

Footer.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Footer.defaultProps = {
    show: false
};