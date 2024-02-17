import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="body-font">
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}

export default App;
