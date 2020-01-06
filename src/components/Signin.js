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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {strings} from "../values/strings";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
    checkboxIcon: {
        color: theme.palette.secondary.dark
    }
}));

export default function Signin() {
    const classes = useStyles();
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [checkedLogin, setCheckedLogin] = React.useState(true);


    const handleChange = prop => event => {
        if (prop === "checkedLogin") {
            setCheckedLogin(event.target.checked);
        } else if (prop === "username") {
            setUsername(event.target.value);
        } else if (prop === "email") {
            setEmail(event.target.value);
        } else if (prop === "password") {
            setPassword(event.target.value);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <Grid item xs container direction="column" spacing={2}>
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
                                        onClick={handleClickShowPassword}
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkedLogin}
                                onChange={handleChange('checkedLogin')}
                                value="checkedLogin"
                                checkedIcon={<CheckBoxOutlineBlankIcon className={classes.checkboxIcon}/>}
                                icon={<CheckBoxIcon className={classes.checkboxIcon}/>}
                            />
                        }
                        label={strings.remember}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        {strings.signIn}
                    </Button>
                </Grid>
            </Grid>

        </div>
    );
}
