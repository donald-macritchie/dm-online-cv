import React, { useState, useEffect } from "react";

import dt_portfolio from "../../../assets/project_images/portfolio/portfolio_desktop.png"
import lt_portfolio from "../../../assets/project_images/portfolio/portfolio_laptop.png"
import tb_portfolio from "../../../assets/project_images/portfolio/portfolio_tablet.png"
import ip_portfolio from "../../../assets/project_images/portfolio/portfolio_iphone.png"


import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Portfolio = () => {
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
          <div className="border-black border-2 rounded-lg p-6 mx-[20px] mb-8">
            <h2 className="text-2xl font-bold flex flex-col items-center p-4">
              My Portfolio
            </h2>
            <p className="text-sm font-bold flex flex-col items-center mb-8">(This Website)</p>

            {/* Conditional Rendering Based on Screen Size */}
            {isLargeScreen ? (
              <div className="project-images-container flex justify-center items-center">
                <img
                  src={dt_portfolio}
                  alt="Project"
                  className="desktop-img absolute w-[70%]"
                />
                <img src={tb_portfolio} alt="Project" className="tablet-img absolute" />
                <img src={lt_portfolio} alt="Project" className="laptop-img absolute" />
                <img src={ip_portfolio} alt="Project" className="phone-img absolute" />
              </div>
            ) : (
              <img
                src={dt_portfolio}
                alt="Project"
                className="desktop-img mx-auto w-full"
              />
            )}

            <div className="mx-auto my-6 text-lg flex flex-col justify-center items-center">
              <p className="mx-4 md:mx-16 text-sm md:text-lg">
                I created this website primarily using React and Tailwind. Its
                purpose is to showcase different projects that I have created
                with all the technologies I know.
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xl font-bold flex flex-col items-center my-12">
                Technologies used
              </h4>

              <div>
                <ul className="grid grid-cols-3 my-8 justify-center items-center w-full text-md md:text-lg">
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
                  <li className="flex flex-col items-center text-center my-8">
                    <FaReact size={40} />
                    <p className="mt-4">React</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <RiTailwindCssFill size={40} />
                    <p className="mt-4">Tailwind</p>
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
                  <a href="https://github.com/donald-macritchie/dm-online-cv" target="_blank" rel="noreferrer">
                    <div className="flex flex-col justify-center items-center transition-colors duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 text-center">
                      <div className="mb-4">
                        <FaGithub size={40} />
                      </div>
                      <p>Github Repo</p>
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

export default Portfolio


