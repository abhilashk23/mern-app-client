import React, { useState, useEffect } from 'react'
import Logo from '../../../images/NAVBAR-LOGO-04.png.webp';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import {
    UserIcon,
    HeartIcon,
    ShoppingBagIcon,
} from '@heroicons/react/outline';
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

let user = localStorage.getItem('UserName');

function MobileHeader() {
    const theme = useTheme();
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);

    const [userData, setUserData] = React.useState();

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
        }
    }


    useEffect(() => {
        callAboutPage();
    }, [])


    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className='flex items-center font-[GilroyRegular]'>
                <div className="-mr-2 flex lg:hidden">
                    <button
                        onClick={handleDrawerOpen}
                        type="button"
                        className="mt-2 inline-flex items-center justify-center p-2 rounded-md text-black outline-none bg-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!open ? (
                            <svg
                                className="block h-8 w-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-8 w-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className='mx-auto'>
                    <Link to='/'><img src={Logo} className='w-24 h-24' /></Link>
                </div>
            </div>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    <div className='px-4 py-5 grid grid-rows-6 gap-3'>
                        <Link to='/' onClick={handleDrawerClose} className="hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[GilroyRegular] hover:underline">
                            Home
                        </Link>
                        {userData ? (
                            <div className='px-4 py-5 grid grid-rows-6 gap-3'>
                                <Link to='/about' onClick={handleDrawerClose} className="hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[GilroyRegular] hover:underline">
                                    {userData.name.split(" ")[0]}
                                </Link>
                                <Link to='/logout' onClick={handleDrawerClose} className="hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[GilroyRegular] hover:underline">
                                    Logout
                                </Link>
                            </div>
                        ) : (
                            <div className='px-4 py-5 grid grid-rows-6 gap-3'>
                                <Link to='/authenticate' onClick={handleDrawerClose} className="hover:font-bold transition transform duration-150 ease-out cursor-pointer font-[GilroyRegular] hover:underline">
                                    Login/SignUp
                                </Link>
                            </div>
                        )}
                    </div>
                </List>
                <Divider />
            </Drawer>
        </div>
    )
}


export default MobileHeader