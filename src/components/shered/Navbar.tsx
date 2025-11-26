"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import NavLink from "./NavLInk";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    console.log(scrolled);
    useEffect(() => {
        if (pathname !== "/") {
            setScrolled(true); // always true on non-home pages
            return;
        }
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            className={`fixed z-50 top-0 left-0 w-full ${
                scrolled ? "bg-primary" : "bg-transparent"
            }`}>
            <nav className='flex justify-between items-center jm_container py-2'>
                <Logo />
                <div
                    className={`fixed lg:static  h-screen lg:h-auto lg:w-auto top-0 left-0 ${
                        open ? "w-4/5 bg-primary" : "w-0 overflow-hidden"
                    } transition-all ease-linear duration-700 pt-20`}>
                    <ul
                        className={`flex flex-col m-10 lg:m-0 lg:flex-row gap-4 text-lg `}>
                        <li onClick={() => setOpen(false)}>
                            <NavLink  href={"/#home"}>Home</NavLink>
                        </li>

                        <li onClick={() => setOpen(false)}>
                            <Link
                                className='hover:text-[#626DFF] font-medium'
                                href='/#skills'>
                                Skills
                            </Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <NavLink href='/projects'>Projects</NavLink>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link
                                className='hover:text-[#626DFF] font-medium'
                                href='/#experience'>
                                Experience
                            </Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link
                                className='hover:text-[#626DFF] font-medium text-nowrap whitespace-nowrap'
                                href='/#contact'>
                                Contact Me
                            </Link>
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
