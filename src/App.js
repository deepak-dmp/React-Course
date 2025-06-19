import {useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode]=useState("light")

  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode = () =>{
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#222324"
      showAlert("Dark mode has been enables","success")
      
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enables","success")
    }
  }
  return (
   <>
   <Navbar title="Textutils" about='About Me' mode={mode} toggleMode={toggleMode} />
   
   <Alert alert={alert} />
   
   <div className="container my-3">

    <TextForm mode={mode} showAlert={showAlert} heading="Enter your text to analyze below" />
    {/* <About/> */}
   
   </div>
   
   </>
  );
}

export default App;
