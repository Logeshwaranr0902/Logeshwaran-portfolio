import React from "react";
import clogo from "../../assets/c.svg";
import java from "../../assets/java-4.svg";
import python from "../../assets/python-logo-only.svg";
import react from "../../assets/react-2.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import javascript from "../../assets/logo-javascript.svg";
import html from "../../assets/html-1.svg";
import css from "../../assets/css-3.svg";
import flask from "../../assets/Flask.svg";
import sql from "../../assets/sql-database-generic-svgrepo-com.svg";
import { useTheme } from "../Darkmode/ThemeContext";

const skills = [
  {
    id: 1,
    name: "C++",
    logo: clogo,
    proficiency: 70,
  },
  {
    id: 2,
    name: "Java",
    logo: java,
    proficiency: 45,
  },
  {
    id: 3,
    name: "Python",
    logo: python,
    proficiency: 70,
  },
  {
    id: 4,
    name: "SQL",
    logo: sql,
    proficiency: 65,
  },
  {
    id: 5,
    name: "React",
    logo: react,
    proficiency: 75,
  },
  {
    id: 6,
    name: "Flask",
    logo: flask,
    proficiency: 50,
  },
  {
    id: 7,
    name: "TailwindCSS",
    logo: tailwindcss,
    proficiency: 100,
  },
  {
    id: 8,
    name: "Javascript",
    logo: javascript,
    proficiency: 65,
  },
  {
    id: 9,
    name: "HTML",
    logo: html,
    proficiency: 100,
  },
  {
    id: 10,
    name: "CSS",
    logo: css,
    proficiency: 100,
  },
];

const Skills = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      className={` min-h-fit flex flex-col ${
        isDarkMode ? "bg-gray-900  text-white " : "bg-white  text-black "
      } items-center pb-36`}
    >
      <h className="text-[50px] text-center mt-[18px] font-bold mb-10">
        SKILLS
      </h>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl w-full px-4">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-container perspective">
            <div className="skill-card transition-transform duration-600 transform-style-preserve-3d">
              <div
                className={` skill-front flex items-center ${
                  isDarkMode
                    ? "bg-gray-900  text-white "
                    : " bg-gray-100 text-black "
                } border-gray-300 border-2 rounded-lg p-1 shadow-md backface-hidden`}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain mr-4"
                />
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
              <div
                className={`skill-back  flex flex-col items-center justify-center${
                  isDarkMode
                    ? "bg-gray-900  text-white "
                    : "  bg-slate-50 text-black "
                } border-gray-300 border-2 rounded-lg p-1 shadow-md backface-hidden`}
              >
                <span className="text-xs font-semibold">SKILL LEVEL</span>
                <div className="w-full bg-gray-200 rounded-full mt-2">
                  <div
                    className="bg-blue-400 rounded-full"
                    style={{ width: `${skill.proficiency}%`, height: "8px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
