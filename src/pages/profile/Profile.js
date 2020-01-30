import React from "react";
import {Container, makeStyles, TextField} from "@material-ui/core";
import FlexBoxItem from "../../tools/FlexBoxItem";
import Button from "@material-ui/core/Button";
import {emailRegex, strings} from "../../values/strings";
import axios from 'axios';
import {serverUrls} from "../../values/serverurls";
import Default from '../../assets/default.png';
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";
import {baseUrls, pageTitles} from "../../values/urls";
import {Redirect} from "react-router";

const useStyle = makeStyles(theme => ({
    avatar: {
        width: 250,
        height: 250
    },
    textField: {
        margin: 10
    },
    image: {
        borderRadius: "50%",
        width: '250px',
        height: '250px'
    },
}));

export default function Profile(props) {
    let longPressed = false;
    let file;
    let longPress;
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState(' ');
    const [photo, setPhoto] = React.useState(Default);
    const [isLoading, setLoading] = React.useState(false);
    const [profilePic, setProfilePic] = React.useState('');
    const [error500, setError500] = React.useState(false);


    const clearProfile = () => {
        setPhoto(Default);
        setProfilePic(null);
        longPressed = true;
    };

    const profilePress = () => {
        longPress = setTimeout(clearProfile, 1000);
    };

    const choosePicture = () => {
        file.click();
    };

    const profileRelease = () => {
        clearTimeout(longPress);
        if (!longPressed) {
            choosePicture();
        }
        longPressed = false;
    };

    const selectImages = (event) => {
        if (event.target.files[0] != null) {
            setPhoto(URL.createObjectURL(event.target.files[0]));
            setProfilePic(event.target.files[0]);
        }
    };

    React.useEffect(() => {
        axios.get(serverUrls.user).then(response => {
            const {first_name: firstName, last_name: lastName, username, email} = response.data;
            setEmail(email);
            setUsername(username);
            setLastName(lastName);
            setName(firstName);
        }).catch(error => {
            //TODO Show appropriate error
            console.log(error);
        });
    }, []);

    const validateForm = () => {
        let valid = true;
        if (!email || !emailRegex.test(email)) {
            setEmailError(strings.invalidEmail);
            valid = false;
        }
        return valid;
    };

    const onSaveChangesClicked = () => {
        if (!validateForm()) {
            return;
        }
        const data = {
            email: email,
            first_name: name,
            last_name: lastName
        };
        setLoading(true);
        axios.put(serverUrls.user, data).then(response => {
            props.history.push(baseUrls.home);
        }).catch(error => {
            if (error.response.status === 500) {
                setError500(true);
            } else {
                window.alert(error.response.status);
            }
        }).finally(() => {
            setLoading(false);
        });
    };

    const errorsOff = () => {
        setEmailError(' ');
    };

    React.useEffect(() => {
        document.title =pageTitles.profile;
    }, []);


    const classes = useStyle();

    return (
        <React.Fragment>
            {error500 &&
            <Redirect to={baseUrls.error500}/>
            }
            <Container maxWidth='xs'>
                <FlexBoxItem display='flex' justifyContent='center'>
                    <div className={classes.profile} onMouseDown={profilePress}
                         onMouseUp={profileRelease}>
                        <Tooltip title={strings.changeProfile} placement="right">
                            <img src={photo} className={classes.image} alt={photo}/>
                        </Tooltip>
                        <div className="MasterProfile">
                            <div className="col-sm-4">
                                <input style={{display: 'none'}} className="FormField__Button mr-20"
                                       type="file"
                                       accept='image/*'
                                       onChange={selectImages}
                                       ref={fileInput => file = fileInput}/>
                            </div>
                        </div>
                    </div>
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        className={classes.textField}
                        id='name'
                        autoFocus
                        name='name'
                        label={strings.name}
                        value={name}
                        onChange={event => setName(event.target.value)}
                        variant='filled'
                        fullWidth
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        id='lastName'
                        className={classes.textField}
                        name='lastName'
                        label={strings.lastName}
                        value={lastName}
                        variant='filled'
                        onChange={event => setLastName(event.target.value)}
                        fullWidth
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        className={classes.textField}
                        id='username'
                        name='username'
                        label={strings.username}
                        value={username}
                        variant='filled'
                        onChange={event => setUsername(event.target.value)}
                        fullWidth
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex'>
                    <TextField
                        id='email'
                        className={classes.textField}
                        name='email'
                        label={strings.email}
                        value={email}
                        variant='filled'
                        onChange={event => setEmail(event.target.value)}
                        fullWidth
                        inputProps={{
                            inputMode: "email"
                        }}
                        error={emailError !== ' '}
                        helperText={emailError}
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex' justifyContent='center'>
                    <Button variant='contained' color='primary' onBlur={errorsOff} onClick={onSaveChangesClicked}>
                        {strings.saveChanges}
                        {isLoading && <CircularProgress color="inherit"
                                                        size={20}/>}
                    </Button>
                </FlexBoxItem>
            </Container>
        </React.Fragment>
    );
}