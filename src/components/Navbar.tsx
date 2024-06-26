import { useState } from "react";
import resume from "../assets/resume.pdf";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-cyan-950 text-stone-200 z-40">
      <div>
        <h1 className=" font-thin text-2xl italic font-serif">MIA</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        <button>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </button>
        <button>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </button>
        <button>
          <Link to="experiences" smooth={true} duration={500}>
            Experience
          </Link>
        </button>
        <button>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </button>
        <button>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </button>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="experiences"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="ps-5 flex justify-between items-center w-full text-stone-200 pe-1"
              href="https://www.linkedin.com/in/chmibrahim/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="ps-5 flex justify-between items-center w-full text-stone-200 pe-1"
              href="https://github.com/meeIbrahim"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff2e00]">
            <a
              className="ps-5 flex justify-between items-center w-full text-stone-200 pe-1"
              href="mailto:chaudry.mibrahim@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="ps-5 flex justify-between items-center w-full text-stone-200 pe-1"
              href={resume}
              download="myResume"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
