const About = () => {
  return (
    <div id="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-950">
                About
              </p>
            </div>
            <div></div>
          </div>
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
        </div>
      </div>
    </div>
  );
};
export default About;
