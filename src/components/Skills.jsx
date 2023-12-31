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
      name: "WordPress",
      level: "Basic",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
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
      name: "Packet Tracer",
      level: "Basic",
      icon: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png",
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
      className="min-h-screen flex flex-col justify-center px-4 pt-20 lg:pt-0 lg:px-32"
    >
      <h2 className="text-3xl lg:text-4xl text-main text-center font-bold mb-4 lg:mb-10">
        Skills and Expertise
      </h2>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-4 bg-second rounded-lg p-5">
          <h3 className="text-xl font-bold text-center py-2">
            Front-End Development
          </h3>
          <div className="grid gap-8 grid-cols-12 py-5 place-items-center">
            {frontskills &&
              frontskills.map((fskill, index) => (
                <div className="w-full col-span-7 lg:col-span-6 grid grid-cols-12 gap-0 lg:gap-4" key={index}>
                  <div className="col-span-4 flex justify-start lg:justify-center items-center">
                    <img
                      src={fskill.icon}
                      alt="icon"
                      className="w-10 hover:scale-125 duration-300"
                    />
                  </div>
                  <div className="col-span-8 font-medium">
                    <h4 className="text-lg lg:text-md">{fskill.name}</h4>
                    <p className="text-main text-md lg:text-sm">{fskill.level}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 bg-second rounded-lg p-5">
          <h3 className="text-xl font-bold text-center py-2">
            Back-End Development
          </h3>
          <div className="grid gap-8 grid-cols-12 py-5 place-items-center">
            {backskills &&
              backskills.map((fskill, index) => (
                <div className="w-full col-span-7 lg:col-span-6 grid grid-cols-12 gap-0 lg:gap-4" key={index}>
                  <div className="col-span-4 flex justify-start lg:justify-center items-center">
                    <img
                      src={fskill.icon}
                      alt="icon"
                      className="w-10 hover:scale-125 duration-300"
                    />
                  </div>
                  <div className="col-span-8 font-medium">
                    <h4 className="text-lg lg:text-md">{fskill.name}</h4>
                    <p className="text-main text-md lg:text-sm">{fskill.level}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 bg-second rounded-lg p-5">
          <h3 className="text-xl font-bold text-center py-2">Other Tools</h3>
          <div className="grid gap-8 grid-cols-12 py-5 place-items-center">
            {otherskills &&
              otherskills.map((fskill, index) => (
                <div className="w-full col-span-7 lg:col-span-6 grid grid-cols-12 gap-0 lg:gap-4" key={index}>
                  <div className="col-span-4 flex justify-start lg:justify-center items-center">
                    <img
                      src={fskill.icon}
                      alt="icon"
                      className="w-10 hover:scale-125 duration-300"
                    />
                  </div>
                  <div className="col-span-8 font-medium">
                    <h4 className="text-lg lg:text-md">{fskill.name}</h4>
                    <p className="text-main text-md lg:text-sm">{fskill.level}</p>
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
