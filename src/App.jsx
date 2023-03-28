import Projects from "./components/Projects/Projects";
import MainText from "./components/MainText/MainText";
import ContactMe from "./components/ContactMe/ContactMe";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      <div className="container mx-auto flex flex-col justify-between pt-10 sm:pt-20 min-h-screen">
        <MainText />
      </div>
      <div id="projectsSection" className="container mx-auto flex flex-col justify-between pt-10 sm:pt-20 min-h-screen">
        <Projects />
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between pt-10 sm:pt-20 min-h-screen gap-10">
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
