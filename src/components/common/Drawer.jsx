import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/Button';
import { Link } from 'react-scroll';
import { IoIosMenu } from "react-icons/io";


export default function NavDrawer() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  return (
    <div>
      <IconButton onClick={() => { setOpen(true) }}><IoIosMenu className='text-gray' size={25} /></IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="links font-sans text-light-text font-medium text-base w-[60vw] md:w-[40vw] p-8 h-screen bg-dark-card border-l border-white/5 shadow-2xl">
        {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                            <div className='mb-6' key={section}>
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
                                    } hover:cursor-pointer transition-all duration-200 text-lg capitalize tracking-wide`}
                                >
                                    {section}
                                </Link>
                            </div>
                        ))}
        </div>
      </Drawer>
    </div>
  );
}
