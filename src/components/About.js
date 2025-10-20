import React from 'react'

export default function About({mode}) {

  return (
    <>
    <div className="container"
    style={{ color: mode === "dark" ? "white" : "#042743", backgroundColor: mode === "dark" ? "#042743" : "white" }}>
        <h2>About Us</h2>
        <p>The Text Utils App is a simple yet powerful React application that allows users to analyze and manipulate text instantly. You can convert text to uppercase or lowercase, remove extra spaces, copy the text to your clipboard, and clear the input with just one click.</p>
    </div>
    </>
  )
}
