import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTheme } from "../Darkmode/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    emailjs
      .send(
        "service_338iart",
        "template_jhw94ni",
        formData,
        "zkv6Gie1-Wn9tgKHy"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormData({ name: "", email: "", message: "" }); // Reset form data on success
        },
        (error) => {
          console.error("Error sending email:", error);
          // Optionally, show an error message to the user
        }
      )
      .finally(() => {
        setIsLoading(false); // End loading
      });
  };

  return (
    <section
      className={`min-h-fit flex flex-col items-center ${
        isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black "
      }  py-10`}
    >
      <div className="font-black mt-5 text-4xl">Let's Connect !</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-5 w-full max-w-md px-4"
      >
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block mb-2 text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-2 border ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 focus:ring-white "
                : "bg-white border-black border-2 focus:ring-black"
            }  rounded-full focus:outline-none focus:ring-1 `}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-2 border ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 focus:ring-white "
                : "bg-white border-black border-2 focus:ring-black"
            }  rounded-full focus:outline-none focus:ring-1 `}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="message" className="block mb-2 text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className={`w-full p-2 border ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 focus:ring-white "
                : "bg-white border-black border-2 focus:ring-black"
            }  rounded-3xl focus:outline-none focus:ring-1 `}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`px-4 py-2 text-lg font-bold ${
            isDarkMode ? " text-white bg-blue-500" : "bg-black text-white"
          }  rounded-full hover:bg-blue-600 hover:text-white ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
