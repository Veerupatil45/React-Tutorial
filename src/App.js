
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    <>
   
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container'>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" ></TextForm>
   {/* <About/> */}
   </div>
   
    </>
   
  );
}

export default App;
