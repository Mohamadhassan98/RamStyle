import React from "react";
import {Container, makeStyles, TextField} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FlexBoxItem from "../../tools/FlexBoxItem";
import Button from "@material-ui/core/Button";
import {assets} from "../../values/assets";
import {strings} from "../../values/strings";
import axios from 'axios';
import {serverUrls} from "../../values/serverurls";
import Default from '../../assets/default.png';
import AvatarEditor from 'react-avatar-editor'
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyle = makeStyles(theme => ({
    avatar: {
        width: 250,
        height: 250
    },
    textField: {
        margin: 10
    },
    image:{
        borderRadius:"50%",
        width:'250px',
            height:'250px'
    },
//     profile: {
//         padding: '6px',
//         textAlign: 'center',
//         animationName: 'fadeIn',
//         animationDuration: '.9s',
//         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.44)',
//         background:' #B71C1C',
//         position: 'relative',
//         margin: '5% auto 10px'
// }


}));

export default function Profile(props) {
    let longPressed = false;
    let file;
    let longPress;
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [photo, setPhoto] = React.useState(Default);
    const [profilePic, setProfilePic] = React.useState('');
    const [photoCleared, setPhotoCleared] = React.useState(false);

    const clearProfile = () => {
        setPhoto(Default);
        setProfilePic(null);
        setPhotoCleared(true);
        longPressed = true;
        // file.value = null;
    };

    const profilePress = () =>{
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
        if (event.target.files[0] !=null) {
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

    const classes = useStyle();

    return (
        <React.Fragment>
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
                    />
                </FlexBoxItem>
                <FlexBoxItem display='flex' justifyContent='center'>
                    <Button variant='contained' color='primary'>
                        {strings.saveChanges}
                    </Button>
                </FlexBoxItem>
            </Container>
        </React.Fragment>
    );
}