import React from "react";
import { motion } from "motion/react";

const Skills = () => {
  const technologies = [
    { id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", name: "Next.js" },
    { id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React.js" },
    { id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", name: "Node.js" },
    { id: 4, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", name: "Express.js" },
    { id: 5, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { id: 6, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
    { id: 7, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "TailwindCSS" },
    { id: 8, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { id: 9, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
    { id: 10, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", name: "Java" },
    { id: 11, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", name: "C / C++" },
    { id: 12, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: "HTML" },
    { id: 13, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: "CSS" },
    { id: 14, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
    { id: 15, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", name: "MySQL" },
    { id: 16, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
    { id: 17, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", name: "Firebase" },
    { id: 18, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", name: "GitHub" },
  ];

  return (
    <div
      name="skills"
      className="w-full bg-dark text-light-text py-24 px-5 min-[330px]:px-10 md:px-32 overflow-hidden"
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
            Technical Arsenal
          </h2>
          <p className="text-gray-text font-sans mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Here are the technologies I play around with to bring ideas to life. <br />
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center gap-4 mt-12 mx-auto max-w-5xl"
        >
          {technologies.map((item) => (
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.15, zIndex: 50, rotate: rotateRandom() }}
              variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }}
              key={item.id}
              className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-dark-card border border-white/5 rounded-full hover:border-primary/50 hover:bg-[#151515] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-colors duration-300 cursor-grab active:cursor-grabbing backdrop-blur-md relative"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-6 w-6 sm:h-8 sm:w-8 pointer-events-none drop-shadow-md"
              />
              <span className="text-light-text font-sans font-medium pointer-events-none text-sm sm:text-base">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Just a little helper for playful drag rotation
const rotateRandom = () => {
  return Math.random() > 0.5 ? 5 : -5;
};

export default Skills;
