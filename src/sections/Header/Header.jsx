import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../Darkmode/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
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

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <header
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-gray-900 text-white"
      } p-4 fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center">
        {/* Logeshwaran Name */}
        <div
          onClick={toggleTheme}
          className="text-3xl font-semibold text-white hover:cursor-pointer md:text-4xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          <span className="text-2xl md:text-3xl">Logeshwaran</span>{" "}
          {/* Smaller font for mobile */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
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

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer p-2 border-b-2 border-transparent hover:border-white"
          >
            ABOUT
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer p-2 border-b-2 border-transparent hover:border-white"
          >
            PROJECTS
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer p-2 border-b-2 border-transparent hover:border-white"
          >
            SKILLS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer p-2 border-b-2 border-transparent hover:border-white"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
