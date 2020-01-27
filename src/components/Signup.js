import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import {emailRegex, passwordRegex, strings} from "../values/strings";
import axios from 'axios';
import {serverUrls} from "../values/serverurls";
import PropTypes from 'prop-types';
import {baseUrls} from "../values/urls";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 300,
    },
}));

//fixme remove placeholders
export default function Signup(props) {

    const classes = useStyles();
    const [username, setUsername] = React.useState("");
    const [usernameError, setUsernameError] = React.useState(' ');
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(' ');
    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(strings.passwordHelper);
    const [passwordErrorEnabled, setPasswordErrorEnabled] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(' ');
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);

    const handleChange = prop => event => {
        if (prop === "username") {
            setUsername(event.target.value);
        } else if (prop === "email") {
            setEmail(event.target.value);
        } else if (prop === "password") {
            setPassword(event.target.value);
        } else if (prop === "confirmPassword") {
            setConfirmPassword(event.target.value);
        }
    };

    const handleClickShowPassword = prop => event => {
        if (prop === "password") {
            setShowPassword(!showPassword);
        } else if (prop === "confirmPassword") {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const onSubmitPressed = () => {
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        axios.post(serverUrls.signUp, {
            username: username,
            email: email,
            password1: password,
            password2: password
        }).then(response => {
            props.setLoggedIn(true);
            props.history.push(baseUrls.home);
        }).catch(error => {
            if (error.response.data.username) {
                setUsernameError(strings.usernameAlreadyExists);
            }
            if (error.response.data.email) {
                setEmailError(strings.emailAlreadyExists);
            }
            if (error.response.data.password1) {
                setPasswordError(strings.commonPasswordError);
            }
        }).finally(() => {
            setLoading(false);
        });
    };

    const errorsOff = () => {
        setUsernameError(' ');
        setPasswordErrorEnabled(false);
        setPasswordError(strings.passwordHelper);
        setConfirmPasswordError(' ');
        setEmailError(' ');
    };

    const validateForm = () => {
        let valid = true;
        if (!username || username.toString().length === 0) {
            setUsernameError(strings.emptyUsernameError);
            valid = false;
        }
        if (!password || !passwordRegex.test(password)) {
            setPasswordErrorEnabled(true);
            valid = false;
        }
        if (confirmPassword.toString() !== password.toString()) {
            setConfirmPasswordError(strings.confirmPasswordNotMatch);
            valid = false;
        }
        if (!email || !emailRegex.test(email)) {
            setEmailError(strings.invalidEmail);
            valid = false;
        }
        return valid;
    };

    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="username">
                            {strings.username}
                        </InputLabel>
                        <OutlinedInput
                            id="username"
                            value={username}
                            onChange={handleChange('username')}
                            placeholder={strings.username}
                            labelWidth={70}
                            error={usernameError !== ' '}
                            required
                        />
                        <FormHelperText error={usernameError !== ' '} id="username-helper">
                            {usernameError}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="username">
                            {strings.email}
                        </InputLabel>
                        <OutlinedInput
                            id="username"
                            value={email}
                            onChange={handleChange('email')}
                            placeholder={strings.email}
                            labelWidth={40}
                            error={emailError !== ' '}
                            required
                        />
                        <FormHelperText error={emailError !== ' '} id="password-helper">
                            {emailError}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                            {strings.password}
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleChange('password')}
                            placeholder={strings.password}
                            error={passwordErrorEnabled}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword('password')}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={65}
                            required
                        />
                        <FormHelperText error={passwordErrorEnabled} id="password-helper">
                            {passwordError}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="confirmPassword">
                            {strings.confirmPassword}
                        </InputLabel>
                        <OutlinedInput
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            placeholder={strings.confirmPassword}
                            error={confirmPasswordError !== ' '}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword('confirmPassword')}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={100}
                            required
                        />
                        <FormHelperText error={confirmPasswordError !== ' '} id="confirmPassword-helper">
                            {confirmPasswordError}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={onSubmitPressed} onBlur={errorsOff}>
                        {strings.signUp}
                        {isLoading && <CircularProgress color="inherit" style={{marginRight: '10px'}} size={20}/>}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

Signup.propTypes = {
    setLoggedIn: PropTypes.func.isRequired
};