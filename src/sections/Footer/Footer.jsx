import React from "react";
import { useTheme } from "../Darkmode/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer
      className={`min-h-fit flex ${
        isDarkMode ? "bg-black" : "bg-gray-900"
      } flex-col  justify-center items-center text-gray-300 py-3`}
    >
      <div>© 2024 Logeshwaran. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
