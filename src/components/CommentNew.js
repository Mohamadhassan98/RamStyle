import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CommentsList from './CommentsList';
import PropTypes from 'prop-types';
import {strings} from "../values/strings";
import axios from 'axios';
import {serverUrls} from "../values/serverurls";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            width: 500,
        },
    },
    myRoot: {
        margin: theme.spacing(3),
    }
}));

export default function Comment(props) {
    const classes = useStyles();

    const [commentSuccessful, setCommentSuccessful] = React.useState(false);

    const [commentBody, setCommentBody] = React.useState('');

    const saveComment = () => {
        axios.post(serverUrls.createComment, {
            product: props.product.id,
            text: commentBody
        }).then(response => {
            setCommentSuccessful(true);
        }).catch(error => {
            if (error.response && error.response.status === 500) {
                props.setError500(true);
            } else {
                window.alert(`Error while saving comment ${error}`);
            }
        });
    };


    return (
        <div className={classes.myRoot}>
            <Dialog
                open={commentSuccessful}
                onClose={() => setCommentSuccessful(false)}
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{
                        color: 'green'
                    }}>
                        {strings.commentSuccessful}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField
                                id="filled-multiline-static"
                                label={props.isLoggedIn ? (props.product.comment ? strings.commentBodyLabel : strings.purchaseToComment) : strings.signInToComment}
                                multiline
                                rows="4"
                                variant="filled"
                                value={commentBody}
                                InputProps={{
                                    readOnly: !props.isLoggedIn || !props.product.comment
                                }}
                                onChange={(event => setCommentBody(event.target.value))}
                            />
                        </div>
                    </form>
                </Grid>
                {props.isLoggedIn && props.product.comment &&
                <Grid item>
                    <Button variant="contained" color="primary" onClick={saveComment}>
                        {strings.saveComment}
                    </Button>
                </Grid>
                }
                <Divider/>
                <CommentsList comments={props.comments}/>
            </Grid>
        </div>
    );
}

Comment.propTypes = {
    comments: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    setError500: PropTypes.func.isRequired
};