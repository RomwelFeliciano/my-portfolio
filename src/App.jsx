import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="font-poppins">
        <Home />
        <Skills />
      </main>
    </>
  );
};

export default App;
