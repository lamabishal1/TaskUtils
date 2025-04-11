import About from "./components/About";
import Navbar from "./components/navbar";
//import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="my-4">
      {/*<TextForm heading="Enter the text below to analyze."/>*/}
      <About />
      </div>
    </div>
  );
}

export default App;
