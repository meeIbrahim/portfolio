import Navbar from "./components/Navbar";
import DummySection from "./components/Dummy";
import Home from "./components/Home";

function App() {
  return (
    <main className="body-font">
      <div>
        <Navbar />
        <Home />
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
