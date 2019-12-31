import React from "react";
import {Container, Typography} from "@material-ui/core";
import eTrust from '../assets/logo.png';
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import Twitter from '../assets/twitter-logo.png';
import Instagram from '../assets/instagram-logo.png';
import Aparat from '../assets/aparat.svg';
import LinkedIn from '../assets/linkedin-icon.png';
import Link from "@material-ui/core/Link";

const classes = {
    maxWidth: '25px'
};

export default function Footer() {

    return (
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
                                            <img src={Instagram} alt='instagram logo' style={classes}/>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <img src={Twitter} alt='twitter logo' style={classes}/>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <img src={Aparat} alt='aparat logo' style={classes}/>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <img src={LinkedIn} alt='LinkedIn logo' style={classes}/>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                            </FlexBoxContainer>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
            </FlexBoxContainer>
        </Container>
    );
}