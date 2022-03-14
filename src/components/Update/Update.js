import React, { useEffect } from 'react'
import User from '../../images/user.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Account from '../Account/Account';
import { TextField, Button } from '@mui/material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Update() {

    const [value, setValue] = React.useState(0);
    const [userData, setUserData] = React.useState();
    const [name, setName] = React.useState();
    const [linkTitle, setLinkTitle] = React.useState();
    const [url, setUrl] = React.useState();
    const [email, setEmail] = React.useState();
    const [profession, setProfession] = React.useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const callAboutPage = async () => {
        try {

            const response = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })

            const data = await response.json();
            setUserData(data);

            if (!response.status === 200) {
                const err = new Error(response.error);
                throw err;
            }


        } catch (error) {
            console.log(error);
            window.location.replace('/authenticate');
        }
    }

    const callAddLinks = async (e) => {

        e.preventDefault();

        let user = {
            email: userData.email,
            url: url,
            linkTitle: linkTitle
        };

        console.log(user);
        try {

            const response = await fetch("/addlinks", {
                method: "PATCH",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            const data = await response.json();

            if(!data || response.status === 400){
                window.alert("Error in adding links");
            }
            else{
                window.alert("Links added");
                window.location.replace('/about');
            }


        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        callAboutPage();
    }, [])


    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-16 mt-5 mb-8 shadow-xl drop-shadow-xl rounded-lg font-[GilroyRegular]">
            {userData ? (
                <div>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={userData.name}
                        label={
                            <span className=''>
                                Name<span style={{ color: 'red', }}>*</span>
                            </span>
                        }
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        margin="normal"
                        sx={{
                            '& label.Mui-focused': {
                                color: 'black',

                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',

                                },
                            },
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={userData.email}
                        label={
                            <span className=''>
                                Email<span style={{ color: 'red', }}>*</span>
                            </span>
                        }
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        margin="normal"
                        sx={{
                            '& label.Mui-focused': {
                                color: 'black',

                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',

                                },
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        variant="outlined"
                        value={linkTitle}
                        label={
                            <span className=''>
                                Link Title<span style={{ color: 'red', }}>*</span>
                            </span>
                        }
                        onChange={(e) => setLinkTitle(e.target.value)}
                        type="text"
                        margin="normal"
                        sx={{
                            '& label.Mui-focused': {
                                color: 'black',

                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',

                                },
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        variant="outlined"
                        value={url}
                        label={
                            <span className=''>
                                URL<span style={{ color: 'red', }}>*</span>
                            </span>
                        }
                        onChange={(e) => setUrl(e.target.value)}
                        type="text"
                        margin="normal"
                        sx={{
                            '& label.Mui-focused': {
                                color: 'black',

                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',

                                },
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: 'black',
                            color: 'white',
                            border: '2px solid black',
                            AppBarShadow: 'none',
                            width: '100%',
                            marginTop: '3%',
                            ':hover': {
                                bgcolor: 'white',
                                color: 'black',
                                border: '2px solid black',
                                AppBarShadow: 'none',
                            },
                            ':disabled': {
                                backgroundColor: 'rgb(212, 212, 216)',
                                color: 'white',
                                border: '2px solid rgb(212, 212, 216)',
                                AppBarShadow: 'none',
                            },
                        }}
                        disabled={!url || !linkTitle}
                        onClick={callAddLinks}
                    >
                        Save
                    </Button>

                </div>


            ) : (<Account />)}
        </div>
    )
}

export default Update