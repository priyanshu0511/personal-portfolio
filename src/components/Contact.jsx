import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState({ name: false, email: false, msg: false });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const newError = {
      name: name.trim().length === 0,
      email: !validateEmail(email),
      msg: msg.trim().length === 0,
    };

    setError(newError);

    if (!Object.values(newError).includes(true)) {
      emailjs
      .sendForm('service_edeqm7f', 'template_c9q0hbd', form.current, {
        publicKey: 'zwPImE6xDpEHZKaSo',
      })
      .then((result) => {
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMsg("");
          setError({ name: false, email: false, msg: false });
      }, (error) => {
          toast.error("Failed to send message, please try again!");
      });
    } else {
      toast.error("Please fix the errors and submit again.");
    }
  };

  return (
    <div name='contact' className='w-full bg-dark text-light-text py-24 px-5 min-[330px]:px-10 md:px-32'>
      <div className="max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-light-text inline-block relative border-b-4 border-primary pb-2">
            Get In Touch
          </h2>
          <p className="text-gray-text font-sans mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Have an interesting project or opportunity? Let’s talk.
          </p>
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch bg-dark-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-xl'>
          
          {/* Left panel: Info */}
          <div className='flex-1 flex flex-col justify-center'>
            <h3 className='text-3xl font-heading font-bold mb-4 text-light-text'>Let's connect</h3>
            <p className='text-gray-text font-sans mb-10 leading-relaxed'>
              Whether you want to discuss a new opportunity, have a question about my work, 
              or just want to say hi, my inbox is always open!
            </p>

            <div className='flex flex-col gap-6'>
              <a href="mailto:priyanshusingh.work@example.com" className='flex items-center gap-4 group cursor-pointer'>
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <div className='font-sans text-sm text-gray-text'>Email</div>
                  <div className='font-heading flex flex-col'>
                    <span className='font-medium text-light-text group-hover:text-primary transition-colors'>Shoot me an email</span>
                  </div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/priyanshu-singh-0511/" target="_blank" rel="noreferrer" className='flex items-center gap-4 group cursor-pointer'>
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <div className='font-sans text-sm text-gray-text'>LinkedIn</div>
                  <div className='font-heading font-medium text-light-text group-hover:text-primary transition-colors'>Connect with me</div>
                </div>
              </a>

              <a href="https://github.com/priyanshu0511" target="_blank" rel="noreferrer" className='flex items-center gap-4 group cursor-pointer'>
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                  <FaGithub size={20} />
                </div>
                <div>
                  <div className='font-sans text-sm text-gray-text'>GitHub</div>
                  <div className='font-heading font-medium text-light-text group-hover:text-primary transition-colors'>Check out my code</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className='flex-1'>
             <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
                <div>
                  <label className='font-sans text-sm text-gray-text mb-2 block'>Your Name</label>
                  <input
                    type="text"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name='from_name'
                    placeholder='John Doe'
                    className={`w-full p-4 bg-dark border rounded-lg text-light-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${error.name ? 'border-red-500' : 'border-white/10'}`}
                  />
                  {error.name && <span className='mt-1 text-xs text-red-500'>Name cannot be empty</span>}
                </div>

                <div>
                  <label className='font-sans text-sm text-gray-text mb-2 block'>Your Email</label>
                  <input
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name='from_email'
                    placeholder='john@example.com'
                    className={`w-full p-4 bg-dark border rounded-lg text-light-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${error.email ? 'border-red-500' : 'border-white/10'}`}
                  />
                  {error.email && <span className='mt-1 text-xs text-red-500'>Please enter a valid email</span>}
                </div>

                <div>
                  <label className='font-sans text-sm text-gray-text mb-2 block'>Message</label>
                  <textarea
                    name="message"
                    onChange={e => setMsg(e.target.value)}
                    value={msg}
                    placeholder="Hello Priyanshu, I'd like to talk about..."
                    rows="5"
                    className={`w-full p-4 bg-dark border rounded-lg text-light-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${error.msg ? 'border-red-500' : 'border-white/10'}`}
                  ></textarea>
                  {error.msg && <span className='mt-1 text-xs text-red-500'>Message cannot be empty</span>}
                </div>

                <button className='w-full py-4 mt-2 font-sans font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1'>
                  Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
