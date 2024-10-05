import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../Darkmode/ThemeContext";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { toggleTheme } = useTheme();
  const { isDarkMode } = useTheme();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-gray-900 text-white"
      }  p-4 fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center">
        <div
          onClick={toggleTheme}
          className="text-3xl font-semibold text-white hover:cursor-pointer"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Logeshwaran
        </div>

        <div className="flex space-x-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer p-2 border-b-2 border-transparent hover:border-white"
          >
            ABOUT
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer p-2 border-b-2 border-transparent hover:border-white"
          >
            PROJECTS
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer p-2 border-b-2 border-transparent hover:border-white"
          >
            SKILLS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer p-2 border-b-2 border-transparent hover:border-white"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
