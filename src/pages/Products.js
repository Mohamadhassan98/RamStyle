import React from 'react';
import {Container, TextField} from "@material-ui/core";
import {flexbox} from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import {assets} from '../values/assets';
import Divider from "@material-ui/core/Divider";
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from 'prop-types';
import {strings} from "../values/strings";

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
        height: 'auto',
        marginTop: 100,
        flexBasis: '100%',
    },
}));


//fixme GridList to FlexBox @Zahrakml
export default function Products(props) {

    props.setShowFooter(true);
    props.setShowHeaderButtons(true);

    const onTextChanged = (event) => {
        setSearchInput({
            [event.target.name]: event.target.value
        });
    };
    const tileData = [
        {
            img: assets.brandItem1,
            title: 'Image',
            author: 'author',
        },
        {
            img: assets.brandItem1,
            title: 'Image',
            author: 'author',
        },
        {
            img: assets.brandItem1,
            title: 'Image',
            author: 'author',
        },
        {
            img: assets.brandItem1,
            title: 'Image',
            author: 'author',
        },
        {
            img: assets.brandItem1,
            title: 'Image',
            author: 'author',
        },
    ];

    const [searchResult, setSearchResult] = React.useState(0);
    const [input, setSearchInput] = React.useState("");
    const classes = useStyles();
    const theme = createMuiTheme();

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
                                                     style={{width: 1, height: 50, marginLeft: 5}}/>
                                        </FlexBoxItem>
                                        <FlexBoxItem flexBasis={null}>
                                            <TextField id="standard-search"
                                                       label="Search field" type="search"
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
                                        {strings.show} {searchResult > 9 ? 9 : searchResult} {strings.from} {searchResult}
                                    </Typography>
                                </FlexBoxItem>
                            </FlexBoxContainer>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <Divider orientation="horizontal" style={{height: 1, marginTop: 10}}/>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <Typography>
                                نتایج
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem>
                            <GridList cellHeight={160} className={classes.gridList}>
                                {tileData.map(tile => (
                                    <GridListTile key={tile.img} cols={tile.cols || 1} style={{flexBasis: '33.33%'}}>
                                        <img src={tile.img} alt={tile.title}/>
                                    </GridListTile>
                                ))}
                            </GridList>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
                <FlexBoxItem flexBasis={null} alignSelf='center'>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Pagination
                            limit={10}
                            offset={10}
                            total={100}
                        />
                    </MuiThemeProvider>
                </FlexBoxItem>
            </FlexBoxContainer>
        </Container>
    );
}

Products.propTypes = {
    setShowHeaderButtons: PropTypes.func.isRequired,
    setShowFooter: PropTypes.func.isRequired
};