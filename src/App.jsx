import Projects from "./components/Projects/Projects";
import MainText from "./components/MainText/MainText";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      <div className="container mx-auto flex flex-col justify-between pt-10 sm:pt-20 min-h-screen">
        <MainText />
      </div>
      <div id="projectsSection" className="container mx-auto flex flex-col justify-between pt-10 sm:pt-20 min-h-screen">
        <Projects />
      </div>
      <div className="container mx-auto flex flex-col justify-between pt-10 sm:pt-20 min-h-screen">
        <Projects />
      </div>
    </div>
  );
};

export default App;
