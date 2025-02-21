
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","Success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","Success");
    }
  }
  return (
    
  <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container'>
    <Switch>
      <Route path="/about">
        <About />

      </Route>
      
      <Route path="/">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" ></TextForm>
      
      </Route>
    </Switch>
  
   {/* <About/> */}
   </div>
   </Router>
    
  
  );
}

export default App;
