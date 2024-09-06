import React from 'react';
import AboutImg from '../../assets/7358653-removebg-preview.png';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex min-h-screen flex-col md:flex-row items-center justify-center overflow-hidden bg-black shadow-xl mx-5 md:mx-30 bg-opacity-30 rounded-lg p-8 md:p-12"
    >
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img className="md:h-80" src={AboutImg} alt="About Me" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-12 md:mb-16 md:py-4">About</h2>
        <ul className="space-y-6">
          <li className="flex items-center gap-3">
            <IoArrowForward size={30} />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Front-end Developer</h1>
              <p className="text-sm md:text-md">
                I have experience building websites and web applications using JavaScript, React, Bootstrap, and Tailwind CSS. I am also familiar with SQL, Node.js, and Express.js. I have worked on various projects including personal, freelance, and organizational projects.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <IoArrowForward size={30} />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Python Developer</h1>
              <p className="text-sm md:text-md">
                I have experience with Python and libraries like Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, Keras, OpenCV, Django, and Flask. I have worked on data analysis, machine learning, app development, and web development projects.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <IoArrowForward size={30} />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Data Analyst</h1>
              <p className="text-sm md:text-md">
                I have experience in data analysis, visualization, cleaning, wrangling, preprocessing, modeling, and evaluation. I have worked on projects like the IRIS dataset, Plant Disease dataset, and Railway anomaly detection.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
