import React from 'react';
import Typography from '@material-ui/core/Typography';
import {baseUrls} from "../values/urls";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
import PropTypes from 'prop-types';
import axios from 'axios';
import {serverUrls} from "../values/serverurls";
import {strings} from "../values/strings";

const useStyle = makeStyles(theme => ({
    container: {
        position: "relative",
    },
    item: {
        maxWidth: (theme.breakpoints.values.sm + theme.breakpoints.values.xs) / 2,
        margin: "1%",
        position: "relative",
        cursor: "pointer",
        border: "5px solid #c7c7c7"
    },
    img: {
        width: "100%",
        position: "relative",
    },
    imgBlur: {
        width: "100%",
        position: "relative",
        filter: "blur(4px)",
    },
    caption: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: "70%",
        alignItems: "center",
        border: "5px inset #103F5E",
        borderRadius: "0px 8px 0px 10px",
        justifyContent: "center",
        bottom: "30%"
    },
    hidden: {
        display: "none"
    },
    title: {
        textAlign: "center",
        fontSize: "30px"
    },
    body: {
        textAlign: "center",
        fontSize: "20px"
    }
}));

export default function CategoryList(props) {
    const classes = useStyle();
    const [hoveredItem, setHoveredItem] = React.useState(-1);

    React.useEffect(() => {
        props.productCategories.forEach(value => {
            axios.get(serverUrls.categoryProducts(value.id)).then(response => {
                if (!response.data || response.data.length === 0) {
                    // TODO Picture for empty categories
                } else {
                    const product = response.data[0];
                    const productId = product.id;
                    axios.get(serverUrls.productImages(productId)).then(response => {
                        //TODO Ask Ghazal if empty
                        value.image = response.data[0]['imageContent'];
                    }).catch(error => {
                        if (error.response.status === 500) {
                            props.setError500(true);
                        } else {
                            window.alert(`Error while retrieving images ${error.response.status}`);
                        }
                    });
                }
            }).catch(error => {
                if (error.response.status === 500) {
                    props.setError500(true);
                } else {
                    window.alert(`Error while category products ${error.response.status}`);
                }
            });
        });
    }, []);

    const onItemClicked = (category) => {
        props.history.push(baseUrls.categories(category.id));
    };

    return (
        <Container maxWidth='lg'>
            <FlexBoxContainer flexDirection='column' alignItems='center'>
                <FlexBoxItem>
                    <Typography align='center' gutterBottom variant='h5' style={{
                        fontWeight: 'bold'
                    }}>
                        {strings.productCategories}
                    </Typography>
                </FlexBoxItem>
                <FlexBoxItem>
                    {props.productCategories.length === 0 ?
                        <FlexBoxItem>
                            <Typography align='center' gutterBottom variant='h6' style={{
                                fontWeight: 'bold'
                            }}>
                                {strings.categoriesEmpty}
                            </Typography>
                        </FlexBoxItem> :
                        <FlexBoxContainer
                            alignItems="center"
                            justifyContent="space-between"
                            flexWrap='wrap'
                            className={classes.container}
                        >
                            {props.productCategories.map(category => (
                                <FlexBoxItem flexBasis='30%' justifySelf='center' className={classes.item}>
                                    <FlexBoxContainer
                                        flexDirection='column'
                                        alignItems='center'
                                        onClick={() => onItemClicked(category)}
                                        onMouseEnter={() => setHoveredItem(category.id)}
                                        onMouseLeave={() => setHoveredItem(-1)}>
                                        <img src={category.image} alt='category'
                                             className={hoveredItem === category.id ? classes.imgBlur : classes.img}/>
                                        <div className={hoveredItem === category.id ? classes.caption : classes.hidden}>
                                            <Typography variant="h4" gutterBottom className={classes.body}>
                                                {category.name}
                                            </Typography>
                                        </div>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                            ))}
                        </FlexBoxContainer>
                    }
                </FlexBoxItem>
            </FlexBoxContainer>
        </Container>
    );
}

CategoryList.propTypes = {
    productCategories: PropTypes.array.isRequired,
    setError500: PropTypes.func.isRequired
};