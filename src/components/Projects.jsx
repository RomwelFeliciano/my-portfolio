import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      name: "Kloudtech",
      image: "/images/Projects/kloudtech.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      name: "Kloudtrack",
      image: "/images/Projects/kloudtrack.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      name: "Pizza Menu",
      image: "/images/Projects/pizzamenu.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      name: "Pic-Sell Planet",
      image: "/images/Projects/picsellplanet.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      name: "Travel List",
      image: "/images/Projects/travellist.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      name: "Grocery Buddy",
      image: "/images/Projects/grocery.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      name: "Eat and Split",
      image: "/images/Projects/eatnsplit.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      name: "Guess The Number",
      image: "/images/Projects/guess.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      name: "Student Information",
      image: "/images/Projects/student.png",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
  ];

  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(projects);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
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
        {portfolios.slice(0, nextItems)?.map((proj, index) => (
          <div
            //   data-aos="fade-zoom-in"
            //   data-aos-delay="50"
            //   data-aos-duration="1000"
            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            key={index}
          >
            <figure>
              <img className="rounded-[8px]" src={proj.image} alt={proj.name} />
            </figure>
            <div className="w-full h-full bg-main bg-opacity-0 absolute top-0 left-0 z[5] group-hover:bg-opacity-40 duration-300 ease-in-out rounded-[8px]">
              <div className="w-ful h-full flex items-center justify-center">
                <button className="text-transparent bg-opacity-0 group-hover:text-white group-hover:bg-main duration-300 ease-in-out py-2 px-4 rounded-[8px]">
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
    </section>
  );
};

export default Projects;
