import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import img2 from './pic/2.png'
import img1 from './pic/1.png'
import img3 from './pic/3.png'

const useStyles = makeStyles(theme => ({
    paper: {
        maxWidth: '100%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        direction: "rtl",
        wrap: 'nowrap',
        overflow: 'hidden',
        textAlign: 'center',
        boxShadow:"none",

    },


}));

export default function Mcomponent (props) {


    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={img2} alt="img2" />;
                        <Typography variant="h5" gutterBottom>
                            کالای اورجینال
                        </Typography>

                        <Typography  variant="body1" gutterBottom>
                            ..............................
                        </Typography>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={img1} alt="img1" />;
                        <Typography variant="h5" gutterBottom>
                            ارسال سریع و رایگان
                        </Typography>

                        <Typography  variant="body1" gutterBottom>
                            ..............................
                        </Typography>


                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={img3} alt="img3+
            " />;
                        <Typography variant="h5" gutterBottom>
                            ضمانت بازگشت کالا
                        </Typography>

                        <Typography  variant="body1" gutterBottom>
                            ..............................
                        </Typography>

                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}