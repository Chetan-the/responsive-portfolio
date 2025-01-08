import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Resume from "./Resume";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
