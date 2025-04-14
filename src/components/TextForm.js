import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick =(()=> setText(text.toUpperCase()))

  const handleLoClick =(()=> setText(text.toLowerCase()))

  const handleCopy =(()=> {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
  })
  const handleClearClick =(()=> setText(""))

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className="container mb-3 " style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
              <textarea className="form-control border border-dark" style={{backgroundColor: props.mode==='light'?'white':'#4a4747',color: props.mode==='light'?'#042743':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"  ></textarea>
        
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>  
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>  
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>  
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>  
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
        </div>
      <div className="container my-2 " style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter something in the text box to preview it here."}</p>
        
      </div>
      

    </>
  )
}
