import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="font-poppins">
        <Home />
        <Skills />
        <Certifications />
        <Experiences />
        <Projects />
      </main>
    </>
  );
};

export default App;
