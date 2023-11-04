import { useState } from "react";

const Certifications = () => {
  const coursera = [
    {
      image:
        "../../public/images/Certifications/Feliciano_Coursera_Front-End-1.png",
    },
    {
      image:
        "../../public/images/Certifications/Feliciano_Coursera_Programming-with-JavaScript-1.png",
    },
    {
      image:
        "../../public/images/Certifications/Feliciano_Coursera_HTML-CSS-Depth-1.png",
    },
  ];

  const greatlearning = [
    {
      image:
        "../../public/images/Certifications/Feliciano_GreatLearning_HTML.png",
    },
    {
      image:
        "../../public/images/Certifications/Feliciano_GreatLearning_CSS.png",
    },
    {
      image:
        "../../public/images/Certifications/Feliciano_GreatLearning_UI-UX.png",
    },
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen flex flex-col justify-center px-32"
    >
      <h2 className="text-4xl text-main text-center font-bold mb-10">
        Certifications
      </h2>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 w-full h-full bg-second rounded-lg relative px-5 pt-3 pb-5">
          <h4 className="text-2xl font-semibold pb-3">Coursera</h4>
          <div
            style={{ backgroundImage: `url(${coursera[0].image})` }}
            className="w-full h-[400px] shadow-2xl bg-center bg-contain rounded-lg bg-no-repeat duration-500"
          ></div>
        </div>
        <div className="col-span-6 w-full h-full bg-second rounded-lg relative px-5 pt-3 pb-5">
          <h4 className="text-2xl font-semibold pb-3">Great Learning</h4>
          <div
            style={{ backgroundImage: `url(${greatlearning[0].image})` }}
            className="w-full h-[400px] shadow-2xl bg-center bg-contain rounded-lg bg-no-repeat duration-500"
          ></div>
        </div>
        {/* <div className="col-span-6 bg-red-500">asd</div>
        <div className="col-span-6 bg-red-500">asd</div>
        <div className="col-span-6 bg-red-500">asd</div> */}
      </div>
    </section>
  );
};

export default Certifications;
