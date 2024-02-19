import "./App.css";
import Accordion from "./components/accordion";
import GenerateColor from "./components/generate_color";
import Imageslider from "./components/imageslider";
import Load from "./components/load";
import StarRating from "./components/rating";
import TreeView from "./components/tree_view";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <GenerateColor /> */}
      {/* <StarRating /> */}
      {/* <Imageslider url={"https://picsum.photos/v2/list"} page={2} limit={5} /> */}
      {/* <Load /> */}

      <TreeView />
    </div>
  );
}

export default App;
