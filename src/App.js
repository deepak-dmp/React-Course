import {useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState("light")

  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  const toggleMode = () =>{
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#222324"
      showAlert("Dark mode has been enables","success")
      document.title='Textutils - Dark Mode'
      
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enables","success")
      document.title='Textutil - Light Mode'
    }
  }
  return (
   <>
     <Router>
   <Navbar title="Textutils" about='About' mode={mode} toggleMode={toggleMode} />
   
   <Alert alert={alert} />
   
   <div className="container my-3">
   <Routes>
      <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter your text to analyze below" />} />
      <Route exact path="/About" element={<About/>} />
     
    </Routes>
   </div>

   </Router>
   </>
  );
  
}

export default App;
