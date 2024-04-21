import React from 'react'
import ReactDOM from 'react-dom/client'
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { IdentificationIcon } from "@heroicons/react/24/solid";

import "./index.css"
const CARE = () => {
  return (
    <div id="about" className="w-full py-10 min-h-screen flex items-center">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" flex flex-col justify-center items-center w-4/6">
          <IdentificationIcon className="py-11 w-10 inline-block" />
          <p className="text-4xl font-bold inline border-b-4 border-cyan-950 text-center">
            About Me
          </p>
          <div className="py-5"></div>
          <div className="py-16 rounded-md bg-cyan-950 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Muhammad Ibrahim, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div>
              <p>
                An engineer with experience in software testing using manual and
                automated tools. I am well-knowledged in testing principles and
                practices. In addition to that, I also delve into different
                technologies.
              </p>
            </div>
          </div>
          <div className="py-2">
            <Link
              to="experiences"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-blue-900 cursor-pointer"
            >
              Experience
              <span className="">
                <HiArrowNarrowDown size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CARE></CARE>
  </React.StrictMode>,
)
