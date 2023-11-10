import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experiences from "./components/Experiences";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="font-poppins">
        <Home />
        <Skills />
        <Certifications />
        <Experiences />
      </main>
    </>
  );
};

export default App;
