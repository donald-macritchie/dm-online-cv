import React, { useState, useEffect } from "react";
import gtdesktop from "../../../assets/project_images/granite_tap/gt_desktop_static.png";
import gttablet from "../../../assets/project_images/granite_tap/gt_ipad_static.png";
import gtlaptop from "../../../assets/project_images/granite_tap/gt_macbook_static.png";
import gtphone from "../../../assets/project_images/granite_tap/gt_iphone_static.png";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";

const GraniteTap = () => {
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
              Granite Tap
            </h2>
  
            {/* Conditional Rendering Based on Screen Size */}
            {isLargeScreen ? (
              <div className="project-images-container flex justify-center items-center">
                <img
                  src={gtdesktop}
                  alt="Project"
                  className="desktop-img absolute w-[70%]"
                />
                <img
                  src={gttablet}
                  alt="Project"
                  className="tablet-img absolute"
                />
                <img
                  src={gtlaptop}
                  alt="Project"
                  className="laptop-img absolute"
                />
                <img src={gtphone} alt="Project" className="phone-img absolute" />
              </div>
            ) : (
              <img
                src={gtdesktop}
                alt="Project"
                className="desktop-img mx-auto w-full"
              />
            )}
  
            <div className="mx-auto my-6 text-lg flex flex-col justify-center items-center">
              <p className="mx-4 md:mx-16 text-sm md:text-lg">
                Granite Tap operates as an ecommerce platform focusing on
                showcasing beers from independent breweries in Aberdeen and
                Aberdeenshire, Scotland. Employing Django for web development,
                PostgreSQL for data management, and AWS for hosting, the platform
                delivers a smooth shopping experience. With a keen understanding
                of SEO and web marketing strategies, Granite Tap enhances
                visibility and engagement, while Stripe Payments ensures secure
                transactions, enabling users to easily browse, purchase, and
                receive their favourite craft brews at home.
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
                    <FaBootstrap size={40} />
                    <p className="mt-4">Bootstrap</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <IoLogoJavascript size={40} />
                    <p className="mt-4">JavaScript</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <FaPython size={40} />
                    <p className="mt-4">Python</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <SiDjango size={40} />
                    <p className="mt-4">Django</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <FaAws size={40} />
                    <p className="mt-4">AWS</p>
                  </li>
                  <li className="flex flex-col items-center text-center my-8">
                    <DiPostgresql size={40} />
                    <p className="mt-4">PostgreSQL</p>
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
                    href="https://github.com/donald-macritchie/granite_tap"
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
                    href="https://granite-tap-d7fc252cb5b2.herokuapp.com/"
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
    )
}

export default GraniteTap
