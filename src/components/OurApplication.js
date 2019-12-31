import React from 'react';
import '../App.css';
import mobile from '../assets/mobile.png';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import myket from '../assets/myket.png';
import googlePlay from '../assets/play.png';
import bazaar from '../assets/cafe-bazaar.png';
import Button from "@material-ui/core/Button";
import {flexbox} from "@material-ui/system";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import {makeStyles} from "@material-ui/core";
import background from '../assets/background.jpeg';

const useStyle = makeStyles(theme => ({
    container: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    img: {
        height: '50px'
    }
}));


export default function OurApplication() {
    const classes = useStyle();
    const flexBoxProps = flexbox({
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'center'
    });
    flexBoxProps.alignItems = 'center';

    return (
        <Container className={classes.container} maxWidth='lg'>
            <FlexBoxContainer justifyContent='center'>
                <FlexBoxItem flexBasis={'200%'}>
                    <FlexBoxContainer flexDirection='column' justifyContent='space-around'>
                        <FlexBoxItem>
                            <Typography variant="h3">
                                رم استایل همیشه همراه شما
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <Typography variant="h5">
                                با نصب اپلیکیشن رم استایل بر روی گوشی همراه خود، جدیدترین اخبار را دریافت کنید و از هیچ
                                تخفیفی بی اطلاع نمانید
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <FlexBoxContainer justifyContent='space-around'>
                                <FlexBoxItem>
                                    <Button>
                                        <img src={googlePlay} className={classes.img}/>
                                    </Button>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <Button>
                                        <img src={myket} className={classes.img}/>
                                    </Button>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <Button>
                                        <img src={bazaar} className={classes.img}/>
                                    </Button>
                                </FlexBoxItem>
                            </FlexBoxContainer>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
                <FlexBoxItem>
                    <FlexBoxContainer flexDirection='column'>
                        <FlexBoxItem>
                            <img src={mobile} className='img'/>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
            </FlexBoxContainer>
        </Container>
    );
}