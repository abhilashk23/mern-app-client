import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


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
                <Box p={3}>
                    <Typography
                        style={{
                            fontSize: '18px',
                            fontWeight: '300',
                            fontFamily: 'GilroyRegular',
                        }}
                    >
                        {children}
                    </Typography>
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


function Account() {
    const [value, setValue] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();
    const [number, setNumber] = React.useState();
    const [profession, setProfession] = React.useState();
    const [name, setName] = React.useState();

    const [loginEmail, setLoginEmail] = React.useState('');
    const [loginPass, setLoginPass] = React.useState();


    const [sucess, setSucess] = React.useState(false);
    const [error, setError] = React.useState(false);





    {/* --------------------------This block is for Show Password Feature -----------------------*/ }
    const [values, setValues] = React.useState({
        showPassword: false,
        showConfirmPassword: false
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };
    // ---------------------- Show Password Feature block ends ---------------------------


    //Login Button

    const loginBtnClick = async (e) => {
        e.preventDefault();
        let userLogin = {
            email: loginEmail,
            password: loginPass
        }

        console.log(userLogin);

        try {

            const response = await fetch("/login", {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userLogin)
            })

            const data = await response.json();
            console.log(response);
            if (response.status === 400 || !data) {
                window.alert("Invalid Credentials");
                console.log("Invalid Credentials");
            }
            else {
                window.alert("Login Success");
                console.log("Login Success");
                window.location.replace('/');
            }



        } catch (error) {

        }
    }






    // Sign Up Button
    const signUpBtnClick = async (e) => {
        e.preventDefault();

        let user = {
            name: name,
            email: email,
            phone: number,
            profession: profession,
            password: password,
            confirmPassword: confirmPassword
        }
        console.log(user);

        try {

            const response = await fetch("/register", {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();

            if (response.status === 400 || !data) {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            }
            else {
                window.alert("Success");
                console.log("Success");
                window.location.replace('/authenticate');
            }


        } catch (error) {

        }
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className=''>
            <AppBar position="static"
                color="transparent"
                style={{ width: '100%', boxShadow: 'none' }}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: 'black' } }} centered>
                    <Tab
                        label={<span className="tab_label">Log in</span>}
                        sx={{ '&.Mui-selected': { color: 'black' } }}
                    />
                    <Tab
                        label={<span className="tab_label">Sign up</span>}
                        sx={{ '&.Mui-selected': { color: 'black' } }}
                    />
                </Tabs>
                <TabPanel value={value} index={1} className="text_content">

                    <TextField
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label={
                            <span className=''>
                                Name<span style={{ color: 'red', }}>*</span>
                            </span>
                        }
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
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        label={
                            <span className=''>
                                Profession<span style={{ color: 'red', }}>*</span>
                            </span>
                        }
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
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        label={
                            <span className=''>
                                Mobile<span style={{ color: 'red' }}>*</span>
                            </span>
                        }
                        type="tel"
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label={
                            <span className=''>
                                Email<span style={{ color: 'red' }}>*</span>
                            </span>
                        }
                        type="email"
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
                        value={password}
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        label={
                            <span className=''>
                                Password<span style={{ color: 'red' }}>*</span>
                            </span>
                        }
                        InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={values.showConfirmPassword ? 'text' : 'password'}
                        label={
                            <span className=''>
                                Confirm Password<span style={{ color: 'red' }}>*</span>
                            </span>
                        }
                        InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownConfirmPassword}
                                    >
                                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
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

                    <p style={{ color: 'red', }} className="required">
                        * Required Fields
                    </p>

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
                        onClick={signUpBtnClick}
                        disabled={!name || !email || !number || !password || !confirmPassword || password !== confirmPassword}
                    >
                        Join Us
                    </Button>
                    {sucess && <h2 className="sucess ">Login Sucess... Redirecting</h2>}
                    {error && <h2 className="error ">There was some error</h2>}
                </TabPanel>

                <TabPanel value={value} index={0} className="text_content">
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        label={
                            <span className=''>
                                Email Address
                            </span>
                        }
                        type="email"
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
                        value={loginPass}
                        onChange={(e) => setLoginPass(e.target.value)}
                        label={
                            <span className=''>
                                Password
                            </span>
                        }
                        type={values.showPassword ? 'text' : 'password'}
                        InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
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
                            fontFamily: 'GilroyRegular',
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
                        disabled={!loginEmail || !loginPass}
                        onClick={loginBtnClick}
                    >
                        Login
                    </Button>
                    {sucess && <h2 className="sucess">Login Sucess... Redirecting</h2>}
                    {error && <h2 className="error">There was some error</h2>}
                </TabPanel>
            </AppBar>
        </div>
    )
}

export default Account