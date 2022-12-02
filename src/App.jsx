import DropMenu from "./components/DropMenu/DropMenu";
import MainText from "./components/MainText/MainText";

const App = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen scroll-smooth">
      <div className="container mx-auto bg-neutral-900 flex justify-between">
        <MainText />
        <DropMenu/>
      </div>
    </div>
  );
};

export default App;
