import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavDrawer from './common/Drawer';

const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <div className='fixed w-full z-40 top-0 transition-all duration-300'>
            <div className='backdrop-blur-md bg-dark/80 border-b border-white/5 flex justify-between items-center px-6 py-4'>
                <div className='flex gap-1 font-heading text-xl font-bold flex-1 cursor-pointer' onClick={() => window.scrollTo(0,0)}>
                    <div className='text-light-text'>Priyanshu</div>
                    <div className='text-primary'>.dev</div>
                </div>
                <div>
                    <ul className='gap-8 font-sans font-medium hidden md:flex'>
                        {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                            <li key={section}>
                                <Link
                                    to={section}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onSetActive={() => setActive(section)}
                                    className={`${
                                        active === section
                                            ? 'text-primary'
                                            : 'text-gray-text hover:text-light-text'
                                    } transition-colors duration-300 cursor-pointer text-sm tracking-wide capitalize`}
                                >
                                    {section}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='inline-block md:hidden'>
                        <NavDrawer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
