import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const CertificationGallery = ({ slides, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="col-span-12 lg:col-span-6 w-full h-full bg-second rounded-lg relative group px-5 pt-3 pb-5">
      <h4 className="text-2xl font-semibold pb-3">{children}</h4>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-[400px] shadow-inner bg-center bg-contain rounded-lg bg-no-repeat duration-300"
      ></div>
      {/* Previous Button */}
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 lg:left-5 text-2xl rounded-full p-0 lg:p-2 bg-main/80 text-white cursor-pointer">
        <BsArrowLeftShort onClick={prevSlide} size={30} />
      </div>
      {/* Next Button */}
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 lg:right-5 text-2xl rounded-full p-0 lg:p-2 bg-main/80 text-white cursor-pointer">
        <BsArrowRightShort onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center pt-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={
              "text-2xl cursor-pointer duration-300 " +
              (currentIndex === slideIndex
                ? "text-main scale-125"
                : "text-gray-400")
            }
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationGallery;
