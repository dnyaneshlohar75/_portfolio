import Achivements from "./components/Achivements";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <main>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="max-w-6xl mx-auto font-light">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Achivements />
      </div>
    </main>
  );
}

export default App;
