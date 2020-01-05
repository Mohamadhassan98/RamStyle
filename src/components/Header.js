import React from "react";
import {fade, useScrollTrigger} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle, ShoppingCart} from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import Typography from "@material-ui/core/Typography";
import ScrollTop from "../pages/ScrollTop";
import ElevationScroll from "../tools/ElevateOnScroll";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import PropTypes from 'prop-types';
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import {strings} from "../values/strings";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import {urls} from "../values/urls";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios';
import {serverUrls} from "../values/serverurls";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '50%',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
        marginRight: 30,
        marginTop: -10,
        marginBottom: -10,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'transparent',
            },
            '&:hover fieldset': {
                borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'transparent',
            },
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            width: 200
        },
        borderRadius: 5,
        borderColor: 'transparent'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    offset: theme.mixins.toolbar,
    icons: {
        color: theme.palette.text.secondary
    },
    logo: {
        color: theme.palette.text.secondary
    },
    button: {
        color: theme.palette.text.secondary
    },
}));

export default function Header(props) {

    const [productCategoryOpen, setProductCategoryOpen] = React.useState(false);
    const [searchOptionsOpen, setSearchOptionsOpen] = React.useState(false);
    const [searchOptions, setSearchOptions] = React.useState([]);

    React.useEffect(() => {
        axios.get(serverUrls.allCategories).then(response => {

        }).catch(error => {

        });
    }, []);


    const [searchLoading, setSearchLoading] = React.useState(false);

    const anchorRef = React.useRef(null);
    const [hoverOnMenu, setHoverOnMenu] = React.useState(false);
    const [hoverOnButton, setHoverOnButton] = React.useState(false);
    const onItemClicked = () => {
        props.history.push('/category/1');
    };

    const onLoginPressed = () => {
        if (props.history.location.pathname !== urls.auth)
            props.history.push(urls.auth);
    };

    const onLogoPressed = () => {
        if (props.history.location.pathname !== urls.home) {
            props.history.push({pathname: urls.home});
        }
    };

    const trigger = useScrollTrigger({
        disableHysteresis: false,
        target: window
    });

    const {showButtons} = props;

    const classes = useStyles();

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setProductCategoryOpen(false);
        }
    }

    return (
        <React.Fragment>
            <ElevationScroll>
                <div>
                    {showButtons &&
                    <Slide direction='down' appear={false} in={!trigger}>
                        <AppBar>
                            <Toolbar/>
                            <Toolbar>
                                <FlexBoxContainer alignItems='center' justifyItems='flex-start'>
                                    <FlexBoxItem>
                                        <Button variant='text' aria-haspopup
                                                onMouseEnter={() => setHoverOnButton(true)}
                                                onMouseLeave={() => setHoverOnButton(false)}
                                                className={classes.button}>
                                            {strings.productCategories}
                                        </Button>
                                        <Popper
                                            open={hoverOnButton || hoverOnMenu}
                                            anchorEl={anchorRef.current}
                                            role={undefined}
                                            placement='top-start'
                                            style={{
                                                /*ignore classes this time*/
                                                position: 'absolute',
                                                top: 'auto',
                                                left: 'auto',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyItems: 'flex-start',
                                                marginTop: 40
                                            }}
                                            transition
                                            disablePortal>
                                            {({TransitionProps}) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{transformOrigin: 'center top'}}
                                                >
                                                    <Paper
                                                        onMouseLeave={() => setHoverOnMenu(false)}
                                                        onMouseEnter={() => setHoverOnMenu(true)}
                                                    >
                                                        <MenuList autoFocusItem={productCategoryOpen}
                                                                  id="menu-list-grow"
                                                                  disableListWrap
                                                                  onKeyDown={handleListKeyDown}>
                                                            <MenuItem onClick={onItemClicked}>محصولات لبنی</MenuItem>
                                                            <MenuItem>کودک و نوجوان</MenuItem>
                                                            <MenuItem>آشپزخانه</MenuItem>
                                                        </MenuList>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </FlexBoxItem>
                                </FlexBoxContainer>
                            </Toolbar>
                        </AppBar>
                    </Slide>
                    }
                    <AppBar>
                        <Toolbar>
                            <Container maxWidth='xl'>
                                <FlexBoxContainer alignItems='center' justifyContent='space-between'>
                                    <FlexBoxItem>
                                        {showButtons &&
                                        <div className={classes.search}>
                                            <Autocomplete
                                                open={searchOptionsOpen}
                                                onOpen={() => setSearchOptionsOpen(true)}
                                                onClose={() => setSearchOptionsOpen(false)}
                                                freeSolo
                                                id="free-solo-2-demo"
                                                options={searchOptions.map(option => option.title)}
                                                renderInput={params => (
                                                    <TextField
                                                        {...params}
                                                        placeholder={strings.toolbarSearchLabel}
                                                        margin="none"
                                                        variant="outlined"
                                                        classes={{
                                                            root: classes.inputRoot,
                                                            input: classes.inputInput
                                                        }}
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            startAdornment: <InputAdornment position='start'>
                                                                <SearchIcon className={classes.icons}/>
                                                            </InputAdornment>,
                                                            endAdornment:
                                                                <React.Fragment>
                                                                    {searchLoading ? <CircularProgress color="inherit"
                                                                                                       size={20}/> : null}
                                                                    {params.InputProps.endAdornment}
                                                                </React.Fragment>
                                                        }}
                                                        fullWidth
                                                    />
                                                )}
                                            />
                                        </div>
                                        }
                                    </FlexBoxItem>
                                    <FlexBoxItem justifySelf='center'>
                                        <Typography variant='h6' align='center'>
                                            <Button variant='text' onClick={onLogoPressed} className={classes.logo}>
                                                {strings.appName}
                                            </Button>
                                        </Typography>
                                    </FlexBoxItem>
                                    <FlexBoxItem justifySelf='flex-end'>
                                        <FlexBoxContainer justifyContent='flex-end' alignItems='center'
                                                          justifyItems='flex-end'>
                                            <FlexBoxItem flexBasis={null}>
                                                {showButtons &&
                                                <IconButton>
                                                    <ShoppingCart className={classes.icons}/>
                                                </IconButton>
                                                }
                                            </FlexBoxItem>
                                            <FlexBoxItem flexBasis={null}>
                                                {showButtons &&
                                                <IconButton>
                                                    <AccountCircle onClick={onLoginPressed} className={classes.icons}/>
                                                </IconButton>
                                                }
                                            </FlexBoxItem>
                                        </FlexBoxContainer>
                                    </FlexBoxItem>
                                </FlexBoxContainer>
                            </Container>
                        </Toolbar>
                    </AppBar>
                    <Toolbar/>
                </div>
            </ElevationScroll>
            <Toolbar id="back-to-top-anchor"/>
            <ScrollTop/>
        </React.Fragment>
    );
}

Header.propTypes = {
    showButtons: PropTypes.bool
};

Header.defaultProps = {
    showButtons: true
};