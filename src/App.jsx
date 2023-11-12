import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
        <Footer />
      </main>
    </>
  );
};

export default App;
