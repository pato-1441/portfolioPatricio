import DropMenu from "./components/DropMenu/DropMenu";
import MainText from "./components/MainText/MainText";

const App = () => {
  return (
    <div className="container-fluid bg-neutral-900 text-white px-52 min-h-screen scroll-smooth">
      <div className="bg-neutral-900 flex justify-between">
        <MainText />
        <DropMenu/>
      </div>
    </div>
  );
};

export default App;
