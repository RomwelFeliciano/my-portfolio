import React from "react";

const Skills = () => {
  // Data for Skills
  const frontskills = [
    {
      name: "HTML",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "jQuery",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    },
    {
      name: "Bootstrap",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "React",
      level: "Basic",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ];

  const backskills = [
    {
      name: "PHP",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Java",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C#",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "C++",
      level: "Basic",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "MySQL",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Firebase",
      level: "Basic",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ];

  const otherskills = [
    {
      name: "Git",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Github",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Photoshop",
      level: "Basic",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
    {
      name: "Canva",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "Word",
      level: "Advanced",
      icon: "https://img.icons8.com/color/48/ms-word.png",
    },
    {
      name: "PowerPoint",
      level: "Intermediate",
      icon: "https://img.icons8.com/color/48/ms-powerpoint--v1.png",
    },
    {
      name: "Excel",
      level: "Intermediate",
      icon: "https://img.icons8.com/color/48/ms-excel.png",
    },
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen flex flex-col justify-center px-32"
    >
      <h2 className="text-4xl text-main text-center font-bold mb-10">
        Skills and Expertise
      </h2>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4 bg-second rounded-lg p-5">
          <h3 className="text-xl font-bold text-center py-2">
            Front-End Development
          </h3>
          <div className="grid gap-8 grid-cols-12 py-5 place-items-center">
            {frontskills &&
              frontskills.map((fskill, index) => (
                <div className="col-span-6 grid grid-cols-12 gap-4" key={index}>
                  <div className="col-span-4 flex justify-center items-center">
                    <img src={fskill.icon} alt="icon" className="w-10" />
                  </div>
                  <div className="col-span-8 font-medium">
                    <h4 className="text-md">{fskill.name}</h4>
                    <p className="text-main text-sm">{fskill.level}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-span-4 bg-second rounded-lg p-5">
          <h3 className="text-xl font-bold text-center py-2">
            Back-End Development
          </h3>
          <div className="grid gap-8 grid-cols-12 py-5 place-items-center">
            {backskills &&
              backskills.map((fskill, index) => (
                <div className="col-span-6 grid grid-cols-12 gap-4" key={index}>
                  <div className="col-span-4 flex justify-center items-center">
                    <img src={fskill.icon} alt="icon" className="w-10" />
                  </div>
                  <div className="col-span-8 font-medium">
                    <h4 className="text-md">{fskill.name}</h4>
                    <p className="text-main text-sm">{fskill.level}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-span-4 bg-second rounded-lg p-5">
          <h3 className="text-xl font-bold text-center py-2">Other Tools</h3>
          <div className="grid gap-8 grid-cols-12 py-5 place-items-center">
            {otherskills &&
              otherskills.map((fskill, index) => (
                <div className="col-span-6 grid grid-cols-12 gap-4" key={index}>
                  <div className="col-span-4 flex justify-center items-center">
                    <img src={fskill.icon} alt="icon" className="w-10" />
                  </div>
                  <div className="col-span-8 font-medium">
                    <h4 className="text-md">{fskill.name}</h4>
                    <p className="text-main text-sm">{fskill.level}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
