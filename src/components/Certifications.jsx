import CertificationGallery from "./CertificationGallery";

const Certifications = () => {
  const coursera = [
    {
      image: "images/Certifications/Feliciano_Coursera_Front-End-1.png",
    },
    {
      image:
        "images/Certifications/Feliciano_Coursera_Programming-with-JavaScript-1.png",
    },
    {
      image: "images/Certifications/Feliciano_Coursera_HTML-CSS-Depth-1.png",
    },
  ];

  const greatlearning = [
    {
      image: "images/Certifications/Feliciano_GreatLearning_HTML.png",
    },
    {
      image: "images/Certifications/Feliciano_GreatLearning_CSS.png",
    },
    {
      image: "images/Certifications/Feliciano_GreatLearning_UI-UX.png",
    },
  ];

  const microsoft = [
    {
      image: "images/Certifications/Feliciano_MOS_Specialist.jpg",
    },
    {
      image: "images/Certifications/Feliciano_MOS_Word.jpg",
    },
    {
      image: "images/Certifications/Feliciano_MOS_PowerPoint.jpg",
    },
    {
      image: "images/Certifications/Feliciano_MOS_Excel.jpg",
    },
  ];

  const other = [
    {
      image: "images/Certifications/Feliciano_Certiport_ITS.png",
    },
    {
      image: "images/Certifications/Feliciano_Zuitt_WebDevelopment.png",
    },
    {
      image: "images/Certifications/Feliciano_DICT.png",
    },
    {
      image: "images/Certifications/Feliciano_StackLeague.png",
    },
    {
      image: "images/Certifications/Feliciano_SoloLearning_HTML.jpg",
    },
    {
      image: "images/Certifications/Feliciano_RAITE_TechTeam.png",
    },
    {
      image: "images/Certifications/Feliciano_RAITE_Program.png",
    },
    {
      image: "images/Certifications/Feliciano_CircularCampusProgram.png",
    },
    {
      image: "images/Certifications/Feliciano_Cognizant.png",
    },
  ];

  return (
    <section
      id="Certifications"
      className="min-h-screen flex flex-col justify-center pt-20 lg:pt-0 px-4 lg:px-32"
    >
      <h2 className="text-4xl text-main text-center font-bold mb-4 lg:mb-10">
        Certifications
      </h2>
      <div className="grid grid-cols-12 gap-5">
        <CertificationGallery slides={coursera}>Coursera</CertificationGallery>
        <CertificationGallery slides={greatlearning}>
          Great Learning
        </CertificationGallery>
        <CertificationGallery slides={microsoft}>
          Microsoft Office
        </CertificationGallery>
        <CertificationGallery slides={other}>
          Other Certifications
        </CertificationGallery>
      </div>
    </section>
  );
};

export default Certifications;
