import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-main px-32 py-4 flex justify-between items-center text-white text-center">
      <span className="text-lg">
        &copy; 2023 RomwelFeliciano | All Rights Reserved
      </span>
      <span className="flex gap-6 text-2xl">
        <a href="">
          <BsFacebook />
        </a>
        <a href="">
          <BsLinkedin />
        </a>
        <a href="">
          <BsGithub />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
