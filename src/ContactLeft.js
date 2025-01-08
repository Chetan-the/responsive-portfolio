import React from 'react'
import {  FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { contactImg } from "./assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Chetan Sai</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        As a MERN Stack Developer, I specialize in building robust, scalable, and dynamic web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js. With a strong understanding of both front-end and back-end technologies, I am able to design and develop full-stack applications that provide an optimal user experience and seamless functionality across all platforms.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9912633725</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">chetankoganti090@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
           <a href="https://github.com/Chetan-the" target="_blank" rel="noopener noreferrer">
                                               <FaGithub />
                                         </a>
          </span>
          <span className="bannerIcon">
             <a href="https://www.linkedin.com/in/chetan-sai-koganti-244534293/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn />
                                          </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.instagram.com/chetan_chetan_5818/" target="_blank" rel="noopener noreferrer">
                                               <FaInstagram />
                                         </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft