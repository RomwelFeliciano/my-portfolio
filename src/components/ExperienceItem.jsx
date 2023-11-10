const ExperienceItem = ({ experience }) => {
  return (
    <>
      {experience &&
        experience.map((exp) => (
          <ol className="flex flex-col md:flex-row relative border-l border-main pr-5">
            <li className="mb-8 ml-4">
              <div className="absolute w-3 h-3 bg-main rounded-full mt-1.5 -left-1.5 border-white"></div>
              <p className="flex flex-wrap gap-4 flex-row items-center justify-start mb-2 text-xs md:text-sm">
                <span className="inline-block px-2 py-1 text-white bg-main rounded-md">
                  {exp.year}
                </span>
                <span className="text-xl text-main">
                  {exp.name}
                </span>
              </p>
              <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="text-lg text-black">
                  {exp.company}
                </span>
                -
                <span className="text-lg text-stone-700">
                  {exp.workSetUp}
                </span>
              </p>
              <p className="my-2 text-sm font-normal text-gray-600">
                {exp.details}
              </p>
            </li>
          </ol>
        ))}
    </>
  );
};

export default ExperienceItem;
