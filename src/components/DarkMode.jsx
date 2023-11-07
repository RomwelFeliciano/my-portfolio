import { useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const DarkMode = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="bg-main p-2 rounded-full text-white md:ml-8 hover:bg-accent hover:text-main duration-500 dark:hover:bg-white"
      onClick={handleDarkMode}
    >
      {theme === "dark" ? (
        <FaSun className="text-2xl" />
      ) : (
        <BsMoonStarsFill className="text-2xl" />
      )}
    </button>
  );
};

export default DarkMode;
