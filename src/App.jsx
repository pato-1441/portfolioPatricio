import Projects from "./components/Projects/Projects";
import DropMenu from "./components/DropMenu/DropMenu";
import MainText from "./components/MainText/MainText";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const App = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen scroll-smooth">
      <div className="container mx-auto flex justify-between pt-20">
        <MainText />
        <WorkExperience />
        <Projects />
        <DropMenu/>
      </div>
    </div>
  );
};

export default App;
