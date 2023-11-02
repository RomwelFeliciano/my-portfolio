import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const App = () => {
  let Links = [
    { name: "Home", link: "#Home" },
    { name: "Skills", link: "#Skills" },
    { name: "Certifications", link: "#Certifications" },
    { name: "Experience", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#Contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-10">
      <nav className="md:flex items-center justify-between bg-white py-4 md:px-20 px-7 transition-all duration-500 ease-in">
        <div className="font-bold text-2xl cursor-pointer flex justify-between items-center">
          <a href="#Home">
            {/* <img className="w-14" src="logo.png" alt="" /> */}
            <button className="">Logo</button>
          </a>

          <div
            className="text-3xl right-8 top-6 cursor-pointer md:hidden transition-all duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
        <ul
          className={`md:flex gap-5 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex md:hidden">
            <button className="">Dark Mode</button>
          </div>
        </ul>
        <div className="hidden md:flex">
          <button className="">Dark Mode</button>
        </div>
      </nav>
    </header>
  );
};

export default App;
