import React from "react";
import {Container, makeStyles, TextField} from "@material-ui/core";
import FlexBoxItem from "../../tools/FlexBoxItem";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {passwordRegex, strings} from "../../values/strings";
import axios from 'axios';
import {serverUrls} from "../../values/serverurls";
import {baseUrls} from "../../values/urls";
import PropTypes from 'prop-types';
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyle = makeStyles(theme => ({
    textField: {
        margin: 10
    }
}));

export default function ChangePassword(props) {

    const [oldPassword, setOldPassword] = React.useState('');
    const [oldPasswordError, setOldPasswordError] = React.useState(' ');
    const [newPassword, setNewPassword] = React.useState('');
    const [newPasswordHelper, setNewPasswordHelper] = React.useState(strings.passwordHelper);
    const [newPasswordError, setNewPasswordError] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(' ');
    const [isLoading, setLoading] = React.useState(false);
    const [showOldPassword, setShowOldPassword] = React.useState(false);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const onSubmitPressed = () => {
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        axios.post(serverUrls.passwordChange, {
            old_password: oldPassword,
            new_password1: newPassword,
            new_password2: newPassword
        }).then(response => {
            props.history.push(baseUrls.home);
        }).catch(error => {
            if (error.response.status === 500) {
                props.setError500(true);
            } else {
                if (error.response.data.old_password) {
                    setOldPasswordError(strings.wrongPassword);
                }
                if (error.response.data.new_password1) {
                    setNewPasswordHelper(strings.commonPasswordError);
                    setNewPasswordError(true);
                }
            }
        }).finally(() => {
            setLoading(false);
        });
    };

    const errorsOff = () => {
        setNewPasswordError(false);
        setNewPasswordHelper(strings.passwordHelper);
        setConfirmPasswordError(' ');
        setConfirmPasswordError(' ');
    };

    const validateForm = () => {
        let valid = true;
        if (!oldPassword || oldPassword.toString().length === 0) {
            setOldPasswordError(strings.emptyPasswordError);
            valid = false;
        }
        if (!newPassword || !passwordRegex.test(newPassword)) {
            setNewPasswordError(true);
            setNewPasswordHelper(strings.passwordHelper);
            valid = false;
        }
        if (confirmPassword.toString() !== newPassword.toString()) {
            setConfirmPasswordError(strings.confirmPasswordNotMatch);
            valid = false;
        }
        return valid;
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
                        helperText={oldPasswordError}
                        error={oldPasswordError !== ' '}
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
                        helperText={newPasswordHelper}
                        error={newPasswordError}
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
                        helperText={confirmPasswordError}
                        error={confirmPasswordError !== ' '}
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
                    <Button variant='contained' color='primary' onClick={onSubmitPressed}>
                        {strings.saveChanges}
                        {isLoading && <CircularProgress color="inherit" style={{marginRight: '10px'}} size={20}/>}
                    </Button>
                </FlexBoxItem>
            </Container>
        </React.Fragment>
    );
}

ChangePassword.propTypes = {
    setError500: PropTypes.func.isRequired
};