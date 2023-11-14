const ExperienceItemWork = ({ experience }) => {
  return (
    <>
      {experience &&
        experience.map((exp, index) => (
          <ol
            className="flex flex-col md:flex-row relative border-l border-main pr-5"
            key={index}
          >
            <li className="mb-8 ml-4">
              <div className="absolute w-3 h-3 bg-main rounded-full mt-1.5 -left-1.5 border-white"></div>
              <p className="flex flex-wrap gap-4 flex-row items-center justify-start mb-2 text-xs md:text-sm">
                <span className="inline-block px-2 py-1 text-white bg-main rounded-md">
                  {exp.year}
                </span>
                <span className="text-xl text-main dark:text-white transition-all duration-500 ease-in">
                  {exp.name}
                </span>
              </p>
              <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                <span className="text-lg text-black dark:text-white transition-all duration-500 ease-in">
                  {exp.company}
                </span>
                -
                <span className="text-lg text-stone-700 dark:text-white transition-all duration-500 ease-in">
                  {exp.workSetUp}
                </span>
              </p>
              <ul className="pl-5 pt-2">
                {exp.details &&
                  exp.details.map((det, index) => (
                    <li
                      key={index}
                      className="list-disc text-sm font-normal text-gray-600 dark:text-gray-300 transition-all duration-500 ease-in"
                    >
                      {det}
                    </li>
                  ))}
              </ul>
            </li>
          </ol>
        ))}
    </>
  );
};

export default ExperienceItemWork;
