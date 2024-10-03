import React from "react";
import "../../index.css";
import GraniteTap from "./GraniteTap/GraniteTap";
import Memorise from "./Memorise/Memorise";
import Hangman from './Hangman/Hangman';
import AlanTuring from "./AlanTuring/AlanTuring";
import JediAcademy from "./JediAcademy/JediAcademy";



const Projects = () => {
    return (
      <div className="w-full min-h-screen pt-[150px] pb-20 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8">Portfolio Projects</h1>
          <p className="text-lg text-center mb-8 px-10 py-4">
            Here are some of the projects I have worked on. Please feel free to
            take a look at the Github repositories and the live site.
          </p>
        </div>

        {/* Projects */}
        <GraniteTap />
        <Memorise />
        <Hangman />
        <AlanTuring />
        <JediAcademy />
      </div>
    );
};

export default Projects;
