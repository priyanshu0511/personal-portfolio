import React from "react";
import CryptoPlace from "../assets/ProjectPics/CryptoPlace.png";
import YaniBlogs from "../assets/ProjectPics/YaniBlogs.png";
import Lyricist from "../assets/ProjectPics/Lyricist.png";
import WeatherAppReact from "../assets/ProjectPics/WeatherAppReact.png";
import RealTimeWhiteBoard from "../assets/ProjectPics/RealTimeWhiteBoard.png";
import TakeNote from "../assets/ProjectPics/TakeNote.png";
import CodeSync from "../assets/ProjectPics/CodeSync.png";
import LexConnect from "../assets/ProjectPics/LexConnect.png"
import Prepai from "../assets/ProjectPics/Prepai.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Prepai,
      nam: "Prep-Ai",
      github: "https://github.com/priyanshu0511/prep-ai",
      live: "https://meetprep-ai.vercel.app/",
      bio: "An AI-powered career prep app offering mock interviews, technical practice, resume analysis, and personalized feedback to help land dream roles.",
      techUsed: ["Next.js", "TailwindCSS", "PostgreSQL", "Clerk", "Gemini AI"],
    },
    {
      id: 2,
      src: LexConnect,
      nam: "LexConnect",
      github: "https://github.com/priyanshu0511/LexConnect",
      live: "https://lexconnect-now.vercel.app/",
      bio: "Real-time language exchange platform connecting users worldwide. Features smooth messaging, user matching, and high-quality video calls.",
      techUsed: ["React", "Node.js", "MongoDB", "Stream SDKs"],
    },
    {
      id: 3,
      src: CodeSync,
      nam: "CodeSync",
      github: "https://github.com/priyanshu0511/realtime-collaborative-code-editor",
      live: "https://codesynced.vercel.app/",
      bio: "Collaborative coding platform where users can join rooms, write, and execute code together in real-time, directly from the browser.",
      techUsed: ["React.js", "Socket.io", "Node.js", "Monaco Editor"],
    },
    {
      id: 4,
      src: RealTimeWhiteBoard,
      nam: "RealTime Whiteboard App",
      github: "https://github.com/priyanshu0511/realtime-whiteboard",
      live: "https://realtime-whiteboard-frontend.vercel.app/",
      bio: "A collaborative digital whiteboard app. Let users draw, brainstorm, and share their screen live with others seamlessly.",
      techUsed: ["React.js", "Socket.io", "Node.js", "Express", "TailwindCSS"],
    },
    {
      id: 5,
      src: TakeNote,
      nam: "TakeNote App",
      github: "https://github.com/priyanshu0511/TakeNote",
      live: "https://take-note-isrj.vercel.app/",
      bio: "A secure, modern note-taking application. Helps users create, edit, and organize notes across multiple devices easily.",
      techUsed: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    },
    {
      id: 6,
      src: YaniBlogs,
      nam: "Yani Blogs",
      github: "https://github.com/priyanshu0511/yani-blogs",
      live: "https://yaniblogs.netlify.app/",
      bio: "A clean and engaging blogging platform. Allows writers and readers to create, publish, and browse stories in a modern interface.",
      techUsed: ["React.js", "TailwindCSS", "Firebase"],
    },
    {
      id: 7,
      src: CryptoPlace,
      nam: "Crypto Place",
      github: "https://github.com/priyanshu0511/crypto-place",
      live: "https://cryptoplacebypriyanshu.netlify.app/",
      bio: "Digital dashboard tracking live cryptocurrency prices. Compare coins, check charts, and manage a personalized watchlist.",
      techUsed: ["React.js", "TailwindCSS", "API Integration"],
    },
  ];

  return (
    <div
      name="projects"
      className="w-full bg-dark text-light-text py-24 px-5 min-[330px]:px-10 md:px-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-light-text inline-block relative border-b-4 border-primary pb-2">
            Featured Projects
          </h2>
          <p className="text-gray-text font-sans mt-6 max-w-2xl mx-auto text-base md:text-lg">
            A selection of my recent work focusing on scalable architecture, user experience, and real-world utility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group rounded-t-2xl">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform">
                    <FaExternalLinkAlt size={30} />
                  </a>
                </div>
                <img
                  src={project.src}
                  alt={project.nam}
                  className="rounded-t-2xl w-full h-56 md:h-40 lg:h-44 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-bold text-light-text group-hover:text-primary transition-colors">
                    {project.nam}
                  </h3>
                  <div className="flex gap-3 text-gray-text">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-light-text transition-colors">
                      <FaGithub size={22} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-text font-sans text-sm md:text-base leading-relaxed flex-grow">
                  {project.bio}
                </p>

                {/* Tech Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-sans font-medium bg-[#1a1a1a] text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
