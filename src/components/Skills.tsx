import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="w-full h-screen min-h-screen">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full mb-20  items-center">
          <CpuChipIcon className="py-11 mx-auto w-10 inline-block" />
          <h1 className="text-4xl font-bold inline border-b-4 border-cyan-950 text-center">
            Skills &amp; Technologies
          </h1>
          <p className="mt-10 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-cyan-950 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
