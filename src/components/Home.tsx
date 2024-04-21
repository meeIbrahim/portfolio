import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="w-full min-h-screen flex items-start">
      <div className="py-20 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Development Engineer in Test
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            With an Electrical Engineering background and 2 years as a QA
            Engineer, I bring a unique perspective to the tech world. My
            curiosity keeps me exploring, and I'm constantly diving into
            different technologies to gain hands-on experience
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-blue-900 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="py-10">
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
