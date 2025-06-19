import React,{useState} from 'react'

export default function TextForm({heading="Enter Heading", mode,showAlert}) {

  const handleUpCLick = () =>{
    // console.log("Upper case was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    showAlert("Convertd to UpperCase","success")
  }
  const handleLoCLick = () =>{
    // console.log("Upper case was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    showAlert("Convertd to LowerCase","success")
  }

  const handleOnChange = (event) =>{

    // console.log("OnChange")
    setText(event.target.value)
  }

  const handleClear = (event) =>{

    // console.log("OnChange")
    setText("")
    showAlert("all text has been cleared","success")
  }

  const [text,setText]=useState('');

  return (
    <div className='container' style={{color : mode === "light" ? "#222324":"white"}}>
    
    <div className="container" >
      <h1>{heading}</h1>
     <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : mode === "light" ? "white":"#222324",color : mode === "light" ? "#222324":"white"}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpCLick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoCLick}>Convert to lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
    </div>

    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008* text.split(" ").length} Minutes to read</p>
      <pre> {text.length>0?text:"Enter something to preview it here"} </pre>
    </div>
    </div>
  )
}
