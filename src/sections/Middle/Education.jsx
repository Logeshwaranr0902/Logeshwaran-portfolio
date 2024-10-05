import React from "react";
const Education = () => {
  return (
    <section className="min-h-fit flex flex-col items-center bg-black text-white">
      <h2 className="text-5xl font-black  text-yellow-300 mt-5">EDUCATION</h2>
      <div className="flex flex-wrap justify-evenly items-start my-[100px] w-full">
        <div className="border flex flex-col p-16 rounded-[40px] mx-4 my-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <div className="font-black text-4xl mb-6 text-yellow-300">
            2020-2024
          </div>
          <div className="font-medium text-3xl mb-2">
            Bachelor of <br />
            Engineering
          </div>
          <div className="font-quicksand text-lg mb-2 text-gray-300">
            Mechanical Engineering
          </div>
          <div className="font-robotoMono mb-6 text-gray-300">
            <span>
              <a
                href="https://maps.app.goo.gl/VVUN2GbEpdv9dAYG9"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                St.Joseph's College <br />
                of Engineering
              </a>
            </span>
          </div>
          <div>
            Percentage:
            <span className="text-yellow-300">&nbsp;&nbsp;86.3%</span>
          </div>
        </div>

        <div className="border flex flex-col p-16 rounded-[40px] mx-4 my-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <div className="font-black text-4xl mb-6 text-yellow-300">
            2019-2020
          </div>
          <div className="font-medium text-3xl mb-12">
            12<sup>th</sup> Grade
          </div>
          <div className="font-quicksand text-lg mb-2 text-gray-300">
            Bio-Maths
          </div>
          <div className="font-robotoMono mb-5 text-gray-300">
            <span>
              <a
                href="https://maps.app.goo.gl/Qbw5AGfwxXyRVyW38"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                C.K School of <br />
                Practical Knowledge
              </a>
            </span>
          </div>
          <div>
            Percentage:
            <span className="text-yellow-300">&nbsp;&nbsp;75.1%</span>
          </div>
        </div>

        <div className="border flex flex-col p-16 rounded-[40px] mx-4 my-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <div className="font-black text-4xl mb-6 text-yellow-300">
            2017-2018
          </div>
          <div className="font-medium text-3xl mb-20">
            10<sup>th</sup> Grade
          </div>
          <div className="font-robotoMono mb-5 text-gray-300">
            <span>
              <a
                href="https://maps.app.goo.gl/Qbw5AGfwxXyRVyW38"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                C.K School of <br />
                Practical Knowledge
              </a>
            </span>
          </div>
          <div>
            Percentage:
            <span className="text-yellow-300">&nbsp;&nbsp;94.8%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
