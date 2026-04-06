import React from "react";
import Button from "./common/Button";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import CodingImage from "../assets/coding-5-33.svg";

const Home = () => {
  return (
    <div
      name="home"
      className="flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-screen w-full bg-dark text-light-text px-5 min-[330px]:px-10 md:px-32 pt-20 overflow-hidden"
    >
      <div className="z-10 w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex flex-col gap-4 font-mono mb-12 lg:mb-16 font-bold">
          <motion.div
            className="text-light-text text-xl md:text-2xl font-sans"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            Hi there,
          </motion.div>
          <motion.div
            className="text-light-text text-4xl sm:text-5xl lg:text-7xl font-heading leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            My name is <span className="text-primary block mt-2">Priyanshu Singh</span>
          </motion.div>
          <motion.div
            className="text-gray-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans mt-4 h-16 md:h-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
          >
            I am a&nbsp;
            <TypeAnimation
              sequence={[
                " Front End Developer",
                1000,
                " ML Enthusiast",
                1000,
                " Gamer",
                1000,
                " Aspiring Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-secondary inline-block border-b-2 border-secondary"
              repeat={Infinity}
            />
          </motion.div>
        </div>
        
        <motion.div
          className="flex flex-wrap gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6 }}
        >
          <Link to={"contact"} smooth={true} duration={500} offset={-80}>
             <Button text={"Get in Touch"} outlined={false} />
          </Link>
          <a
            href="https://drive.google.com/file/d/1DmXswZWBtWimnKqO4rlhmZy6mc5xkEKM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
             <Button text={"Resume"} outlined={true} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.8 }}
        className="hidden lg:flex w-1/2 justify-end z-10"
      >
        <img
          src={CodingImage}
          alt="Coding Illustration"
          className="w-[450px] xl:w-[550px] drop-shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
};

export default Home;
