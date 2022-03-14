import React from 'react'
import Logo from '../../images/NAVBAR-LOGO-04.png.webp';

function Footer() {
    return (
        <div className="bg-[#FFBE49]">
            <footer className="footer">
                <div className="container px-2 md:px-4 lg:px-7 py-3">
                    <div className="grid sm:flex sm:flex-wrap lg:flex-nowrap sm:-mx-4 md:py-4">
                        <div className="logo px-4 mx-auto md:mx-0 w-full sm:w-96 md:w-full lg:w-[65%] flex flex-col mb-5 ">
                            <img src={Logo} className="w-32 md:mb-2" alt="" />
                            <p>
                                Quis occaecat cillum dolor elit sit dolore velit aliqua id sit. 
                                Veniam cupidatat minim laboris est qui Lorem. Enim consectetur ea 
                                deserunt ea. Fugiat consequat est dolore exercitation pariatur dolor 
                                quis commodo exercitation laborum quis. Voluptate do id nulla irure 
                                consequat do minim culpa ipsum adipisicing.
                            </p>
                        </div>

                        <div className="px-4 sm:w-1/2 md:w-3/5 lg:w-1/4 xl:ml-52 ">
                            <h5 className="text-lg md:text-xl font-bold mb-2">Information</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2 text-sm md:text-base">
                                    {' '}
                                    <a href="/about">About Me</a>
                                </li>
                                <li className="mb-2 text-sm md:text-base">
                                    <a href="/authenticate" >Sign Up </a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/3 lg:w-1/5 md:-ml-52 lg:ml-0 mt-8 sm:mt-0 ">
                            <h5 className="text-lg md:text-xl font-bold mb-2">My account</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2 text-sm md:text-base">
                                    <a href="/authenticate">Sign In</a>
                                </li>
                            </ul>
                        </div>

                        <div className="px-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-8 sm:mt-0 ">
                            <h5 className="text-lg md:text-xl font-bold">Follow Us</h5>
                        </div>
                    </div>

                    <br />

                    <div className="copyright_div flex items-center justify-center w-72 xs:w-full sm:ml-7 md:ml-0 md:py-4">
                        <div className="copyright">
                            <p className="text-center text-sm md:text-base">
                                {' '}
                                <span className="copyright-text ">
                                    Copyright &copy; 2022. All Rights Reserved.{' '}
                                </span>{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer