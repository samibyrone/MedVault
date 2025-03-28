// import React from "react";
//
// export const Navbar = () => {
//     return (
//         <>
//             <nav className='bg-gray-400 text-white px-8 pt-4 md:px-16 lg:px-24'>
//                 <div className='container py-2 flex justify-center md:justify-between items-center'>
//                     <div className='text-4xl font-bold hidden md:inline'>MedVault</div>
//                     <div className='space-x-10 font-bold'>
//                         <a href='#home' className='hover:text-gray-400'>
//                             Home
//                         </a>
//                         <a href='#service' className='hover:text-gray-400'>
//                             Services
//                         </a>
//                         <a href='#about' className='hover:text-gray-400'>
//                             About Us
//                         </a>
//                         <a href='#project' className='hover:text-gray-400'>
//                             Appointments
//                         </a>
//                         <a href='#contact' className='hover:text-gray-400'>
//                             Contact
//                         </a>
//                     </div>
//                     <button
//                         className='bg-blue-400 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
//                         Login
//                     </button>
//                     <button
//                         className='bg-blue-300 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
//                         Sign Up
//                     </button>
//                 </div>
//             </nav>
//         </>
//     );
// };


import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layout/Button.jsx";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {Contact} from "../models/Contact";

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    const openForm = () => {
        setShowForm(true);
        setMenu(false);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div className=" fixed w-full z-10 text-white">
            <div>
                <div className=" flex flex-row justify-between p-5 md:px-32 px-5 text-black bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className=" flex flex-row items-center cursor-pointer">
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <h1 className=" text-2xl font-semibold">MedVault.</h1>
                        </Link>
                    </div>

                    <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
                        <Link to="home" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Home
                        </Link>
                        <Link to="about" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            About Us
                        </Link>
                        <Link to="services" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Services
                        </Link>
                        <Link to="doctors" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Appointments
                        </Link>
                        <Link to="blog" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Blog
                        </Link>
                    </nav>

                    <div className=" hidden lg:flex">
                        <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={openForm}>
                            Contact Us
                        </button>
                    </div>

                    {showForm && <Contact closeForm={closeForm} />}

                    <div className=" lg:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div
                    className={`${
                        menu ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
                >
                    <Link to="home" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        About Us
                    </Link>
                    <Link to="services" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        Services
                    </Link>
                    <Link to="doctors" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        Appointments
                    </Link>
                    <Link to="blog" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        Blog
                    </Link>

                    <div className=" lg:hidden">
                        <Button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={openForm}>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default Navbar;