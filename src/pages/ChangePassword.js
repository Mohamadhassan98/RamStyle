import React from "react";
import {Container, makeStyles, TextField} from "@material-ui/core";
import FlexBoxItem from "../tools/FlexBoxItem";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";

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
                        label='رمز عبور فعلی'
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
                        label='رمز عبور جدید'
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
                        label='تکرار رمز عبور'
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
                    <Button variant='contained' color='primary'>
                        ثبت تغییرات
                    </Button>
                </FlexBoxItem>
            </Container>
        </React.Fragment>
    );
}