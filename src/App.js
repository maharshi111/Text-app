import React,{ useState } from 'react';
import './App.css';
import Navbar from  './Components/Navbar'// src\Components\Navbar.js
import TextForm from './Components/TextForm';
//import About from  './Components/About'

function App() {
  const[mode,setMode] = useState('light');//whether dark mode is enabeled or not 
  const toggle=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= "#383842";
    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= "white";
      
    }
  }
  return (
    <>
    <Navbar title = 'TextUtils' mode={mode} toggleMode = {toggle}/>
    <div className="container my-3">
    {/* container is class of bootstrap that places the text box in the center */}
     <TextForm heading = "Enter the text to analyze below"  mode={mode}  />
    {/* <About /> */}
      
    </div>
    
    </>
  
  );
}

export default App;
