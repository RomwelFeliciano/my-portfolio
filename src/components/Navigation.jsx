import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import DarkMode from "./DarkMode";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let Links = [
    { name: "Home", link: "#Home" },
    { name: "Skills", link: "#Skills" },
    { name: "Certifications", link: "#Certifications" },
    { name: "Experience", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#Contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-10 duration-300 ease-in-out font-poppins ${
        showNav ? "shadow-none" : "shadow-md"
      }`}
    >
      <nav className="md:flex items-center justify-between bg-white dark:bg-black dark:shadow-md py-4 md:px-32 px-4 transition-all duration-500 ease-in">
        <div className="font-bold text-2xl cursor-pointer flex justify-between items-center">
          <a href="#Home">
            <img className="w-14" src="images/logo.png" alt="" />
          </a>

          <div
            className="text-3xl right-8 top-6 cursor-pointer dark:text-white md:hidden transition-all duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
        <ul
          className={`md:flex gap-5 md:items-center bg-white dark:bg-black md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 dark:text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex md:hidden">
            <DarkMode theme={theme} setTheme={setTheme} />
          </div>
        </ul>
        <div className="hidden md:flex">
          <DarkMode theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
