
import './App.css';
import Header from './components/Header';
import Element from './components/Element';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import About from './components/About';
import Don from './components/Don';
import Google from './components/Google';




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const togglemode = ()=>{
    if(mode==='light'){
  
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("The Dark mode has been enabled.","success")
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("The light mode has been enabled.","success")
    }
  }
  const showAlert=(message,type)=>{
    setalert({
      message: message,
      type: type

    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  } 

  return (
    <>
     <Router>
    <Header title="My-Project" mode={mode} toggle={togglemode}/>
    <Alert alert={alert}/>
    
    
   
    <Routes>
          <Route  path="/about" element={<><About mode={mode} /><Don mode={mode} /></>}/>
          {/* <Route path="/" element={<Don mode={mode} />} />  */}
          
          <Route path="/" element={<Element mode={mode} showAlert={showAlert} toggle={togglemode}/>}/>
          <Route path="/don" element={<Google mode={mode} />}></Route>
          
        </Routes>
        </Router>
    </>
  );
}

export default App;
