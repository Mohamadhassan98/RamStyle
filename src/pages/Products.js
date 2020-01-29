import React from 'react';
import {Container, TextField, Box} from "@material-ui/core";
import {flexbox} from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import pic from "../assets/shoes.jpeg"
import Divider from "@material-ui/core/Divider";
import {makeStyles} from '@material-ui/core/styles';
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {string} from "prop-types";
import {strings, toPersianNumbers} from "../values/strings";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import pic2 from '../assets/shoes.jpeg';

const useFlex = {
    item: flexbox({
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    })
};
const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        flexWrap: "wrap",
    },
    gridList: {
        // width: 500,
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

export default function App() {
    const onTextChanged = (event) => {
        setSearchInput({
            [event.target.name]: event.target.value
        });
    };
    const tileData = [
        {
            img: pic,
            name: 'shoe1',
            isStock: 'true',
            count:'4',
            salesman:'4',
            price:'25000',
        },
        {
            img: pic,
            name: 'shoe1',
            isStock: 'true',
            count:'4',
            salesman:'4',
            price:'25000',
        },
        {
            img: pic,
            name: 'shoe1',
            isStock: 'true',
            count:'4',
            salesman:'4',
            price:'25000',
        },
        {
            img: pic,
            name: 'shoe1',
            isStock: 'true',
            count:'4',
            salesman:'4',
            price:'25000',
        },
        {
            img: pic,
            name: 'shoe1',
            isStock: 'true',
            count:'4',
            salesman:'4',
            price:'25000',
        },
        {
            img: pic,
            name: 'shoe1',
            isStock: 'true',
            count:'4',
            salesman:'4',
            price:'25000',
        },
    ];

    const [searchResult, setSearchResult] = React.useState(0);
    const [input, setSearchInput] = React.useState("");
    const classes = useStyles();
    //const theme = createMuiTheme();
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
                                                پوشاک
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <Divider orientation="vertical"
                                                     style={{backgroundColor: 'black', width: 1, height: 50, marginLeft: 5, marginRight: 5, marginTop: 3}}/>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <TextField id="standard-search"
                                                       type="search"
                                                       placeholder={strings.searchAmongBelow}
                                                       onChange={onTextChanged}
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
                                        {strings.show} {searchResult > 9 ? toPersianNumbers(9) : toPersianNumbers(searchResult)} {strings.from} {toPersianNumbers(searchResult)}
                                    </Typography>
                                </FlexBoxItem>
                            </FlexBoxContainer>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <Divider className="divider" orientation="horizontal" style={{backgroundColor: 'black' ,height: 1, marginTop: 3}}/>
                        </FlexBoxItem>
                        <FlexBoxItem style={{marginTop: '10px'}} >
                            <FlexBoxContainer flexWrap='wrap' justifyContent='space-between'>
                                {tileData.map(tile => (
                                    <FlexBoxItem flexBasis={null}>
                                        <Card className={classes.card}>
                                            <CardActionArea >
                                                <CardMedia
                                                    className={classes.media}
                                                    image={tile.img}
                                                />
                                                <CardContent >
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {tile.name}
                                                    </Typography>
                                                    <Typography>
                                                        تعداد:{toPersianNumbers(tile.count)}
                                                    </Typography>
                                                    <Typography>
                                                        {tile.isStock == "true" ? strings.isStock : strings.isNew}
                                                    </Typography>
                                                    <Typography>
                                                        قیمت:   {tile.price}
                                                    </Typography>
                                                    <Typography>
                                                        فروشنده: {tile.salesman}
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
                    {/*<MuiThemeProvider theme={theme}>*/}
                    <CssBaseline/>
                    <Pagination
                        innerButtonCount={1}
                        outerButtonCount={3}
                        limit={10}
                        offset={0}
                        total={100}
                    />
                    {/*</MuiThemeProvider>*/}
                </FlexBoxItem>
            </FlexBoxContainer>
        </Container>
    );
}

