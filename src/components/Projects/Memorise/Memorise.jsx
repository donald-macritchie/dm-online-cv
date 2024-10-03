import React, { useState, useEffect } from "react";
import mmdesktop from "../../../assets/project_images/memorise/memory_desktop_static.png";
import mmtablet from "../../../assets/project_images/memorise/memory_ipad_static.png";
import mmlaptop from "../../../assets/project_images/memorise/memory_macbook_static.png";
import mmphone from "../../../assets/project_images/memorise/memory_iphone_static.png";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Memorise = () => {
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
              Marvel Memorise!
            </h2>

            {/* Conditional Rendering Based on Screen Size */}
            {isLargeScreen ? (
              <div className="project-images-container flex justify-center items-center">
                <img
                  src={mmdesktop}
                  alt="Project"
                  className="desktop-img absolute w-[70%]"
                />
                <img
                  src={mmtablet}
                  alt="Project"
                  className="tablet-img absolute"
                />
                <img
                  src={mmlaptop}
                  alt="Project"
                  className="laptop-img absolute"
                />
                <img
                  src={mmphone}
                  alt="Project"
                  className="phone-img absolute"
                />
              </div>
            ) : (
              <img
                src={mmdesktop}
                alt="Project"
                className="desktop-img mx-auto w-full"
              />
            )}

            <div className="mx-auto my-6 text-lg flex flex-col justify-center items-center">
              <p className="mx-4 md:mx-16 text-sm md:text-lg">
                Marvel Memorise is an interactive memory flip card game, in
                which users are presented with a 16 card game board and are
                tasked to find all 8 matching pairs before the time runs out.
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xl font-bold flex flex-col items-center my-12">
                Technologies used
              </h4>

              <div>
                <ul className="flex flex-row gap-6 my-8 justify-center items-center w-full text-md md:text-lg">
                  <li className="flex flex-col items-center text-center my-8">
                    <FaHtml5 size={40} />
                    <p className="mt-4">HTML</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <FaCss3Alt size={40} />
                    <p className="mt-4">CSS</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <IoLogoJavascript size={40} />
                    <p className="mt-4">JavaScript</p>
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
                <div className="w-full flex flex-row justify-center items-center space-x-14"><a
                    className=""
                    href="https://github.com/donald-macritchie/memory-flip-card"
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
                    href="https://donald-macritchie.github.io/memory-flip-card/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col justify-center items-center transition-colors duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 text-center">
                      <div className="mb-4">
                      <FaExternalLinkAlt size={40} />
                      </div>
                      <p>Live Siteo</p>
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

export default Memorise
