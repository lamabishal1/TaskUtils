import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick =(()=> setText(text.toUpperCase()))
  const handleLoClick =(()=> setText(text.toLowerCase()))
  const handleClearClick =(()=> setText(""))

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className="container mb-3 ">
            <h1>{props.heading}</h1>
              <textarea className="form-control border border-dark" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"  ></textarea>
        
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>  
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>  
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>  
        </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        
      </div>
      

    </>
  )
}
