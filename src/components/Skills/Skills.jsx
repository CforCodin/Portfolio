import React from 'react';
import { FaCss3, FaHtml5, FaReact, FaNodeJs, FaPython, FaFileExcel } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiDjango, SiFlask, SiTensorflow, SiKeras } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="h-screen flex flex-col justify-center items-center p-6 md:p-12 ">
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center mb-8 md:mb-20">Skills</h1>
      <div className="bg-gradient-to-b from-gray-800 to-black p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {[
            { Icon: FaHtml5, color: "#F06529" },
            { Icon: FaCss3, color: "#2965F1" },
            { Icon: FaReact, color: "#61DBFB" },
            { Icon: SiJavascript, color: "#F7DF1E" },
            { Icon: FaPython, color: "#3776AB" },
            { Icon: FaFileExcel, color: "#217346" },
            { Icon: SiMysql, color: "#00758F" },
            { Icon: SiFlask, color: "#000000" },
            { Icon: SiTailwindcss, color: "#38B2AC" },
            { Icon: SiTensorflow, color: "#FF6F00" },
            { Icon: SiKeras, color: "#D00000" },
            { Icon: SiDjango, color: "#00758F" },
          ].map(({ Icon, color }, index) => (
            <span
              key={index}
              className="p-4 bg-zinc-900 flex items-center rounded-2xl hover:bg-gray-700 transition duration-300"
            >
              <Icon color={color} size={50} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
