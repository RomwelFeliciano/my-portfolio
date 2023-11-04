import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="font-poppins">
        <Home />
        <Skills />
        <Certifications />
      </main>
    </>
  );
};

export default App;
