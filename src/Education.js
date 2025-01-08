import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010-2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CSE in Computer Science"
            subTitle="Vellore Institute Of Technology (2023 - 2027)"
            result="3.90/4"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="secondary School Eduaction"
            subTitle="Arka Institutions(2020 - 2022)"
            result="4.95/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Sri gowthami e-techno School (2010 - 2019)"
            result="5.00/5"
            des="
Primary education lays the foundation for essential academic skills like reading, writing, and math, typically for children aged 5 to 11. It also fosters social, emotional, and physical development, preparing students for future learning."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Java script developer"
            subTitle="Quiz app - (september 2023 - october 2023)"
            result="Quiz"
            des="Applied JavaScript concepts like DOM manipulation, asynchronous operations with AJAX, and data handling to create a responsive and functional interface."
          />
          <ResumeCard
            title="Front End Developer"
            subTitle="Weather app - (january 2024-february 2024)"
            result="weather"
            des="Developed and implemented responsive, user-friendly web applications using HTML, CSS, and JavaScript, ensuring optimal performance across devices and browsers."
          />
          <ResumeCard
            title="React Developer"
            subTitle="News App -(August 2024-September 2024)"
            result="News"
            des="Utilized React's component-based architecture to build reusable UI components and manage application state with hooks 
Integrated APIs to fetch and display real-time data, ensuring smooth interaction and dynamic updates without page reloads."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education