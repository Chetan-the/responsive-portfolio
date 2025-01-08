import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiNodedotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media