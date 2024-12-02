import React from 'react'
import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

function SocialLinks() {

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center px-4 w-40 h-14 bg-darkblue ml-[-100px] hover:ml-0 duration-300'>
                <a className='flex justify-between items-center text-yellow w-full cursor-none hover:text-lightblue duration-100' href="https://github.com/priyanshu0511" target="_blank" rel="noopener noreferrer">Github<FaGithub size={25}/></a>
            </li>
            <li className='flex justify-between items-center px-4 w-40 h-14 bg-darkblue ml-[-100px] hover:ml-0 duration-300'>
                <a className='flex justify-between items-center text-yellow w-full cursor-none hover:text-lightblue duration-100' href="https://www.linkedin.com/in/priyanshu-singh-770401260/" target="_blank" rel="noopener noreferrer">LinkedIn<FaLinkedin size={25}/></a>
            </li>
            <li className='flex justify-between items-center px-4 w-40 h-14 bg-darkblue ml-[-100px] hover:ml-0 duration-300'>
                <a className='flex justify-between items-center text-yellow w-full cursor-none hover:text-lightblue duration-100' href="https://www.instagram.com/priyansh.you_/" target="_blank" rel="noopener noreferrer">Instagram<FaInstagram size={25}/></a>
            </li>
            <li className='flex justify-between items-center px-4 w-40 h-14 bg-darkblue ml-[-100px] hover:ml-0 duration-300'>
                <a className='flex justify-between items-center text-yellow w-full cursor-none hover:text-lightblue duration-100' href="mailto:priyanshu05112@gmail.com">Email<HiOutlineMail size={25}/></a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks