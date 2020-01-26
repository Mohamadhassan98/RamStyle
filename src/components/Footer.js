import React from "react";
import {Container, makeStyles, Typography} from "@material-ui/core";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import {assets} from "../values/assets";
import PropTypes from 'prop-types';
import {strings} from "../values/strings";

const useStyle = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
    },
    container: {
        backgroundColor: theme.palette.secondary.main,
    },
    logo: {
        maxWidth: '25px'
    },
    typography: {
        cursor: 'pointer'
    }
}));

export default function Footer(props) {

    const classes = useStyle();
    const {show, children} = props;

    return (
        <div>
            {show ?
                <FlexBoxContainer flexDirection='column' className={classes.root} justifyContent='space-between'>
                    <FlexBoxItem flexBasis={null}>
                        {children}
                    </FlexBoxItem>
                    <FlexBoxItem flexBasis={null}>
                        <Container maxWidth='lg'>
                            <FlexBoxContainer justifyContent='space-between' className={classes.container}>
                                <FlexBoxItem justifySelf='center'>
                                    <FlexBoxContainer flexDirection='column' justifyContent='center'
                                                      alignItems='center'>
                                        <FlexBoxItem>
                                            <Typography variant='h6' align='center'>
                                                {strings.saleHelp}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.orderRegisterHelp}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.sendOrderProcedure}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.paymentMethods}
                                            </Typography>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <FlexBoxContainer flexDirection='column' alignItems='center'>
                                        <FlexBoxItem>
                                            <Typography variant='h6' align='center'>
                                                {strings.customerServices}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.faq}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.productReturnProcedure}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.termsOfUse}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.privacy}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.reportBug}
                                            </Typography>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <FlexBoxContainer flexDirection='column' alignItems='center'>
                                        <FlexBoxItem>
                                            <Typography variant='h6' align='center'>
                                                {strings.withUs}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.appForum}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.saleWithUs}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.jobOpportunities}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.contactUs}
                                            </Typography>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <Typography variant='subtitle1' component='span' align='center'
                                                        className={classes.typography}>
                                                {strings.aboutUs}
                                            </Typography>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                                <FlexBoxItem flexBasis='150%'>
                                    <FlexBoxContainer flexDirection='column' alignItems='center'>
                                        <FlexBoxItem>
                                            <img src={assets.eTrust} alt='E-trust logo'/>
                                        </FlexBoxItem>
                                        <FlexBoxItem>
                                            <FlexBoxContainer flexDirection='column'>
                                                <FlexBoxItem>
                                                    <Typography align='center'>
                                                        {strings.followUs}
                                                    </Typography>
                                                </FlexBoxItem>
                                                <FlexBoxItem>
                                                    <FlexBoxContainer>
                                                        <FlexBoxItem flexBasis={null}>
                                                            <img src={assets.instagram} alt='instagram logo'
                                                                 className={classes.logo}/>
                                                        </FlexBoxItem>
                                                        <FlexBoxItem flexBasis={null}>
                                                            <img src={assets.twitter} alt='twitter logo'
                                                                 className={classes.logo}/>
                                                        </FlexBoxItem>
                                                        <FlexBoxItem flexBasis={null}>
                                                            <img src={assets.aparat} alt='aparat logo'
                                                                 className={classes.logo}/>
                                                        </FlexBoxItem>
                                                        <FlexBoxItem flexBasis={null}>
                                                            <img src={assets.linkedin} alt='LinkedIn logo'
                                                                 className={classes.logo}/>
                                                        </FlexBoxItem>
                                                    </FlexBoxContainer>
                                                </FlexBoxItem>
                                            </FlexBoxContainer>
                                        </FlexBoxItem>
                                    </FlexBoxContainer>
                                </FlexBoxItem>
                            </FlexBoxContainer>
                        </Container>
                    </FlexBoxItem>
                </FlexBoxContainer>
                : children}
        </div>
    );
}

Footer.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Footer.defaultProps = {
    show: false
};