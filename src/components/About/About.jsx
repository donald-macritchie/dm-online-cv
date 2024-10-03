import React from 'react';
import { Link } from "react-router-dom";
import SelfPortrait from "../../assets/about_images/self_portrait.JPG";

const About = () => {
  return (
    <div className="max-w-[1000px] w-full pt-[100px] mx-auto flex flex-col items-center mb-[200px]">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold my-8 px-4">A little bit about me...</h1>
      </div>

      {/* Self Portrait Image */}
      <div className='max-w-[700px] w-full h-full flex justify-center my-10'>
        <div className=' w-81 h-81 border-black border-2 rounded-full shadow-2xl'>
        <img 
          src={SelfPortrait} 
          alt="Self Portrait of Donald MacRitchie" 
          className="rounded-full w-80 h-80 object-cover border-orange-300 border-2" // Set the width and height for the circle
        />
        </div>
      </div>


      {/* Introduction Section */}
      <div className="max-w-[700px] w-full flex flex-col my-8 px-10">
        <div className="bg-orange-100 py-8 px-6 shadow-md rounded-lg">
          <p className="text-lg text-center">
            I’m a{" "}
            <span className="font-bold text-xl">Junior Web Developer</span> with
            a passion for combining logical problem-solving with creative
            design. My journey has been shaped by a desire to find a career that
            challenges me intellectually while allowing me to build meaningful,
            user-focused web experiences.
          </p>
        </div>
      </div>

      {/* Career Background */}
      <div className="max-w-[700px] w-full flex flex-col my-8 px-10">
        <div className="bg-gray-100 py-8 px-6 shadow-md rounded-lg">
          <p className="font-bold text-2xl text-center mb-4">
            So, how did I get here?
          </p>
          <p className="text-lg text-center">
            For most of my adult life, I worked in retail and sales. Starting
            out in a local supermarket, I eventually moved into sales roles for
            different companies. While I enjoyed parts of it, I couldn’t shake
            the feeling that something was missing. I wanted more than just a
            job—I wanted a career that aligned with my strengths and
            aspirations.
          </p>
        </div>
      </div>

      {/* Desire for Change */}
      <div className="max-w-[700px] w-full flex flex-col my-8 px-10">
        <div className="bg-orange-100 py-8 px-6 shadow-md rounded-lg">
          <p className="font-bold text-2xl text-center mb-4">
            I wanted change.
          </p>
          <p className="text-lg text-center">
            I realized I needed a challenge where I could apply my methodical
            thinking and creativity—something beyond the scope of sales. This
            led me on a quest to find a new career path that could offer both
            intellectual stimulation and the opportunity to create.
          </p>
        </div>
      </div>

      {/* Decision to Transition */}
      <div className="max-w-[700px] w-full flex flex-col my-8 px-10">
        <div className="bg-gray-100 py-8 px-6 shadow-md rounded-lg">
          <p className="text-lg text-center mb-4">
            And so, the question I asked myself was:
          </p>
          <p className="font-bold text-2xl text-center my-12">
            “What are you going to do, Don?”
          </p>
          <p className="text-lg text-center mb-6">
            That’s when I discovered{" "}
            <span className="font-bold">Web Development</span>. It combined
            everything I was looking for—a field where I could problem-solve
            logically, but also design creatively. Through tutorials, resources,
            and a taster course, I built my first website, and I knew this was
            it. I found my passion.
          </p>
        </div>
      </div>

      {/* Bootcamp Experience */}
      <div className="max-w-[700px] w-full flex flex-col my-8 px-10">
        <div className="bg-orange-100 py-8 px-6 shadow-md rounded-lg">
          <p className="text-lg text-center mb-6">
            To fully dive in, I enrolled in an intensive web development
            bootcamp. The course was demanding, but it gave me hands-on
            experience in front-end and back-end development, and taught me how
            to collaborate in Agile environments.
          </p>
          <p className="font-bold text-2xl text-center my-4">
            It wasn’t easy, but it was worth it.
          </p>
          <p className="text-lg text-center">
            Through the challenges, I grew as a developer. From learning HTML,
            CSS, JavaScript, and Python, to working remotely and meeting tight
            deadlines, the bootcamp prepared me for the fast-paced world of web
            development.
          </p>
        </div>
      </div>

      {/* Current Position */}
      <div className="max-w-[700px] w-full flex flex-col my-8 px-10">
        <div className="bg-gray-100 py-8 px-6 shadow-md rounded-lg">
          <p className="font-bold text-2xl text-center mb-6">
            Now here I am, ready to make an impact.
          </p>
          <p className="text-lg text-center">
            Today, I’m excited to take on new challenges and contribute to
            innovative projects. I’m continuously learning and refining my
            skills as a Junior Web Developer, and I can’t wait to collaborate
            with teams that value both creativity and precision.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-[700px] w-full px-10 flex flex-col my-8">
        <div className="bg-orange-100 py-8 px-6 shadow-md rounded-lg flex flex-col items-center">
          <p className="text-lg text-center mb-6">
            Now that you know me, I’d love to know more about you. If you have a
            project in mind, I’d love to hear from you!
          </p>
          <p className="py-6 text-lg text-center">
            To get in touch, head over to the contact page.
          </p>
          <Link
            to="/contact"
            className="font-bold transition-colors duration-300 ease-in-out hover:bg-orange-300 border-2 border-black rounded-md p-2 m-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
