import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = ()=> {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }  
  } 

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="my-4">
      <TextForm heading="Enter the text below to analyze." mode={mode}/>
     {/* <About />*/}
      </div>
    </div>
  );
}

export default App;
