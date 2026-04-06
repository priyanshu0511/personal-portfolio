import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-dark text-light-text py-24 px-5 min-[330px]:px-10 md:px-32 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side - Text */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-light-text inline-block relative border-b-4 border-primary pb-2">
              About Me
            </h2>
          </motion.div>

          <div className="font-sans text-gray-text text-base md:text-lg space-y-6 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Hey there 👋, I’m Priyanshu, a final year student on a quest to turn ideas into interactive, visually appealing web experiences. From tinkering with code to building dynamic applications, I’m all about making the web a little more awesome—one line of code at a time.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I’m driven by a focus so sharp, I could probably code blindfolded (but I won’t). I believe in the magic of collaboration, where great minds come together to create even greater things. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              When I’m not busy coding, you’ll find me reading books 📚, jamming out to some tunes 🎧, or binge-watching the latest movies 📺. Life’s about balance, after all!
            </motion.p>
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pl-5 border-l-4 border-primary text-light-text italic font-heading"
            >
              "By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired." — Franz Kafka
            </motion.blockquote>
          </div>
        </div>

        {/* Right Side - Terminal Code Block */}
        <motion.div 
          className="flex-1 w-full max-w-xl lg:max-w-none shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500">
            {/* Mac window controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <div className="ml-2 text-xs font-mono text-gray-400 select-none">priyanshu.js</div>
            </div>
            
            {/* Code content */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-left whitespace-pre">
              <div className="text-[#c678dd]">const <span className="text-[#e5c07b]">engineer</span> = {'{'}</div>
              <div className="pl-6"><span className="text-[#e06c75]">name:</span> <span className="text-[#98c379]">"Priyanshu Singh"</span>,</div>
              <div className="pl-6"><span className="text-[#e06c75]">role:</span> <span className="text-[#98c379]">"Full Stack Developer"</span>,</div>
              <div className="pl-6"><span className="text-[#e06c75]">education:</span> <span className="text-[#98c379]">"B.Tech Computer Science"</span>,</div>
              <div className="pl-6"><span className="text-[#e06c75]">passions:</span> [</div>
              <div className="pl-12 text-[#98c379]">"Full-Stack Development",</div>
              <div className="pl-12 text-[#98c379]">"Problem Solving Through Code",</div>
              <div className="pl-12 text-[#98c379]">"Learning New Technologies"</div>
              <div className="pl-6">],</div>
              <div className="pl-6"><span className="text-[#e06c75]">hardWorker:</span> <span className="text-[#d19a66]">true</span>,</div>
              <div className="pl-6"><span className="text-[#e06c75]">coffeeConsumed:</span> <span className="text-[#d19a66]">Infinity</span>,</div>
              <div className="pl-6"><span className="text-[#e06c75]">hireable:</span> <span className="text-[#d19a66]">true</span></div>
              <div className="text-[#c678dd]">{'};'}</div>
              <br/>
              <div className="text-[#5c6370] italic">// Ready to build secure, scalable solutions</div>
              <div className="text-[#5c6370] italic">// Let's work together!</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
