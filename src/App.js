import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
     <Router>
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="my-4">
        <Routes>
          <Route
            path="/"
      element={<TextForm heading="Enter the text below to analyze." mode={mode}/>}
          />
      <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
