import React from 'react';
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {strings} from "../values/strings";
import {assets} from "../values/assets";
import Slider from "react-slick";

// noinspection JSCheckFunctionSignatures
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        flip: false,
        marginTop: 50
    }
}));

//fixme RightToLeft Chelides
//fixme disable elevation
export default function Brands() {

    const classes = useStyles();

    const [activeItemIndex, setActiveItemIndex] = React.useState(0);

    const chevronWidth = 40;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        arrows: true
    };

    return (
        <div className={classes.container}>
            <Container>
                <Grid container direction='column' wrap='nowrap' justify='center'>
                    <Grid item>
                        <Typography align='center' gutterBottom variant='h5' style={{
                            fontWeight: 'bold'
                        }}>
                            {strings.brandsTitle}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Slider {...settings}>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={assets.brandItem1}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" align='center'>
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={assets.brandItem1}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" align='center'>
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={assets.brandItem1}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" align='center'>
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={assets.brandItem1}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" align='center'>
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={assets.brandItem1}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" align='center'>
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card classes={classes}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={assets.brandItem1}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" align='center'>
                                            SAMSUNG
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Slider>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}