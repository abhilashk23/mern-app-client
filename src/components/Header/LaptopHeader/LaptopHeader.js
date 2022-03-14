import React, { Fragment, useEffect } from 'react'
import Logo from '../../../images/NAVBAR-LOGO-04.png.webp';
import { Link } from 'react-router-dom';

function LaptopHeader() {

    const [userData, setUserData] = React.useState();

    const callAboutPage = async () => {
        try {

            const response = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Contorl-Access-Origin": "*"
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
    return (
        <Fragment>
            <nav className="bg-white overflow-hidden font-[GilroyRegular]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative flex items-center justify-between h-24">
                        <div className="flex items-center">
                            <div className="">
                                <img className="w-20 h-20 self-center" src={Logo} />
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="flex items-center space-x-4">
                                <Link to="/">
                                    <p className="text-black text-lg px-3 py-2 font-medium font-[GilroyRegular]">
                                        Home
                                    </p>
                                </Link>
                                {userData ? (
                                    <div className="flex items-center space-x-4">
                                        <Link to="/about">
                                            <p className="text-black text-lg px-3 py-2 font-medium font-[GilroyRegular]">
                                                {userData.name.split(' ')[0]}
                                            </p>
                                        </Link>
                                        <Link to="/logout">
                                            <p className="text-black text-lg px-3 py-2 font-medium font-[GilroyRegular]">
                                                Logout
                                            </p>
                                        </Link>
                                    </div>
                                ) :
                                    (
                                        <div className="flex items-center space-x-4">
                                            <Link to="/authenticate">
                                                <p className="text-black text-lg px-3 py-2 font-medium font-[GilroyRegular]">
                                                    Login/SignUp
                                                </p>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default LaptopHeader