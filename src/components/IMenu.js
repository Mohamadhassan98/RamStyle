import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {FaClipboardList, FaPhone, FaQuestion} from 'react-icons/fa';
import {TiGroup} from 'react-icons/ti';


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: '100%',
        margin: "0 auto"
    },
    link: {

        textDecoration: "none",
        fontSize: "20px"
    },
    paper: {
        maxWidth: '80%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        direction: "rtl",
        wrap: 'nowrap',
        overflow: 'hidden'
    },

}));

export default function MATN(props) {


    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>


            <div className={classes.root}>
                <Button><a href="/about" className={classes.link}><TiGroup/> درباره ی ما</a></Button>
                <Button><a href="/tamas" className={classes.link}> <FaPhone/> تماس با ما</a></Button>
                <Button><a href="/" className={classes.link}><FaClipboardList/> شرایط و ضوابط</a></Button>
                <Button><a href="/" className={classes.link}><FaQuestion/> سوالات متداول</a></Button>
            </div>


        </Paper>


    );
}