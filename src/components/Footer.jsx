import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-main px-4 md:px-32 py-4 flex justify-between items-center text-white text-center">
      <span className="text-xs md:text-lg">
        &copy; 2023 RomwelFeliciano | All Rights Reserved
      </span>
      <span className="flex gap-2 md:gap-6 text-xs md:text-2xl">
        <a target="_blank" href="https://www.facebook.com/Feliciano.Romwel/">
          <BsFacebook />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/romwel-feliciano-576164218/"
        >
          <BsLinkedin />
        </a>
        <a target="_blank" href="https://github.com/RomwelFeliciano">
          <BsGithub />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
