import React,{ useState } from 'react';
import './App.css';
import Navbar from  './Components/Navbar'// src\Components\Navbar.js
import Alert from  './Components/Alert'
import TextForm from './Components/TextForm';
import About from  './Components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link  //actually in app.js we are not requiring link so i am commenting out to avoid warning at the same time I am using link in navbar component so there I am importing it 
} from "react-router-dom";




function App() {
  const[mode,setMode] = useState('light');//whether dark mode is enabeled or not 
  const[alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },"3000") // we have used setTimeout function as once the setAlert() has run we don't want  the alert meassage to stay there  so after 3sec setAlert() will become null and the alert message will disappear
  }

  const toggle=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= "#383842";
      showAlert("Dark mode has been enabled","success")
      //document.title = "TextUtility-Dark mode enable"  //this line changes the title when dark mode is enabled 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title = 'TextUtils'  mode={mode} toggleMode = {toggle}  /> 

    <Alert alert={alert}/>
   
    <div className="container my-3">
    {/* container is class of bootstrap that places the text box in the center */}
        <Routes>   
              <Route exact path="/about" element={<About mode={mode} />} />
              {/* we are using the exact key word so to tell react to match exactpath otherwise it will do partial matching  */}
             <Route exact path="/"element={<TextForm heading = "Enter the text to analyze below"  mode={mode} showAlert={showAlert} /> }/>
        </Routes>
     
     {/* this is the real beauty of react you made a showAlert function in APP.js and still you can use this functiion in TextForm.js, if you define showt={showAlert} than in textform.js we have to use props.show */}
    {/* <About /> */}
   
    {/* <TextForm heading = "Enter the text to analyze below"  mode={mode} showAlert={showAlert} />  */}
    </div>
    </Router>
    </>
  
  );
}

export default App;
