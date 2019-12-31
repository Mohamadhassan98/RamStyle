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
    }
}));

export default function UpperHeader(props) {

    const trigger = useScrollTrigger({
        disableHysteresis: false,
        target: window
    });

    const {showButtons} = props;

    const classes = useStyles();

    return (
        <React.Fragment>
            <ElevationScroll>
                <div>
                    {showButtons &&
                    <Slide direction='down' appear={false} in={!trigger}>
                        <AppBar>
                            <Toolbar/>
                            <Toolbar>
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
                                            {strings.appName}
                                        </Typography>
                                    </FlexBoxItem>
                                    <FlexBoxItem justifySelf='flex-end'>
                                        <FlexBoxContainer justifyContent='flex-end' alignItems='center'
                                                          justifyItems='flex-end'>
                                            <FlexBoxItem flexBasis={null}>
                                                {showButtons &&
                                                <IconButton>
                                                    <ShoppingCart style={{color: "white"}}/>
                                                </IconButton>
                                                }
                                            </FlexBoxItem>
                                            <FlexBoxItem flexBasis={null}>
                                                {showButtons &&
                                                <IconButton>
                                                    <AccountCircle style={{color: "white"}}/>
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

UpperHeader.propTypes = {
    showButtons: PropTypes.bool
};

UpperHeader.defaultProps = {
    showButtons: true
};