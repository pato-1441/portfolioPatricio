import Projects from "./components/Projects/Projects";
import DropMenu from "./components/DropMenu/DropMenu";
import MainText from "./components/MainText/MainText";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const App = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen scroll-smooth">
      <div className="container mx-auto flex justify-between pt-20 min-h-screen">
        <MainText />
        <WorkExperience />
        <DropMenu/>
      </div>
      <div className="container mx-auto flex justify-between pt-20 min-h-screen">
        <Projects />
      </div>
    </div>
  );
};

export default App;
