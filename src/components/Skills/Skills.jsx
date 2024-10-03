import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div
      name="skills"
      className="max-w-[1000px] w-full h-screen flex flex-col justify-center items-center mx-auto mb-[150px] mt-[150px]"
    >
      <div className=''>
        <h3 className="text-4xl font-bold py-12">My Skills</h3>
      </div>

      <div>
        <div className="bg-orange-100 py-4 px-6 shadow-md rounded-lg mx-10">
          <h3 className="text-xl font-bold flex justify-center my-8">
            Frontend
          </h3>
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
              <FaReact size={40} />
              <p className="mt-4">React</p>
            </li>
            <li className="flex flex-col items-center text-center my-8">
              <RiTailwindCssFill size={40} />
              <p className="mt-4">Tailwind</p>
            </li>
          </ul>
        </div>
        <div className='bg-orange-100 py-4 px-6 shadow-md rounded-lg my-8 mx-10'>
          <h3 className="text-xl font-bold flex justify-center my-8">
            Backend
          </h3>
          <ul className="grid grid-cols-2 my-8 justify-center items-center w-full text-md md:text-lg">
            <li className="flex flex-col items-center text-center my-8">
              <FaPython size={40} />
              <p className="mt-4">Python</p>
            </li>
            <li className="flex flex-col items-center text-center my-8">
              <SiDjango size={40} />
              <p className="mt-4">Django</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills
