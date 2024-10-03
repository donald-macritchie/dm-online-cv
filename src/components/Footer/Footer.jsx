import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Resume from "../../assets/documents/resume.pdf"

const Footer = () => {
  return (
    <div className="w-full bg-white py-6">
      <ul className="flex justify-center md:space-x-10">
        {/* LinkedIn */}
        <li className="w-[90px] h-[90px] flex flex-col items-center transform hover:-translate-y-6 duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 group">
          <a
            href="https://www.linkedin.com/in/donald-macritchie/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} className="mx-auto" />
            <p className="mt-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
              LinkedIn
            </p>
          </a>
        </li>

        <li className="w-[90px] h-[90px] flex flex-col items-center transform hover:-translate-y-6 duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 group">
          <a
            href="https://github.com/donald-macritchie"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} className="mx-auto" />
            <p className="mt-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
              GitHub
            </p>
          </a>
        </li>

        <li className="w-[90px] h-[90px] flex flex-col items-center transform hover:-translate-y-6 duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 group">
          <Link to="/contact">
            <HiOutlineMail size={30} className="mx-auto" />
            <p className="mt-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
              Email
            </p>
          </Link>
        </li>

        <li className="w-[90px] h-[90px] flex flex-col items-center transform hover:-translate-y-6 duration-300 ease-in-out hover:bg-orange-300 rounded-md p-4 group">
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            <BsFillPersonLinesFill size={30} className="mx-auto" />
            <p className="mt-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
              CV
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
