import React, { useState, useEffect } from "react";
import hmdesktop from "../../../assets/project_images/hangman/hangman_desktop_static.png";
import hmtablet from "../../../assets/project_images/hangman/hangman_ipad_static.png";
import hmlaptop from "../../../assets/project_images/hangman/hangman_macbook_static.png";
import hmphone from "../../../assets/project_images/hangman/hangman_iphone_static.png";


import { FaPython } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Hangman = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div className="w-full min-h-screen max-w-[1000px] mx-auto pb-20">
        {/* Projects Container */}
        <div>
          <div className="border-black border-2 rounded-lg p-6 mx-[20px]">
            <h2 className="text-2xl font-bold flex flex-col items-center mb-8 p-4">
              Hangman
            </h2>

            {/* Conditional Rendering Based on Screen Size */}
            {isLargeScreen ? (
              <div className="project-images-container flex justify-center items-center">
                <img
                  src={hmdesktop}
                  alt="Project"
                  className="desktop-img absolute w-[70%]"
                />
                <img
                  src={hmtablet}
                  alt="Project"
                  className="tablet-img absolute"
                />
                <img
                  src={hmlaptop}
                  alt="Project"
                  className="laptop-img absolute"
                />
                <img
                  src={hmphone}
                  alt="Project"
                  className="phone-img absolute"
                />
              </div>
            ) : (
              <img
                src={hmdesktop}
                alt="Project"
                className="desktop-img mx-auto w-full"
              />
            )}

            <div className="mx-auto my-6 text-lg flex flex-col justify-center items-center">
              <p className="mx-4 md:mx-16 text-sm md:text-lg">
                Hangman is a Python terminal game, which runs in a mock terminal
                on Heroku. Hangman is a traditional wordgame in which users are
                given an unknown, randomly selected word and will attempt to
                solve the word without losing all their lives. In the
                tradintional hangman style, users are given visual cues which
                will show how close the man is to hanging and the user losing
                the game.
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xl font-bold flex flex-col items-center my-12">
                Technologies used
              </h4>

              <div>
                <ul className="flex my-8 justify-center items-center w-full text-md md:text-lg">
                  <li className="flex flex-col items-center text-center my-8">
                    <FaPython size={40} />
                    <p className="mt-4">Python</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Links */}
            <div>
              <div>
                <h4 className="text-xl font-bold flex flex-col items-center my-12">
                  Project Links
                </h4>
                <div className="w-full flex flex-row justify-center items-center space-x-14">
                  <a
                    className=""
                    href="https://github.com/donald-macritchie/hangman"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center items-center transition-colors duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 text-center">
                      <div className="mb-4">
                      <FaGithub size={40} />
                      </div>
                      <p>Github Repo</p>
                    </div>
                  </a>
                  <a
                    className=""
                    href="https://hangmangamedonald-e8eff857df0e.herokuapp.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center items-center transition-colors duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 text-center">
                      <div className="mb-4">
                        <FaExternalLinkAlt size={40} />
                      </div>
                      <p>Live Site</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default Hangman
