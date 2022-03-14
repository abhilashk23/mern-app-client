import React, { useEffect } from 'react'
import User from '../../images/user.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Account from '../Account/Account';
import Link from '../Link/Link';


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


function About() {

    const [value, setValue] = React.useState(0);
    const [userData, setUserData] = React.useState();
    const [links, setLinks] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const callAboutPage = async () => {
        try {

            const response = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })

            const data = await response.json();
            setUserData(data);
            setLinks(data.links);

            if (!response.status === 200) {
                const err = new Error(response.error);
                throw err;
            }


        } catch (error) {
            console.log(error);
            window.location.replace('/authenticate');
        }
    }

    const openAddLinks = (e) => {
        window.location.replace('/update');
    }

    const openDelLink = (e) => {
        window.location.replace('/delete');
    }


    useEffect(() => {
        callAboutPage();
    }, [])


    return (
        <div className="w-[70%] mx-auto px-4 sm:px-16 mt-5 mb-8 shadow-lg rounded-lg font-[GilroyRegular]">
            {userData ? (
                <div>
                    <div className='flex items-start space-x-10'>
                        <img src={User} className="w-44 h-44" />
                        <div className="flex w-full justify-between">
                            <div>
                                <h1 className='font-bold text-2xl text-gray-700'>
                                    {userData.name}
                                </h1>
                                <h1 className='font-bold text-xl text-sky-900'>
                                    {userData.profession}
                                </h1>
                            </div>
                            <div>
                                {(links.length > 0) ? ((links.length === 5) ? (<button onClick={openDelLink}>Delete Links</button>) : (<div className="grid grid-cols-2 gap-x-10"><button onClick={openAddLinks}>Add Links</button><button onClick={openDelLink}>Delete Links</button></div>)) : (<button onClick={openAddLinks}>Add Links</button>)}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start space-x-10 py-5">
                        <div className='social-links space-y-1 w-[25%]'>
                            {(links.length > 0) ? (links.map((link) => <Link key={link._id} link={link} />)) : (<h1 className="empty-linktree">User's Linktree is empty!</h1>)}
                        </div>
                        <div className='grid grid-cols-2 font-[GilroyRegular] w-[75%]'>
                            <div className='flex flex-col items-start space-y-1 font-bold text-gray-600'>
                                <p> User Id</p>
                                <p> User Name</p>
                                <p> Email</p>
                                <p> Phone</p>
                                <p> Profession</p>
                            </div>
                            <div className='flex flex-col justify-end space-y-1 font-bold text-sky-900'>
                                <p> {userData._id}</p>
                                <p> {userData.name} </p>
                                <p> {userData.email}</p>
                                <p> {userData.phone}</p>
                                <p> {userData.profession}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) :
                (
                    <div>

                    </div>
                )}
        </div>
    )
}

export default About