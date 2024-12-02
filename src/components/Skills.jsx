import React from 'react';
import github from '../assets/Skills/github.png';
import html from '../assets/Skills/html.png';
import css from '../assets/Skills/css.png';
import javascript from '../assets/Skills/javascript.png';
import react from '../assets/Skills/react.png';
import tailwind from '../assets/Skills/tailwind.png';
import clanguage from '../assets/Skills/clanguage.png';
import python from '../assets/Skills/python.png';
import java from '../assets/Skills/java.png';
import firebase from '../assets/Skills/firebase.png';
import { ReactComponent as TechSVG } from '../assets/coding-3-85.svg'
import { motion } from 'motion/react';

const Skills = () => {
  const technologies = [
    {
      id: 1,
      src: clanguage,
      name: 'C',
      message: 'The grandparent of modern programming, where logic takes center stage!'
    },
    {
      id: 2,
      src: java,
      name: 'Java',
      message: 'Write once, run anywhere — the backbone of enterprise solutions.'
    },
    {
      id: 3,
      src: python,
      name: 'Python',
      message: 'From data to web to AI — Python does it all, effortlessly.'
    },
    {
      id: 4,
      src: html,
      name: 'HTML',
      message: 'The building blocks of every website — structure made simple.'
    },
    {
      id: 5,
      src: css,
      name: 'CSS',
      message: 'Design magic that transforms bare bones into beautiful layouts.'
    },
    {
      id: 6,
      src: javascript,
      name: 'JavaScript',
      message: 'Bringing life to the web — animations, logic, and interactivity galore.'
    },
    {
      id: 7,
      src: react,
      name: 'React.JS',
      message: 'Component-based wizardry for dynamic and scalable UIs.'
    },
    {
      id: 8,
      src: tailwind,
      name: 'TailwindCSS',
      message: 'Utility-first styling for sleek, modern designs with ease.'
    },
    {
      id: 9,
      src: firebase,
      name: 'Firebase',
      message: 'Seamless backend solutions for web and mobile apps — no server needed.'
    },
    {
      id: 10,
      src: github,
      name: 'GitHub',
      message: 'Where collaboration meets version control — the coder’s playground.'
    }
  ];


  return (
    <div name='skills' className="min-h-screen w-full bg-blue px-5 min-[330px]:px-10 md:px-32 py-12 mt-12">
      <div>
        <h1 className="text-xl md:text-4xl text-yellow font-bold border-b-4 border-gray-400 inline">
          Skills
        </h1>
        <p className="text-xs sm:text-base text-lightblue mt-6 font-mono">
          Now that you know what I do, let’s dive into the magic behind the scenes – the tech that powers my creations. 🔧✨
        </p>
      </div>
      <div className='flex'>
        <motion.div className='w-1/2 hidden xl:inline-block'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <TechSVG style={{ width: '450px' }} />

        </motion.div>

        <motion.div variants={{hidden:{opacity:0},show:{opacity:1,transition:{
          staggerChildren:0.10
        }}}} initial="hidden" whileInView="show" className="grid grid-cols-3 sm:grid-cols-4 gap-6 mt-8 mx-auto xl:mx-0">
          {technologies.map((item) => (
            <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}}
              key={item.id}
              className="relative group flex flex-col items-center md:p-4 p-2 bg-darkblue rounded-lg hover:border hover:border-yellow"
            >
              <img src={item.src} alt={item.name} className="md:w-16 md:h-16 h-8 w-8" />
              <div className="text-yellow mt-2 md:text-base text-xs">{item.name}</div>
              {/* Hover Message */}
              <div className="absolute z-40 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded p-2 bottom-[-70px] w-48 text-center transition-opacity">
                {item.message}
              </div>
            </motion.div>
          ))}
        </motion.div>




      </div>
    </div>
  );
};

export default Skills;
