import React,{useState} from 'react'

export default function TextForm({heading="Enter Heading"}) {

  const handleUpCLick = () =>{
    // console.log("Upper case was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) =>{

    // console.log("OnChange")
    setText(event.target.value)
  }

  const [text,setText]=useState('Enter text here');

  return (
    <>
    <div className="container">
      <h1>{heading}</h1>
     <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpCLick}>Convert to upper case</button>
    </div>

    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008* text.split(" ").length} Minutes to read</p>
      <pre> {text} </pre>
    </div>
    </>
  )
}
