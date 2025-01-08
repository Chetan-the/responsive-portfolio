import React from 'react'
import Title from './Title'
import { projectOne,Textutils,Newsicon,weather,quiz,portfolio  } from "./assets/index";
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
          title="TEXTUTILS"
          des=" 


I developed a TextUtils web application using React.js to provide users with text manipulation tools like word count, character count, text conversion (uppercase/lowercase), and text search and replace."
          src={Textutils}
        />
        <ProjectsCard
          title="NEWS-APP"
          des=" I developed a News App using React.js that fetches real-time news articles from external APIs and displays them in an intuitive, responsive layout. The app features categories, search functionality, and infinite scrolling, leveraging React’s component-based architecture"
          src={Newsicon}
        />
        <ProjectsCard
          title="PORTFOLIO"
          des=" I created a personal portfolio website using HTML and CSS, showcasing my skills, projects, and experience in a clean and responsive layout. The site features a visually appealing design, optimized for both desktop and mobile views, with smooth navigation and attention to user experience.




"
          src={portfolio}
        />
        <ProjectsCard
          title="WEATHER APP"
          des=" I built a Weather App using React.js, HTML, and CSS to provide real-time weather updates through an interactive and responsive interface. The app fetches weather data from external APIs, displays current conditions and forecasts, and is fully optimized for both desktop and mobile views with custom styling and smooth UI transitions."
          src={weather}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" I developed a Netflix clone using HTML, CSS, and JavaScript, replicating the streaming platform's homepage. The project features a responsive layout, interactive movie carousel, and dynamic modal popups for trailers. I utilized modern CSS techniques and JavaScript to create smooth animations and enhance user interactivity"
          src={projectOne}
        />
        <ProjectsCard
          title="QUIZ APP"
          des=" I developed a Quiz App using HTML, CSS, and JavaScript, where users can take multiple-choice quizzes and receive instant feedback on their answers. The app features dynamic question loading, score tracking, and a responsive design, ensuring a seamless and engaging experience across both desktop and mobile devices. JavaScript handles the quiz logic, such as timing, scoring, and displaying results."
          src={quiz}
        />
      </div>
    </section>
  );
}

export default Projects