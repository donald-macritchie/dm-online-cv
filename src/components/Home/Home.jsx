import React, { useLayoutEffect, useRef, useState } from "react";
import { homeAnimations } from "./homeAnimations";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const comp = useRef(null);
  const [overlayHidden, setOverlayHidden] = useState(false);

  useLayoutEffect(() => {
    console.log("Starting home animations"); // Debugging line
    const cleanup = homeAnimations(setOverlayHidden, comp);
    return cleanup;
  }, []);

  return (
    <div ref={comp} className="w-full h-full relative">
      {/* Fullscreen Overlay */}
      {!overlayHidden && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black z-50 flex flex-col md:flex-row justify-center items-center"
        >
          <h1
            id="overlay-text"
            className="text-6xl sm:text-7xl font-bold text-white border-2 border-white p-2 rounded-md"
          >
            D.M
          </h1>
        </div>
      )}

      {/* Main Content */}
      <div id="main-content" className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center mt-[300px]">
        <p id="hi-my-name-is" className="text-2xl">Hi, My name is</p>
        <h1 id="name" className="text-6xl sm:text-7xl font-bold text-black">Donald MacRitchie</h1>
        <h2 id="title-1" className="text-4xl sm:text-7xl">Junior Fullstack</h2>
        <h2 id="title-2" className="text-4xl sm:text-7xl">Web Developer</h2>
        <div className="max-w-[200px]">
          <Link
            id="view-projects-btn"
            to="/projects"
            className="border-2 border-black rounded-lg px-6 py-3 my-8 flex items-center transition-colors duration-300 ease-in-out hover:bg-orange-300"
          >
            View Projects <HiArrowNarrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
