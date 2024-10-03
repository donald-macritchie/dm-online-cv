import React, { useState, useEffect } from "react";
import atdesktop from "../../../assets/project_images/alan_turing/turing_desktop_static.png";
import attablet from "../../../assets/project_images/alan_turing/turing_ipad_static.png";
import atlaptop from "../../../assets/project_images/alan_turing/turing_macbook_static.png";
import atphone from "../../../assets/project_images/alan_turing/turing_iphone_static.png";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const AlanTuring = () => {
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
              Alan Turing - The Orignal Code Breaker
            </h2>

            {/* Conditional Rendering Based on Screen Size */}
            {isLargeScreen ? (
              <div className="project-images-container flex justify-center items-center">
                <img
                  src={atdesktop}
                  alt="Project"
                  className="desktop-img absolute w-[70%]"
                />
                <img
                  src={attablet}
                  alt="Project"
                  className="tablet-img absolute"
                />
                <img
                  src={atlaptop}
                  alt="Project"
                  className="laptop-img absolute"
                />
                <img
                  src={atphone}
                  alt="Project"
                  className="phone-img absolute"
                />
              </div>
            ) : (
              <img
                src={atdesktop}
                alt="Project"
                className="desktop-img mx-auto w-full"
              />
            )}

            <div className="mx-auto my-6 text-lg flex flex-col justify-center items-center">
              <p className="mx-4 md:mx-16 text-sm md:text-lg">
                The Alan Turing website has been created to give an introduction
                into the life and work of Alan Turing. The site offers small
                historical overviews of Alan Turing’s life giving the user a
                timeline of information that lead to Alan Turing being regarded
                as one of the most influential figures of World War II. Users of
                the site will be able to find external links to various
                resources such as books and films along with social media links,
                site feedback survey and newsletter signup. The site is targeted
                to anyone looking for information on Alan Turing, particularly
                those looking to research for a historical project.
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xl font-bold flex flex-col items-center my-12">
                Technologies used
              </h4>

              <div>
                <ul className="flex flex-row my-8 justify-center items-center w-full text-md md:text-lg">
                  <li className="flex flex-col items-center text-center my-8">
                    <FaHtml5 size={40} />
                    <p className="mt-4">HTML</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <FaCss3Alt size={40} />
                    <p className="mt-4">CSS</p>
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
                    href="https://github.com/donald-macritchie/alan-turing-history"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center items-center transition-colors duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 text-center">
                      <div className="mb-4">
                      <FaGithub size={40} />
                      </div>
                      <p>Github Rep</p>
                    </div>
                  </a>

                  <a
                    className=""
                    href="https://donald-macritchie.github.io/alan-turing-history/"
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

export default AlanTuring
