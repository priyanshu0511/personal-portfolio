import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-dark-card border-t border-white/5 flex text-gray-text justify-between md:py-6 py-4 md:px-32 px-5 text-xs sm:text-sm items-center'>
        <div className='font-sans'>Made with ❤️ by Priyanshu. &#169; {new Date().getFullYear()}</div>
        <div className='flex gap-4'>
            <a href="https://github.com/priyanshu0511" target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer hover:text-primary transition-colors'><FaGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/priyanshu-singh-0511/" target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer hover:text-primary transition-colors'><FaLinkedin size={20}/></a>
            <a href="https://www.instagram.com/priyansh.you_/" target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer hover:text-primary transition-colors'><FaInstagram size={20}/></a>
        </div>
    </div>
  )
}

export default Footer