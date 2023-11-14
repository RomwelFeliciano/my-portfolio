import ExperienceItem from "./ExperienceItem";
import ExperienceItemWork from "./ExperienceItemWork";

const Experiences = () => {
  const education = [
    {
      year: "2019 - 2023",
      name: "Tertiary Education",
      company: "Bataan Peninsula State University",
      workSetUp: "Dean's Lister",
      details:
        "In pursuit of academic excellence at Bataan Peninsula State University, Romwel Feliciano dedicated his college years as a distinguished scholar in BS Information Technology. His commitment to excellence was evident, he became a recipient of DOST JLSS scholar. Throughout his academic journey, Romwel has been a consistent dean's lister, showcasing not only his intellectual skills but also his discipline approach to his studies. Beyond these achievements, Romwel stands as a role of the Class Mayor for the BSIT program, which shows leadership to his community. Additionally, Romwel has an experience being a COSG representative. He also took on the responsibility in SSITE organization. It showcase his dedication to foster a collaborative and enriched environment within the campus.",
    },
    {
      year: "2017 - 2019",
      name: "Secondary Education (Senior High)",
      company: "ACLC College of Balanga",
      workSetUp: "With High Honor",
      details:
        "During his Senior Highschool term in ACLC, Romwel excelled in the TVL - Information Communications Technology. He accumulated an impressive record, earning 'With High Honors' for his outstanding performance. Moreover, he has been recognized and awarded 'Best in Java Programming'. Beyond his academic achievements, Romwel has shown his skills by developing a simple, yet engaging game, 'Galaga' by using Java language. This reflects his hands-on of knowledge and creativity that he gained within his academic journey.",
    },
    {
      year: "2013 - 2017",
      name: "Secondary Education (Junior High)",
      company: "Orani National High School Main",
      workSetUp: "With High Honor",
      details:
        "In his Junior Highschool at ONHS, Romwel has excelled in TLE subject, wherein he stood up in the topic of hardware assembly and disassembly. Here, it shows that he has a keen understanding of the physical components of computer system.",
    },
  ];

  const work = [
    {
      year: "September 2023 - Present",
      name: "Part-Time College Instructor",
      company: "Bataan Peninsula State University",
      workSetUp: "Work From Home",
      details: [
        " Instructed students in Java and PHP Programming Languages through online classes.",
        "Provided guidance and support to students in the development of their Capstone Projects.",
      ],
    },
    {
      year: "May 2023 - September 2023",
      name: "Intern - Front-End Web Developer",
      company: "Kloudtech Corp.",
      workSetUp: "Onsite",
      details: [
        "The company hired us as a student intern after our OJT.",
        "Executed ongoing optimization of websites and web applications.",
        "Conceptualized and redesigned the UI and UX layouts to enhance user experience.",
        "Reconstructed code using Bootstrap Framework for improved functionality.",
        "Implemented strategies to enhance Search Engine Optimization.",
      ],
    },
    {
      year: "March 2023 - May 2023",
      name: "OJT - Front-End Web Developer",
      company: "Kloudtech Corp.",
      workSetUp: "Onsite",
      details: [
        "Formulated and executed plans for UI and UX designs for various web projects.",
        "Successfully implemented website and web app landing pages.",
        "Developed sample Admin Pages to showcase functionality.",
      ],
    },
    {
      year: "December 2018",
      name: "Work Immersion - IT Support",
      company: "LGU Orani",
      workSetUp: "Onsite",
      details: [
        "Conducted data encoding and maintenance in Excel for diverse tasks.",
        "Troubleshot LAN Servers across different offices.",
        "Assisted in the assembly and disassembly of PCs at the Municipal Hall.",
      ],
    },
  ];

  return (
    <section
      id="Experience"
      className="min-h-screen dark:text-white transition-all duration-500 ease-in flex flex-col justify-center pt-20 lg:pt-24 px-4 lg:px-32"
    >
      <h2 className="text-3xl lg:text-4xl text-main text-center font-bold mb-4 lg:mb-5">
        Experiences
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-2xl font-bold text-start pt-2 pb-4">Education</h3>
          <ExperienceItem experience={education} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-2xl font-bold text-start pt-2 pb-4">Work</h3>
          <ExperienceItemWork experience={work} />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
