import React, { useEffect, useState, useRef } from "react";
import emotionAnalyzer from "../../assets/EmotionAalyzer.png";
import amazonClone from "../../assets/amazonClone.png";
import toDoList from "../../assets/toDoList.png";

const projects = [
  {
    id: 1,
    title: "Emotion Analyzer",
    image: emotionAnalyzer,
    description:
      "This full-stack emotion analysis web app, built with React and Flask, allows users to upload CSV files for text analysis. The Flask backend processes the data using a pre-trained RandomForest model, with predictions visualized as bar charts in React using Recharts. The app supports light and dark modes for improved UX.",
    link: "https://github.com/Logeshwaranr0902/Emotion_analyzer",
  },
  {
    id: 2,
    title: "Amazon Clone ",
    image: amazonClone,
    description:
      "I created an Amazon web application featuring cart functionality, utilizing React for the user interface and Tailwind CSS for responsive design. This project provided me with practical experience in managing component state using React hooks, dynamically updating cart data, and applying Tailwind CSS for efficient, responsive styling. It also enhanced my knowledge of component-based architecture and interactive UI development.",
    link: "https://github.com/Logeshwaranr0902/Amazonclone",
  },
  {
    id: 3,
    title: "Todolist",
    image: toDoList,
    description:
      "I built a simple to-do list application using React. The application allows users to add, remove, and mark tasks as completed. I focused on understanding the basics of React, such as component structure, state management using hooks like useState, and handling user interactions through forms and buttons.",
    link: "https://github.com/Logeshwaranr0902/Todolist",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-fit pb-5 flex flex-col items-center text-yellow-300 bg-black`}
    >
      <p className="text-[50px] mt-[18px] font-bold mb-10">PROJECTS</p>
      <div className="space-y-8 w-full max-w-4xl mb-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col sm:flex-row items-center border border-white bg-black p-4 rounded-lg shadow-md px-4 sm:px-9 transition-transform duration-700 ${
              isVisible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <a href={project.link} target="_blank">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto border border-white hover:border-blue-400 sm:w-64 sm:h-36 object-contain rounded-md mr-8 transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </a>
            </div>

            <div>
              <div className="flex flex-col justify-center text-left flex-grow">
                <h3>
                  <span className="text-xl inline-block font-semibold mb-2 text-yellow-300 hover:text-white">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </span>
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;