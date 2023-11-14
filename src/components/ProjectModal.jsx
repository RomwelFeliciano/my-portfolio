import React from "react";

const ProjectModal = ({ projects, activeID, setShowModal }) => {
  const project = projects.find((proj) => proj.id === activeID);

  return (
    <div className="w-full h-full fixed flex justify-center items-center top-0 left-0 z-10 bg-main bg-opacity-30">
      <div className="max-w-[600px] fixed z-20 bg-white rounded-[8px] p-5 m-5 lg:my-5">
        <div>
          <figure>
            <img src={project.image} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-main font-bold my-5">{project.name}</h2>
          <p className="text-[15px] leading-7">{project.details}</p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-main text-[18px] font-bold">Technologies:</h4>
            {project.technologies &&
              project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-second py-1 px-2 rounded-[5px] text-[14px]"
                >
                  #{tech}
                </span>
              ))}
          </div>
          <div className="flex justify-center items-center gap-2 mt-5">
            <a href={project.linkDemo} target="_blank">
              <button className="text-white text-sm bg-main py-2 px-3 rounded-[8px]">
                See Demo
              </button>
            </a>
            <a href={project.linkGithub} target="_blank">
              <button className="text-white text-sm bg-main py-2 px-3 rounded-[8px]">
                View Github
              </button>
            </a>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="w-[1.5rem] h-[1.5rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px]"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
