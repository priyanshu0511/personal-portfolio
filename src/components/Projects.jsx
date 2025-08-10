import React from "react";
import CryptoPlace from "../assets/ProjectPics/CryptoPlace.png";
import YaniBlogs from "../assets/ProjectPics/YaniBlogs.png";
import Lyricist from "../assets/ProjectPics/Lyricist.png";
import WeatherAppReact from "../assets/ProjectPics/WeatherAppReact.png";
import RealTimeWhiteBoard from "../assets/ProjectPics/RealTimeWhiteBoard.png";
import TakeNote from "../assets/ProjectPics/TakeNote.png";
import CodeSync from "../assets/ProjectPics/CodeSync.png";
import LexConnect from "../assets/ProjectPics/LexConnect.png"
import { FaGithub } from "react-icons/fa";
import { DiCode } from "react-icons/di";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
  {
    id: 1,
    src: LexConnect,
    nam: "LexConnect",
    github: "https://github.com/priyanshu0511/LexConnect",
    live: "https://lexconnect-now.vercel.app/",
    bio: "LexConnect is a real-time language exchange platform that connects users worldwide to practice languages. With smooth messaging and high-quality video calls, it makes finding partners and improving skills easy.",
    techUsed: "React, TailwindCSS, Node.js, Express.js, MongoDB, Stream SDKs",
  },
  {
    id: 2,
    src: CodeSync,
    nam: "CodeSync",
    github:
      "https://github.com/priyanshu0511/realtime-collaborative-code-editor",
    live: "https://codesynced.vercel.app/",
    bio: "CodeSync is a collaborative coding platform where users can join rooms to write and edit code together in real time. It enables synchronized code editing and compilation directly from the browser.",
    techUsed:
      "React.js, Socket.io, Node.js, Express, TailwindCSS, Monaco Editor",
  },
  {
    id: 3,
    src: RealTimeWhiteBoard,
    nam: "RealTime Whiteboard App",
    github: "https://github.com/priyanshu0511/realtime-whiteboard",
    live: "https://realtime-whiteboard-frontend.vercel.app/",
    bio: "A digital whiteboard app that lets users draw and share their screen live with others. It's designed to be lightweight, intuitive, and ideal for presenting ideas or visual content remotely.",
    techUsed: "React.js, Socket.io, Node.js, Express, TailwindCSS",
  },
  {
    id: 4,
    src: TakeNote,
    nam: "TakeNote App",
    github: "https://github.com/priyanshu0511/TakeNote",
    live: "https://take-note-isrj.vercel.app/",
    bio: "TakeNote is a secure and user-friendly note-taking application. It helps users create, edit, and organize their personal notes with ease, accessible anytime across multiple devices.",
    techUsed: "MongoDB, Express, React, Node.js, JWT, TailwindCSS",
  },
  {
    id: 5,
    src: YaniBlogs,
    nam: "Yani Blogs",
    github: "https://github.com/priyanshu0511/yani-blogs",
    live: "https://yaniblogs.netlify.app/",
    bio: "YaniBlogs is a modern blogging platform for writers and readers. It allows users to create, publish, and browse blog posts in a clean and engaging interface with seamless navigation.",
    techUsed: "React.JS, TailwindCSS, Firebase",
  },
  {
    id: 6,
    src: CryptoPlace,
    nam: "Crypto Place",
    github: "https://github.com/priyanshu0511/crypto-place",
    live: "https://cryptoplacebypriyanshu.netlify.app/",
    bio: "Crypto Place helps users track live market prices, compare coins, and manage a watchlist. It's designed to deliver a responsive and informative experience for cryptocurrency enthusiasts.",
    techUsed: "React.JS, TailwindCSS",
  },
  // {
  //   id: 7,
  //   src: Lyricist,
  //   nam: "Lyricist",
  //   github: "https://github.com/priyanshu0511/lyricist",
  //   live: "https://lyricistbypriyanshu.netlify.app/",
  //   bio: "Lyricist is a lyric search app for music lovers. It provides a fast and simple way to look up lyrics from a wide range of songs using a clean and easy-to-use interface.",
  //   techUsed: "React.JS, CSS",
  // },
  // {
  //   id: 8,
  //   src: WeatherAppReact,
  //   nam: "Weather-app (React)",
  //   github: "https://github.com/priyanshu0511/weather-app-react",
  //   live: "https://weatherbypriyanshu.netlify.app/",
  //   bio: "A simple weather app that lets users view live weather conditions and forecasts by city. The app provides clean visuals and a smooth experience for checking the weather on demand.",
  //   techUsed: "React.JS, CSS",
  // },
];

  return (
    <div
      name="projects"
      className="h-auto w-full bg-blue max-h-fit px-5 min-[330px]:px-10 md:px-32 mt-20"
    >
      <div className="text-xl md:text-4xl text-yellow font-bold border-b-4 border-gray-400 inline">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-darkblue rounded-xl font-mono hover:-mt-3 hover:shadow-[0_10px_20px_rgba(232,241,255,0.3)] transform transition-all duration-200">
              <div>
                <img src={item.src} alt={item.nam} className="rounded-t-xl h-56 md:h-40 lg:h-44" />
              </div>
              <div className="px-4 mt-4">
                <div className="text-xl md:text-2xl font-bold text-lightblue md:h-16 lg:h-auto">
                  {item.nam}
                </div>
                <div className="text-lightblue mt-3 text-xs md:text-base md:h-60 lg:h-40">
                  {item.bio}
                </div>
                <div className="text-yellow mt-3 text-xs md:text-base md:h-24 lg:h-16">
                  Technologies Used:{" "}
                  <span className="text-lightblue">{item.techUsed}</span>
                </div>
                <div>
                  <div className="mt-4 flex gap-4 items-center">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow hover:text-lightblue hover:scale-110"
                    >
                      <Tooltip title="Github">
                        <IconButton>
                          <FaGithub color="#ffb703" size={30} />
                        </IconButton>
                      </Tooltip>
                    </a>
                    |
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow hover:text-lightblue hover:scale-110"
                    >
                      <Tooltip title="Live Demo">
                        <IconButton>
                          <DiCode size={45} color="#ffb703" />
                        </IconButton>
                      </Tooltip>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
