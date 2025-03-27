import React from "react";

export const Navbar = () => {
    return (
        <>
            <nav className='bg-gray-400 text-white px-8 pt-4 md:px-16 lg:px-24'>
                <div className='container py-2 flex justify-center md:justify-between items-center'>
                    <div className='text-4xl font-bold hidden md:inline'>MedVault</div>
                    <div className='space-x-10 font-bold'>
                        <a href='#home' className='hover:text-gray-400'>
                            Home
                        </a>
                        <a href='#service' className='hover:text-gray-400'>
                            Services
                        </a>
                        <a href='#about' className='hover:text-gray-400'>
                            About Us
                        </a>
                        <a href='#project' className='hover:text-gray-400'>
                            Appointments
                        </a>
                        <a href='#contact' className='hover:text-gray-400'>
                            Contact
                        </a>
                    </div>
                    <button
                        className='bg-blue-400 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                        Login
                    </button>
                    <button
                        className='bg-blue-300 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                        Sign Up
                    </button>
                </div>
            </nav>
        </>
    );
};
