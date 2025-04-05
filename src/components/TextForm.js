import React from 'react'

export default function TextForm(props) {
  return (
    <>
    <div className="container mb-3 ">
            <h1>{props.heading}</h1>
            <textarea className="form-control border border-dark" id="exampleFormControlTextarea1" rows="8"  ></textarea>
        
            <button className="btn btn-primary my-2">Convert to Uppercase</button>  
        </div>
    
    
    
    
    
    
    
    </>
  )
}
