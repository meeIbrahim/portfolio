import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DummySection from "./components/Dummy";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <div>
        <DummySection
          title="About Me"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        />
        <DummySection
          title="Skills"
          content="Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        />
        <DummySection
          title="Work Experience"
          content="Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        />
        <DummySection
          title="Projects"
          content="Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        />
        <DummySection
          title="Blogs"
          content="Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        />
        <DummySection
          title="Contact"
          content="Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        />
        <DummySection
          title="Footer"
          content="Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
        />
      </div>
    </main>
  );
}

export default App;
