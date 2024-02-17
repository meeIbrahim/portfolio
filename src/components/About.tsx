import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" flex flex-col justify-center items-center w-4/6">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-950 text-center">
            About
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
              to="work"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-blue-900 cursor-pointer"
            >
              Work
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
export default About;
