import React from 'react';
import {Container, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from "@material-ui/core/Divider";
import {makeStyles} from '@material-ui/core/styles';
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import {strings, toPersianNumbers} from "../values/strings";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {assets} from "../values/assets";
import axios from 'axios';
import {serverUrls} from "../values/serverurls";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        flexWrap: "wrap",
    },
    gridList: {
        height: 'auto',
        marginTop: 100,
        flexBasis: '100%',
    },
    card: {
        width: '345px',
        height: '360px',
        marginTop: '20px',
    },
    media: {
        height: 200,
    },
}));

export default function Products(props) {

    props.setShowHeaderButtons(true);
    props.setShowFooter(true);

    const {match} = props;
    const [data, setData] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [offset, setOffset] = React.useState(0);
    const [searchResult, setSearchResult] = React.useState([]);
    const [searchInput, setSearchInput] = React.useState("");
    const [title, setTitle] = React.useState('');

    React.useEffect(() => {
        // noinspection EqualityComparisonWithCoercionJS
        const title = props.productCategories.find(value => value.id == match.params.id);
        if (!title) {
            setTitle(strings.undefinedCategory);
        } else {
            setTitle(title.name);
            axios.get(serverUrls.categoryProducts(match.params.id, 9, 0)).then(response => {
                const {count, results} = response.data;
                setCount(count);
                setData(results);
                setSearchResult(results);
                for (let i = 0; i < results.length; i++) {
                    const product = results[i];
                    const productId = product.id;
                    axios.get(serverUrls.productImages(productId)).then(response => {
                        if (!response.data || response.data.length === 0) {
                            return;
                        }
                        const newArray = [...results];
                        const image = response.data[0]['imageContent'];
                        newArray[i] = {...product, image: image};
                        product.image = response.data[0]['imageContent'];
                        setData(newArray);
                        setSearchResult(newArray);
                    }).catch(error => {
                        if (error.response && error.response.status === 500) {
                            props.setError500(true);
                        } else {
                            window.alert(`Error while retrieving images ${error}`);
                        }
                    });
                }
            }).catch(error => {
                if (error.response && error.response.status === 500) {
                    props.setError500(true);
                } else {
                    window.alert(`Get category products error ${error}`);
                }
            });
        }
    }, [props.productCategories, props.match]);

    React.useEffect(() => {
        axios.get(serverUrls.categoryProducts(match.params.id, 9, offset)).then(response => {
            const {results} = response.data;
            setData(results);
            setSearchResult(results);
        }).catch(error => {
            if (error.response && error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Get category products error ${error}`);
            }
        });
    }, [offset]);

    React.useEffect(() => {
        if (!searchInput || searchInput === '') {
            setSearchResult(data);
        } else {
            setSearchResult(data.filter(value => value.name.toString().includes(searchInput)));
        }
    }, [searchInput]);
    const classes = useStyles();

    return (
        <Container>
            <FlexBoxContainer flexDirection='column' alignItems='stretch' justifyContent='space-between'
                              style={{minHeight: '100vh'}}>
                <FlexBoxItem>
                    <FlexBoxContainer flexDirection='column' alignItems='stretch'>
                        <FlexBoxItem>
                            <FlexBoxContainer justifyContent='space-between' alignItems='center'>
                                <FlexBoxItem>
                                    <FlexBoxContainer justifyContent='flex-start' alignItems='center'>
                                        <FlexBoxItem flexBasis={null}>
                                            <Typography>
                                                {title}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <Divider orientation="vertical"
                                                     style={{
                                                         backgroundColor: 'black',
                                                         width: 1,
                                                         height: 50,
                                                         marginLeft: 5,
                                                         marginRight: 5,
                                                         marginTop: 3
                                                     }}/>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <TextField id="standard-search"
                                                       type="search"
                                                       value={searchInput}
                                                       placeholder={strings.searchAmongBelow}
                                                       onChange={(event) => setSearchInput(event.target.value)}
                                                       style={{marginLeft: 20}}
                                                       InputProps={{
                                                           startAdornment: (
                                                               <InputAdornment position="start">
                                                                   <SearchIcon/>
                                                               </InputAdornment>
                                                           ),
                                                       }}
                                            >
                                            </TextField>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <Typography align={"right"}>
                                        {strings.show} {toPersianNumbers(data.length)} {strings.from} {toPersianNumbers(count)} {strings.product}
                                    </Typography>
                                </FlexBoxItem>
                            </FlexBoxContainer>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <Divider className="divider" orientation="horizontal"
                                     style={{backgroundColor: 'black', height: 1, marginTop: 3}}/>
                        </FlexBoxItem>
                        <FlexBoxItem style={{marginTop: '10px'}}>
                            <FlexBoxContainer flexWrap='wrap' justifyContent='space-between' alignItems='center'>
                                {searchResult.map(result => (
                                    <FlexBoxItem flexBasis='30%' key={result.id} justifySelf='center'>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={result.image ? result.image : assets.noImage}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {result.name}
                                                    </Typography>
                                                    <Typography>
                                                        {result.isStock ? strings.isStock : strings.isNew}
                                                    </Typography>
                                                    <Typography>
                                                        {strings.price}: {result.count === 0 ? strings.unavailable : `${toPersianNumbers(result.Price)} ${strings.rial}`}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </FlexBoxItem>
                                ))}
                            </FlexBoxContainer>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
                <FlexBoxItem flexBasis={null} alignSelf='center'>
                    <CssBaseline/>
                    <Pagination
                        innerButtonCount={1}
                        outerButtonCount={3}
                        limit={9}
                        offset={offset}
                        total={count}
                        onClick={(ev, offset1) => setOffset(offset1)}
                    />
                </FlexBoxItem>
            </FlexBoxContainer>
        </Container>
    );
}

Products.propTypes = {
    setError500: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired,
    setShowHeaderButtons: PropTypes.func.isRequired,
    productCategories: PropTypes.array.isRequired
};