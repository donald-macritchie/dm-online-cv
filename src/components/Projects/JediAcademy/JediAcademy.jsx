import React, { useState, useEffect } from "react";
import jadesktop from "../../../assets/project_images/jedi_academy/jedi_desktop_static.png";
import jatablet from "../../../assets/project_images/jedi_academy/jedi_ipad_static.png";
import jalaptop from "../../../assets/project_images/jedi_academy/jedi_macbook_static.png";
import japhone from "../../../assets/project_images/jedi_academy/jedi_iphone_static.png";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const JediAcademy = () => {
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
              Jedi Academy
            </h2>

            {/* Conditional Rendering Based on Screen Size */}
            {isLargeScreen ? (
              <div className="project-images-container flex justify-center items-center">
                <img
                  src={jadesktop}
                  alt="Project"
                  className="desktop-img absolute w-[70%]"
                />
                <img
                  src={jatablet}
                  alt="Project"
                  className="tablet-img absolute"
                />
                <img
                  src={jalaptop}
                  alt="Project"
                  className="laptop-img absolute"
                />
                <img
                  src={japhone}
                  alt="Project"
                  className="phone-img absolute"
                />
              </div>
            ) : (
              <img
                src={jadesktop}
                alt="Project"
                className="desktop-img mx-auto w-full"
              />
            )}

            <div className="mx-auto my-6 text-lg flex flex-col justify-center items-center">
              <p className="mx-4 md:mx-16 text-sm md:text-lg">
                Jedi Academy is an interactive browser based game. Users are
                invited to jump into the world of Star Wars and take part in a
                series of mini games, all of which will help determine your
                overall Jedi Ranking and Graduate from the Jedi Academy. You
                will face three trials as part of yout training: the Trial of
                Memory, Trial of Agility and Trial of Wisdom. In order to
                complete your Jedi training, complete all three trials and
                receive your overall Jedi Rank. This Project was created as part
                of Code Institute's May 2024 Hackathon. As part of an Agile
                team, this site came together using HTML, CSS and JavaScript. My
                primary focus was on the Home Page, Memory game and
                implementation of the ranking system. Feel free to try out the
                game for yourself!
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
                <div className="w-full flex flex-row justify-center items-center space-x-14">
                  <a
                    className=""
                    href="https://github.com/donald-macritchie/jedi-academy"
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
                    href="https://donald-macritchie.github.io/jedi-academy/"
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

export default JediAcademy
