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
import {strings} from "../values/strings";

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
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

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

    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-username">
                            {strings.username}
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-username"
                            value={username}
                            onChange={handleChange('username')}
                            placeholder={strings.username}
                            labelWidth={70}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-username">
                            {strings.email}
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-username"
                            value={email}
                            onChange={handleChange('email')}
                            placeholder={strings.email}
                            labelWidth={40}
                        />
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
                        />
                        <FormHelperText id="standard-password-helper-text">
                            {strings.passwordHelper}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-confirmPassword">
                            {strings.confirmPassword}
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            placeholder={strings.confirmPassword}
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
                        />
                        <FormHelperText id="standard-confirm-password-helper-text">
                            {strings.passwordHelper}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        {strings.signUp}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};
