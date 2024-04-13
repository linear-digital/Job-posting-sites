import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Button1 } from "../Buttons/Buttons";
import { Link } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const user = useCurrentUser();
    const location = useLocation()
    const [hideNavab, setHideNavbar] = useState(false)
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    useEffect(()=> {
        if(location.pathname.includes('panel')){
            setHideNavbar(true)
        }
        else {
            setHideNavbar(false)
        }
    },[location])
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1  text-primary font-bold"
            >
                <Link to="/jobs" className="flex items-center">
                    Jobs
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1  text-primary font-bold"
            >
                <Link to="/contact" className="flex items-center">
                    Contact
                </Link>
            </Typography>

        </ul>
    );
    if (hideNavab) {
        return null
    }
    return (
        <div className="h-auto container mx-auto">
            <Navbar shadow={false} blurred={false} className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-transparent">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link
                        to={'/'}
                        className="mr-4 cursor-pointer py-1.5 lg:text-2xl font-semibold text-primary"
                    >
                        Jon Planet
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        {
                            user ?
                                <div className="flex items-center gap-x-1">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn m-1">Dashboard</div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <Link to={'/panel/profile'}>
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/panel/dashboard'}>
                                                    DashBoard
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <div className="flex items-center gap-x-1">
                                    <Button1
                                        role={"link"}
                                        href={"/login"}
                                        variant="text"
                                        size="sm"
                                        className="hidden lg:inline-block font-bold text-primary "
                                    >
                                        <span>Log In</span>
                                    </Button1>
                                    <Button1
                                        role={"link"}
                                        href={"/signup"}
                                        variant="gradient"
                                        size="sm"
                                        className="hidden lg:inline-block"
                                    >
                                        <span>Sign Up</span>
                                    </Button1>
                                </div>
                        }
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button1
                            role={'link'}
                            href={'/login'}
                            fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button1>
                        <Button1 role="link" href={'/signup'} fullWidth variant="gradient" size="sm" className="">
                            <span>Sign Up</span>
                        </Button1>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
}