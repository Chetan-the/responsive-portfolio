import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023-2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Java script developer"
            subTitle="Quiz app - (september 2023 - october 2023)"
            result="Quiz"
            des="Applied JavaScript concepts like DOM manipulation, asynchronous operations with AJAX, and data handling to create a responsive and functional interface."
          />
          <ResumeCard
            title="Bootstrap Framework"
            subTitle="Tin Dog - (january 2024-february 2024)"
            result="Dating"
            des="Leveraged Bootstrap’s grid system, utility classes, and pre-built components (such as navbars, modals, buttons, and cards) to create intuitive layouts and interfaces."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Weather App (Jan 2024-Feb 2024)"
            result="Weather"
            des="Developed and implemented responsive, user-friendly web applications using HTML, CSS, and JavaScript, ensuring optimal performance across devices and browsers."
          />
        </div>
      </div>
      <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023-2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Developer"
            subTitle="News App -(August 2024-September 2024)"
            result="News"
            des="Utilized React's component-based architecture to build reusable UI components and manage application state with hooks 
Integrated APIs to fetch and display real-time data, ensuring smooth interaction and dynamic updates without page reloads."
          />
          <ResumeCard
            title="Version Control Systems"
            subTitle=" April[03/2024] - Present"
            result="Github"
            des="Created and managed repositories on platforms like GitHub (or GitLab, Bitbucket) for organizing and storing code, facilitating easy access and sharing among the development team"
          />
          <ResumeCard
            title="Hosting Websites"
            subTitle=" April[03/2024] - Present"
            result="Netlify"
            des="Deployed web applications on GitHub Pages, Netlify, and Vercel, integrating Git repositories for automated deployment and continuous integration workflows.
"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;