import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
  const education = [
    {
      year: "2019 - 2023",
      name: "Tertiary Education",
      company: "Bataan Peninsula State University",
      workSetUp: "Dean's Lister",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      year: "2017 - 2019",
      name: "Secondary Education (Senior High)",
      company: "ACLC College of Balanga",
      workSetUp: "With High Honor",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      year: "2013 - 2017",
      name: "Secondary Education (Junior High)",
      company: "Orani National High School Main",
      workSetUp: "With High Honor",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
  ];

  const work = [
    {
      year: "September 2023 - Present",
      name: "Part-Time College Instructor",
      company: "Bataan Peninsula State University",
      workSetUp: "Work From Home",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      year: "May 2023 - September 2023",
      name: "Intern - Front-End Web Developer",
      company: "Kloudtech Corp.",
      workSetUp: "Onsite",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      year: "March 2023 - May 2023",
      name: "OJT - Front-End Web Developer",
      company: "Kloudtech Corp.",
      workSetUp: "Onsite",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
    {
      year: "December 2018",
      name: "Work Immersion - IT Support",
      company: "LGU Orani",
      workSetUp: "Onsite",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam sequi culpa quisquam esse aperiam veritatis atque, perferendis quidem sit id laboriosam soluta unde reprehenderit nobis incidunt voluptas voluptatem! Pariatur.",
    },
  ];

  return (
    <section
      id="Experience"
      className="min-h-screen flex flex-col justify-center pt-20 lg:pt-24 px-4 lg:px-32"
    >
      <h2 className="text-3xl lg:text-4xl text-main text-center font-bold mb-4 lg:mb-5">
        Experiences
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-2xl font-bold text-start pt-2 pb-4">
            Education
          </h3>
          <ExperienceItem experience={education} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-2xl font-bold text-start pt-2 pb-4">Work</h3>
          <ExperienceItem experience={work} />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
