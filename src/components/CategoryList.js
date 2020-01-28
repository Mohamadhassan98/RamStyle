import React from 'react';
import Typography from '@material-ui/core/Typography';
import {assets} from "../values/assets";
import {baseUrls} from "../values/urls";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
import PropTypes from 'prop-types';

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

    const onItemClicked = (id) => {
        props.history.push(baseUrls.categories(id));
    };

    return (
        <Container maxWidth='lg'>
            <FlexBoxContainer
                alignItems="center"
                justifyContent="space-between"
                flexWrap='wrap'
                className={classes.container}
            >
                {[1, 2, 3, 4, 5, 6, 7].map(category => (
                    <FlexBoxItem flexBasis='30%' justifySelf='center' className={classes.item}>
                        <FlexBoxContainer
                            flexDirection='column'
                            alignItems='center'
                            onClick={() => onItemClicked(category)}
                            onMouseEnter={() => setHoveredItem(category)}
                            onMouseLeave={() => setHoveredItem(-1)}>
                            <img src={assets.image1}
                                 className={hoveredItem === category ? classes.imgBlur : classes.img}/>
                            <div className={hoveredItem === category ? classes.caption : classes.hidden}>
                                <Typography variant="h2" gutterBottom className={classes.title}>clothes</Typography>
                                <Typography variant="h4" gutterBottom className={classes.body}>لباس</Typography>
                            </div>
                        </FlexBoxContainer>
                    </FlexBoxItem>
                ))}
            </FlexBoxContainer>
        </Container>
    );
}

CategoryList.propTypes = {
    productCategories: PropTypes.array.isRequired
};