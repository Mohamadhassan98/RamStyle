import React from "react";
import Slide from '@material-ui/core/Slide';
import {useScrollTrigger} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function LowerHeader(props) {
    const trigger = useScrollTrigger();

    return (
        <React.Fragment>
            <Slide direction='down' appear={false} in={!trigger}>
                <AppBar>
                    <Toolbar>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Container>
                <Box my={2}>
                    {[...new Array(120)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                        )
                        .join('\n')}
                </Box>
            </Container>
        </React.Fragment>
    );
}