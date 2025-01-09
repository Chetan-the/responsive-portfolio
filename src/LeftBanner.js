import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-blue-500  capitalize">Chetan sai</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
       
        <p class="text-lg text-red-300">I am a passionate <strong>MERN Stack Developer</strong> with a focus on building modern, full-stack web applications. I specialize in leveraging the power of MongoDB, Express.js, React, and Node.js to create dynamic, high-performance solutions that are both user-friendly and scalable.</p>

      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner