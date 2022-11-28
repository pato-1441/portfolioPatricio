import DropMenu from "./components/DropMenu/DropMenu";
import MainText from "./components/MainText/MainText";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-900 text-white scroll-smooth">
      <MainText />
      <DropMenu/>
    </div>
  );
};

export default App;
