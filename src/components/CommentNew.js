import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CommentsList from './CommentsList';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            // margin: theme.spacing(1),
            width: 500,
        },
    },
    myRoot: {
        margin: theme.spacing(3),
    }
}));

export default function Comment() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.myRoot}>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField
                                id="filled-textarea"
                                label="عنوان نظر..."
                                multiline
                                variant="filled"
                                // value={value}
                                // onChange={handleChange}
                            />
                        </div>
                    </form>
                </Grid>
                <Grid item>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField
                                id="filled-multiline-static"
                                label="نظر خود را اینجا بنویسید..."
                                multiline
                                rows="4"
                                variant="filled"
                                // value={value}
                                // onChange={handleChange}
                            />
                        </div>
                    </form>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        ثبت نظر
                    </Button>
                </Grid>
                <Divider/>
                <CommentsList/>
            </Grid>
        </div>
    );
}
