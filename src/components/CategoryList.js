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
import {assets} from "../values/assets";

const useStyle = makeStyles(theme => ({
    container: {
        position: "relative",
    },
    container2: {
        backgroundColor: theme.palette.text.secondary
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
        height: 450,
        position: "relative",
    },
    imgBlur: {
        width: "100%",
        height: 450,
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
        bottom: "40%"
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
    const [productCategories, setProductCategories] = React.useState([]);

    React.useEffect(() => {
        setProductCategories(props.productCategories);
        for (let j = 0; j < props.productCategories.length; j++) {
            const value = props.productCategories[j];
            axios.get(serverUrls.categoryProducts(value.id)).then(response => {
                if (response.data && response.data.length !== 0) {
                    let goOn = true;
                    for (let i = 0; i < response.data.length && goOn; i++) {
                        const product = response.data[i];
                        const productId = product.id;
                        axios.get(serverUrls.productImages(productId)).then(response => {
                            if (!response.data || response.data.length === 0) {
                                return;
                            }
                            const newArray = [...props.productCategories];
                            const image = response.data[0].imageContent;
                            newArray[j] = {...props.productCategories, image: image};
                            value.image = image;
                            setProductCategories(newArray);
                            goOn = false;
                        }).catch(error => {
                            if (error.response && error.response.status === 500) {
                                props.setError500(true);
                            } else {
                                window.alert(`Error while retrieving images ${error}`);
                            }
                        });
                    }
                }
            }).catch(error => {
                if (error.response && error.response.status === 500) {
                    props.setError500(true);
                } else {
                    window.alert(`Error while category products ${error}`);
                }
            });
        }
    }, [props.productCategories]);

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
                <FlexBoxItem className={classes.container2}>
                    {productCategories.length === 0 ?
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
                            {productCategories.map(category => (
                                <FlexBoxItem flexBasis='30%' justifySelf='center' className={classes.item}
                                             key={category.id}>
                                    <FlexBoxContainer
                                        flexDirection='column'
                                        alignItems='center'
                                        onClick={() => onItemClicked(category)}
                                        onMouseEnter={() => setHoveredItem(category.id)}
                                        onMouseLeave={() => setHoveredItem(-1)}>
                                        <img src={category.image ? category.image : assets.noImage} alt='category'
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