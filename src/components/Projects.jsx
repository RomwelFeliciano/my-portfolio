import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Kloudtech",
      image: "images/Projects/kloudtech.png",
      details:
        "Business Website Landing Page of Kloudtech to show who and what is the company all about",
      linkDemo: "https://kloudtechsea.com/",
      linkGithub: "https://kloudtechsea.com/",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "jQuery", "Bootstrap"],
    },
    {
      id: 2,
      name: "Kloudtrack",
      image: "images/Projects/kloudtrack.png",
      details:
        "A Weather Monitoring Application that receives real time data from the weather station of Kloudtrack.",
      linkDemo:
        "https://development.kloudtechsea.com/Kloudtrackv5/users/government/dashboard.html",
      linkGithub:
        "https://development.kloudtechsea.com/Kloudtrackv5/users/government/dashboard.html",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "jQuery",
        "Bootstrap",
        "ChartJS",
      ],
    },
    {
      id: 3,
      name: "Pizza Menu",
      image: "images/Projects/pizzamenu.png",
      details:
        "A Static Website that uses React Framework to build reusable components in a website.",
      linkDemo: "https://romwelfeliciano.github.io/pizza-menu/",
      linkGithub: "https://github.com/RomwelFeliciano/pizza-menu",
      technologies: ["React", "Vanilla CSS"],
    },
    {
      id: 4,
      name: "Pic-Sell Planet",
      image: "images/Projects/picsellplanet.png",
      details:
        "Capstone Project during college with 10 Main Capabilities (Registration, Newsfeed, Showcasing of Work, Appointment, E-Commerce, Ratings, Invoice Receipt, 2D Mapping, Messaging, Admin Maintenance)",
      linkDemo: "https://picsellplanet.com/",
      linkGithub: "https://github.com/RomwelFeliciano/Pic-Sell-Planet",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "jQuery"],
    },
    {
      id: 5,
      name: "Travel List",
      image: "images/Projects/travellist.png",
      details:
        "A react application that lists all the things for traveling, with clear list button and mark it as checked,",
      linkDemo: "https://romwelfeliciano.github.io/travel-list/",
      linkGithub: "https://github.com/RomwelFeliciano/travel-list",
      technologies: ["React", "Vanilla CSS"],
    },
    {
      id: 6,
      name: "Grocery Buddy",
      image: "images/Projects/grocery.png",
      details:
        "A react application that lists things when doing grocery, the user can add, delete, and update the list.",
      linkDemo: "https://romwelfeliciano.github.io/grocery-buddy/",
      linkGithub: "https://github.com/RomwelFeliciano/grocery-buddy",
      technologies: ["React + Vite", "Tailwind CSS"],
    },
    {
      id: 7,
      name: "Eat and Split",
      image: "images/Projects/eatnsplit.png",
      details:
        "A react appication that add a user and select to split the bill in a shared transaction",
      linkDemo: "https://romwelfeliciano.github.io/eat-n-split/",
      linkGithub: "https://github.com/RomwelFeliciano/eat-n-split",
      technologies: ["React", "Vanilla CSS"],
    },
    {
      id: 8,
      name: "Guess The Number",
      image: "images/Projects/guess.png",
      details:
        "A Simple PHP game that is created for the midterm with 3 difficulties and login form. The user will guess the number and win a stars.",
      linkDemo: "https://github.com/RomwelFeliciano/Guess-The-Number",
      linkGithub: "https://github.com/RomwelFeliciano/Guess-The-Number",
      technologies: ["HTML", "CSS", "PHP"],
    },
    {
      id: 9,
      name: "Student Information",
      image: "images/Projects/student.png",
      details:
        "A simple website that uses XML for data and DOM for manipulating the elements of a website.",
      linkDemo: "https://romwelfeliciano.github.io/Student-Records/",
      linkGithub: "https://github.com/RomwelFeliciano/Student-Records",
      technologies: ["HTML", "CSS", "JavaScript", "XML"],
    },
  ];

  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(projects);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section
      id="Projects"
      className="min-h-screen flex flex-col justify-center px-4 pt-20 pb-20 lg:pt-24 lg:px-32"
    >
      <h2 className="text-3xl lg:text-4xl text-main text-center font-bold mb-4 lg:mb-10">
        Projects
      </h2>
      <div className="flex items-center gap-4 flex-wrap">
        {portfolios.slice(0, nextItems)?.map((proj) => (
          <div
            //   data-aos="fade-zoom-in"
            //   data-aos-delay="50"
            //   data-aos-duration="1000"
            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            key={proj.id}
          >
            <figure>
              <img className="rounded-[8px]" src={proj.image} alt={proj.name} />
            </figure>
            <div className="w-full h-full bg-main bg-opacity-0 absolute top-0 left-0 z[5] group-hover:bg-opacity-40 duration-300 ease-in-out rounded-[8px]">
              <div className="w-ful h-full flex items-center justify-center">
                <button
                  onClick={() => showModalHandler(proj.id)}
                  className="text-transparent bg-opacity-0 group-hover:text-white group-hover:bg-main duration-300 ease-in-out py-2 px-4 rounded-[8px]"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* {projects.length === nextItems ? null : ( */}
      {nextItems < portfolios.length && projects.length > 6 && (
        <div className="text-center mt-6">
          <button
            className="text-white bg-main py-2 px-4 rounded-[8px]"
            onClick={loadMoreHandler}
          >
            Load More
          </button>
        </div>
      )}

      {showModal && (
        <ProjectModal
          setShowModal={setShowModal}
          activeID={activeID}
          projects={projects}
        />
      )}
    </section>
  );
};

export default Projects;
