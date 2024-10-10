import React from "react";
import myimage1 from "../../assets/myimage1.jpg";
import linkedIn from "../../assets/linkedin-light.svg";
import linkedIndark from "../../assets/linkedin-dark.svg";
import gitHub from "../../assets/github-light.svg";
import gitHubdark from "../../assets/github-dark.svg";
import { useTheme } from "../Darkmode/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      className={`min-h-fit flex flex-col items-center   ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } pb-8 `}
    >
      <div className="text-center mt-[100px] px-4">
        <p className="text-2xl font-quicksand">
          "From engines to algorithms, my passion grew, Now in IT, I’ll craft
          something new."
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-20 mt-12 lg:w-3/4 lg:px-10 px-4">
        <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
          <img
            onClick={() => {
              alert("Photo captured in Vagamon on Jan 2024");
            }}
            src={myimage1}
            alt="Profile"
            className={`w-full lg:mb-24 max-w-xs lg:max-w-sm border-2 ${
              isDarkMode ? "border-white " : "border-black "
            } object-cover rounded-lg `}
          />
        </div>

        <div className="flex flex-col items-center text-center lg:ml-12">
          <p className=" text-3xl font-robotoMono font-bold mb-4 underline">
            About Myself
          </p>

          <p className="text-lg  font-robotoMono max-w-xl">
            <p className="mb-2">
              {" "}
              Hi, <br /> <span className="font-bold">I'm Logeshwaran</span>{" "}
            </p>
            I'm a Mechanical Engineering grad who’s super into tech and excited
            to dive into the IT world. I love learning new things, whether it's
            coding, web development, or machine learning. Ready to bring my
            problem-solving skills into tech and see where it takes me!
          </p>
          <div className=" flex flex-col justify-center items-center w-full py-6 mt-6">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/logeshwaranr0902"
                target="_blank"
                className={`flex items-center space-x-2  ${
                  isDarkMode ? "hover:text-blue-300" : "hover:text-blue-600"
                } hover:scale-110 transition-transform duration-300`}
              >
                <img
                  src={isDarkMode ? linkedIndark : linkedIn}
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Logeshwaranr0902"
                target="_blank"
                className={`flex items-center space-x-2  ${
                  isDarkMode ? "hover:text-blue-300" : "hover:text-blue-600"
                } hover:scale-110 transition-transform duration-300`}
              >
                <img
                  src={isDarkMode ? gitHubdark : gitHub}
                  alt="GitHub"
                  className="w-6 h-6"
                />
                <span>GitHub</span>
              </a>
            </div>
            <div className="mt-5 ml-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1XoQwqX3Wzk8Sil6V4hsNZqVyzHdM8Wwl"
                download="Logeshwaran Resume.pdf"
                className={`  ${
                  isDarkMode
                    ? "text-black bg-white hover:bg-blue-400 hover:text-white"
                    : "text-white bg-black hover:bg-blue-400 hover:text-black"
                } py-2 px-6 rounded-full font-bold  hover:scale-110 transition-transform duration-300`}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
