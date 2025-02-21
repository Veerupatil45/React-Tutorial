
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
   
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert="this is alert"/>
   <div className='container'>
    <TextForm heading="Enter the text to analyze below" ></TextForm>
   {/* <About/> */}
   </div>
   
    </>
   
  );
}

export default App;
