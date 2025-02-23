import React from 'react'
import Title from './Title'
import { simon,a_papers,Newsicon,weatherapp,medicines,nike } from "./assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PYQ-NEST"
          des=" 


Developed a real-time web application using ReactJS and Bootstrap to help students access previous year question papers. Implemented a user-friendly interface with search and filter options for quick retrieval of relevant papers."
          src={a_papers}
        />
        <ProjectsCard
          title="NEWS-APP"
          des=" Developed a News App using React.js that fetches real-time news articles from external APIs and displays them in an intuitive, responsive layout. The app features categories, search functionality, and infinite scrolling, leveraging React’s component-based architecture"
          src={Newsicon}
        />
        <ProjectsCard
          title="NIKE"
          des=" Built a Nike-inspired web application using React + Vite and Tailwind CSS, featuring a sleek, responsive UI. Designed dynamic product displays, interactive animations, and smooth navigation for an engaging user experience.




"
          src={nike}
        />
        <ProjectsCard
          title="WEATHER APP"
          des=" I built a Weather App using React.js, HTML, and CSS to provide real-time weather updates through an interactive and responsive interface. The app fetches weather data from external APIs, displays current conditions and forecasts, and is fully optimized for both desktop and mobile views with custom styling and smooth UI transitions."
          src={weatherapp}
        />
        <ProjectsCard
          title="SIMON GAME"
          des=" Built a Simon Game using Html,CSS AND JavaScript, featuring an interactive and dynamic UI. Implemented logic for sequence generation, user input validation, and real-time feedback with engaging animations and sound effects for an immersive experience."
          src={simon}
        />
        <ProjectsCard
          title="MEDICINE RECOMMENDATION SYSTEM"
          des=" Developed a medicine recommendation system that suggests suitable medications based on user symptoms and medical history. Implemented machine learning algorithms to analyze data and improve recommendation accuracy. Designed a user-friendly interface for seamless interaction and efficient results."
          src={medicines}
        />
      </div>
    </section>
  );
}

export default Projects