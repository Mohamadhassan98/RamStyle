import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(4),
    },
    inline: {
        display: 'inline',
    },
}));

export default function CommentsList(props) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {props.comments.map(comment =>
                <div key={comment.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {comment.text}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                </div>
            )}
        </List>
    );
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};