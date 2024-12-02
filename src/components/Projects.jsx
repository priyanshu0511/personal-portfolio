import React from 'react'
import CryptoPlace from '../assets/ProjectPics/CryptoPlace.png'
import YaniBlogs from '../assets/ProjectPics/YaniBlogs.png'
import Lyricist from '../assets/ProjectPics/Lyricist.png'
import WeatherAppReact from '../assets/ProjectPics/WeatherAppReact.png'
import ImageSearch from '../assets/ProjectPics/ImageSearch.png'
import { FaGithub } from "react-icons/fa";
import { DiCode } from "react-icons/di";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion'; // Correct import for framer-motion

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: YaniBlogs,
            nam: "Yani Blogs",
            github: "https://github.com/priyanshu0511/yani-blogs",
            live: "https://yaniblogs.netlify.app/",
            bio: 'YaniBlogs is a blogging platform built with React, TailwindCSS, and Firebase, offering a seamless experience for creating and sharing content. Users can easily write, publish, and explore blog posts, with features like real-time updates and smooth navigation, making it an ideal platform for both bloggers and readers.',
            techUsed: 'React.JS, TailwindCSS, Firebase'
        },
        {
            id: 2,
            src: CryptoPlace,
            nam: "Crypto Place",
            github: "https://github.com/priyanshu0511/crypto-place",
            live: "https://cryptoplacebypriyanshu.netlify.app/",
            bio: 'This cryptocurrency tracking platform enables users to compare coins, analyze market trends, and manage a personalized watchlist. It leverages real-time data from API calls, visualizes trends with Chart.js, and features a responsive design using Tailwind CSS. It also has a watchlist facility to help users easily track and manage their preferred cryptocurrencies.',
            techUsed: 'React.JS, TailwindCSS'
        },
        {
            id: 3,
            src: Lyricist,
            nam: "Lyricist",
            github: "https://github.com/priyanshu0511/lyricist",
            live: "https://lyricistbypriyanshu.netlify.app/",
            bio: 'Lyricist is a React-based web app that allows users to search for song lyrics quickly and easily. With a clean and intuitive interface, users can find lyrics from a wide variety of songs, offering a smooth and responsive experience for music lovers to discover their favorite tracks.',
            techUsed: 'React.JS, CSS'
        },
        {
            id: 4,
            src: WeatherAppReact,
            nam: "Weather-app (React)",
            github: "https://github.com/priyanshu0511/weather-app-react",
            live: "https://weatherbypriyanshu.netlify.app/",
            bio: 'The Weather App, built with React, provides real-time weather updates for any location. Users can check current conditions, forecasts, and detailed weather data with an intuitive, easy-to-use interface, making it a reliable tool for staying informed about the weather anywhere.',
            techUsed: 'React.JS, CSS'
        },
        {
            id: 5,
            src: ImageSearch,
            nam: "Image-Search-App",
            github: "https://github.com/priyanshu0511/image-search-app",
            live: "https://imagesearchbypriyanshu.netlify.app/",
            bio: 'The Image Search App, built with HTML, CSS, and JavaScript, allows users to search for images based on keywords. With a simple, user-friendly interface, it delivers high-quality image results quickly, making it easy to find images from a vast online collection.',
            techUsed: 'HTML, CSS, JavaScript'
        }
    ];

    return (
        <div name='projects' className='h-auto w-full bg-blue max-h-fit px-5 min-[330px]:px-10 md:px-32 mt-20'>
            <div className='text-xl md:text-4xl text-yellow font-bold border-b-4 border-gray-400 inline'>Projects</div>
            <div className='mt-8'>
                {projects.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: item.id % 2 === 0 ? -200 : 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='flex flex-col md:flex-row bg-darkblue px-6 py-4 font-mono mt-6 gap-6 items-center rounded-lg'
                    >
                        <div className='w-full lg:w-9/12'>
                            <div className='text-xl md:text-3xl font-bold text-lightblue'>{item.nam}</div>
                            <div className='text-lightblue mt-3 text-xs md:text-base'>{item.bio}</div>
                            <div className='text-yellow mt-3 text-xs md:text-base'>
                                Technologies Used: <span className='text-lightblue'>{item.techUsed}</span>
                            </div>
                            <div className='mt-4 flex gap-4 items-center'>
                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-yellow hover:text-lightblue hover:scale-110">
                                    <Tooltip title="Github">
                                        <IconButton>
                                            <FaGithub color='#ffb703' size={30} />
                                        </IconButton>
                                    </Tooltip>
                                </a>
                                |
                                <a href={item.live} target="_blank" rel="noopener noreferrer" className="text-yellow hover:text-lightblue hover:scale-110">
                                    <Tooltip title="Live Demo">
                                        <IconButton>
                                            <DiCode size={45} color='#ffb703' />
                                        </IconButton>
                                    </Tooltip>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-3/12 lg:inline-block hidden">  {/* Ensured 'block' is used */}
                            <img src={item.src} alt={item.nam} className="w-full h-full object-fill rounded-lg hover:scale-110 duration-300" />
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;