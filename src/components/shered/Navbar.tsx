"use client"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import NavLink from "./NavLInk";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='fixed z-50 bg-white top-0 left-0 w-full '>
            <nav className='flex justify-between items-center jm_container py-3'>
                <Logo />
                <div
                    className={`fixed lg:static bg-white h-screen lg:h-auto lg:w-auto top-0 left-0 ${
                        open ? "w-4/5" : "w-0 overflow-hidden"
                    } transition-all ease-linear duration-500`}>
                    <ul
                        className={`flex flex-col m-10 lg:m-0 lg:flex-row gap-4 text-lg`}>
                        <li>
                            <NavLink href={"/#home"}>Home</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to={"#about"} className={({isActive}) => isActive ? "gradient_text" : ""}>About me</NavLink> */}
                            <Link href='/#about'>About Me</Link>
                        </li>
                        <li>
                            {/* <NavLink to={"service"} className={({isActive}) => isActive ? "gradient_text" : ""}>Service</NavLink> */}
                            <Link href='/#service'>Services</Link>
                        </li>
                        <li>
                            {/* <NavLink to={"project"} className={({isActive}) => isActive ? "gradient_text" : ""}>Project</NavLink> */}
                            <NavLink href='/projects'>Projects</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to={"contact"} className={({isActive}) => isActive ? "gradient_text" : ""}>Contact Me</NavLink> */}
                            <Link href='/#contact'>Contact Me</Link>
                        </li>
                    </ul>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className='block lg:hidden'>
                    {open ? (
                        <FaTimes className='text-5xl' />
                    ) : (
                        <FaBars className='text-5xl' />
                    )}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
