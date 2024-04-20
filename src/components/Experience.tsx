import { BriefcaseIcon } from "@heroicons/react/24/solid";
import emumba from "../assets/emumba.jpg";

export default function Experience() {
  return (
    <section id="experiences" className="w-full">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full items-center mb-20">
          <BriefcaseIcon className="w-10 py-11 md inline-block mb-4" />
          <h1 className="text-4xl font-bold inline border-b-4 border-cyan-950 text-center">
            My Experience
          </h1>
          <div className="container px-5 py-10 md">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-5 gap-8">
                <div className="flex items-center justify-end justify-top col-start-1">
                  <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <img src={emumba} className="rounded-2xl" />
                  </div>
                </div>
                <div className="col-start-2 col-end-5 col-span-3 spand flex flex-col">
                  <h3 className="text-xl font-bold mb-2">
                    Software Development Engineer in Test
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    July 2022 - Current
                  </p>
                  <p className="">
                    In my role as an experienced Software Development Engineer
                    in Test (SDET), I have successfully fostered collaboration
                    between automation engineers and the manual testing team,
                    streamlining processes and significantly reducing testing
                    timelines. By effectively engaging with clients, I ensure
                    alignment with their expectations and contribute to the
                    development of robust processes for improved code quality
                    and efficient automation of user stories. My
                    responsibilities extend to the regular design and
                    enhancement of frameworks, reinforcing the automation
                    suite's reliability and usability. Through these efforts, I
                    aim to minimize the manual team's workload, elevate
                    application quality, and deliver enhanced value. This role
                    also entails mentorship of junior team members and
                    leveraging my expertise to help them grow
                  </p>
                </div>
                <div className="flex items-center justify-end justify-top col-start-1">
                  <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <img src={emumba} className="rounded-2xl" />
                  </div>
                </div>
                <div className="col-start-2 col-end-5 col-span-3 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">QA Engineer</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Sep 2021 - July 2022
                  </p>
                  <p className="">
                    In this role as a QA Engineer, I played a pivotal role in
                    ensuring the quality and reliability of web applications,
                    spanning both front-end and back-end, as well as
                    infrastructure components. My contributions went beyond
                    routine testing, encompassing process improvements and the
                    creation of comprehensive test cases and test plans. One of
                    my significant accomplishments was designing a test bed that
                    closely mirrored our client's expected infrastructure for
                    testing purposes. This initiative enhanced the value of our
                    testing efforts by providing a more realistic environment
                    for evaluation. This test bed was meticulously managed and
                    deployed using Terraform, ensuring consistency and
                    efficiency in our testing processes As part of my
                    responsibilities, I assumed the role of managing AWS
                    resources for the team. This involved provisioning,
                    configuring, and maintaining AWS infrastructure to support
                    our testing needs. By taking on this role, I streamlined
                    resource allocation and management, optimizing our testing
                    workflowIn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
