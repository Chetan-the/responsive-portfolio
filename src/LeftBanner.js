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
       
        <p class="text-lg text-red-300">I am a passionate MERN Stack Developer and Machine Learning Engineer, dedicated to building modern, full-stack web applications and intelligent solutions. I specialize in leveraging MongoDB, Express.js, React, and Node.js to create dynamic, high-performance applications that are both user-friendly and scalable. Additionally, I integrate machine learning models to enhance functionality, enabling data-driven decision-making and automation. With a strong problem-solving mindset, I aim to develop innovative, efficient, and impactful digital solutions.</p>

      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner