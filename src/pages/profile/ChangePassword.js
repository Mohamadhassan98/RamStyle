import React from "react";
import {Container, makeStyles, TextField} from "@material-ui/core";
import FlexBoxItem from "../../tools/FlexBoxItem";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {strings} from "../../values/strings";
import axios from 'axios';
import {serverUrls} from "../../values/serverurls";
import {baseUrls} from "../../values/urls";

const useStyle = makeStyles(theme => ({
    textField: {
        margin: 10
    }
}));

export default function ChangePassword(props) {

    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showOldPassword, setShowOldPassword] = React.useState(false);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const onSaveButtonPressed = () => {
        axios.post(serverUrls.passwordChange, {
            old_password: oldPassword,
            new_password1: newPassword,
            new_password2: newPassword
        }).then(response => {
            props.history.push(baseUrls.profile);
        }).catch(error => {
            //TODO Show appropriate error
            window.alert('TODO: Show appropriate error');
        });
    };

    const classes = useStyle();

    return (
        <React.Fragment>
            <Container maxWidth='xs'>
                <FlexBoxItem display='flex'>
                    <TextField
                        className={classes.textField}
                        id='oldPassword'
                        autoFocus
                        name='oldPassword'
                        label={strings.oldPassword}
                        value={oldPassword}
                        onChange={event => setOldPassword(event.target.value)}
                        variant='outlined'
                        fullWidth
                        type={showOldPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowOldPassword(!showOldPassword)}
                                        edge="end"
                                    >
                                        {showOldPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        id='newPassword'
                        className={classes.textField}
                        name='newPassword'
                        label={strings.newPassword}
                        value={newPassword}
                        variant='outlined'
                        onChange={event => setNewPassword(event.target.value)}
                        fullWidth
                        type={showNewPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        edge="end"
                                    >
                                        {showNewPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        className={classes.textField}
                        id='confirmPassword'
                        name='confirmPassword'
                        label={strings.confirmPassword}
                        value={confirmPassword}
                        variant='outlined'
                        onChange={event => setConfirmPassword(event.target.value)}
                        fullWidth
                        type={showConfirmPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex' justifyContent='center'>
                    <Button variant='contained' color='primary' onClick={onSaveButtonPressed}>
                        {strings.saveChanges}
                    </Button>
                </FlexBoxItem>
            </Container>
        </React.Fragment>
    );
}