<<<<<<< HEAD
import {useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


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
     {/* <Router> */}
   <Navbar title="Textutils" about='About' mode={mode} toggleMode={toggleMode} />
   
   <Alert alert={alert} />
   
   <div className="container my-3">
    <TextForm mode={mode} showAlert={showAlert} heading="Enter your text to analyze below" />
   {/* <Routes> */}
      {/* <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter your text to analyze below" />} />
      <Route exact path="/About" element={<About/>} />
     
    </Routes> */}
   </div>

   {/* </Router> */}
   </>
  );
  
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> 16a281c (Initialize project using Create React App)
}

export default App;
