import {useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode]=useState("light")

  const toggleMode = () =>{
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#222324"
      
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      
    }
  }
  return (
   <>
   <Navbar title="Textutils" about='About Me' mode={mode} toggleMode={toggleMode} />
   
   <Alert alert="hii my name is deepak" />
   
   <div className="container my-3">

    <TextForm mode={mode} heading="Enter your text to analyze below" />
    {/* <About/> */}
   
   </div>
   
   </>
  );
}

export default App;
