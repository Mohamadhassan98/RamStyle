import React from "react";
import {fade, useScrollTrigger} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle, ShoppingCart} from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
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
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            width: 200
        }
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
    }
}));

export default function Header(props) {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [hoverOnMenu, setHoverOnMenu] = React.useState(false);
    const [hoverOnButton, setHoverOnButton] = React.useState(false);

    const onLoginPressed = () => {
        if (props.history.location.pathname !== urls.auth)
            props.history.push(urls.auth);
    };

    const onLogoPressed = () => {
        if (props.history.location.pathname !== urls.home) {
            props.history.push(urls.home);
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
            setOpen(false);
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
                                                style={{color: 'white'}}>
                                            {strings.productCategories}
                                        </Button>
                                        <Popper
                                            open={hoverOnButton || hoverOnMenu}
                                            anchorEl={anchorRef.current}
                                            role={undefined}
                                            placement='top-start'
                                            style={{
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
                                                        <MenuList autoFocusItem={open} id="menu-list-grow"
                                                                  disableListWrap
                                                                  onKeyDown={handleListKeyDown}>
                                                            <MenuItem>محصولات لبنی</MenuItem>
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
                                            <div className={classes.searchIcon}>
                                                <SearchIcon/>
                                            </div>
                                            <InputBase
                                                placeholder={strings.toolbarSearchLabel}
                                                classes={{
                                                    root: classes.inputRoot,
                                                    input: classes.inputInput
                                                }}
                                                inputProps={{'aria-label': 'search'}}
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
                                                    <AccountCircle onClick={onLoginPressed} style={{color: "white"}}/>
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