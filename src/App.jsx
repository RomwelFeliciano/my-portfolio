import Navigation from "./components/Navigation";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="font-poppins">
        <Home />
      </main>
    </>
  );
};

export default App;
