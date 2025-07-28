import React from 'react'
import { motion } from 'motion/react'

const About = () => {

    return (
        <div name='about' className='h-screen w-full bg-blue max-h-screen px-5 min-[330px]:px-10 md:px-32 mt-10 mb-20'> 
            <div className='flex'>
                <div>
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                        viewport={{ once: true }}
                        className='text-xl md:text-4xl text-yellow font-bold border-b-4 border-gray-400 inline'>
                        About
                    </motion.div>

                    <div className='text-lightblue text-xs sm:text-base mr-10 mt-8'>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.10 }}
                            viewport={{ once: true }}>
                            Hey there 👋, I’m Priyanshu, a <strong>3rd year student</strong> on a quest to turn ideas into interactive, visually appealing web experiences. From tinkering with code to building dynamic applications, I’m all about making the web a little more awesome—one line of code at a time.
                        </motion.p>
                        <br />
                        <motion.p initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.20 }}
                            viewport={{ once: true }}>
                            I’m driven by a focus so sharp, I could probably code blindfolded (but I won’t). I believe in the magic of collaboration, where great minds come together to create even greater things. Challenges? Bring 'em on! I tackle them with a mix of determination, adaptability, and maybe a bit of caffeine ☕.
                        </motion.p>
                        <br />
                        <motion.p initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.30 }}
                            viewport={{ once: true }}>
                            When I’m not busy coding, you’ll find me <strong>reading books</strong> 📚, jamming out to some tunes 🎧, or binge-watching the latest movies 📺. Life’s about balance, after all!
                        </motion.p>
                        <br />
                        <motion.p initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.40 }}
                            viewport={{ once: true }}
                            className='sm:inline hidden' 
                            >
                            Here’s a sneak peek at the tech that fuels my creations:
                        </motion.p>
                        <motion.ul initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.50 }}
                            viewport={{ once: true }} 
                            className='sm:inline hidden' 
                            >
                            <li><strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> (the classics, but still awesome)</li>
                            <li><strong>TailwindCSS</strong> (for that sleek, responsive look)</li>
                            <li><strong>React</strong> (building interactive UI, one component at a time)</li>
                        </motion.ul>
                        <br />
                        <motion.p initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.60 }}
                            viewport={{ once: true }}
                            className='sm:inline hidden' 
                            >
                            <i>"By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired." — Franz Kafka</i>
                        </motion.p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
