
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLowClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        console.log("Clear text clicked " + text);
        let newText='';
        setText(newText)
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy=()=>{
        console.log("Copy clicked");
        var text=document.getElementById("mybox");
        text.select();
        
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange=(event)=>{
        console.log("onchange")
        setText(event.target.value)
    }

    const [text, setText]=useState('');
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1> {props.heading}</h1>
        <div className="mb-3" >
            
            <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange}  style={{
        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
      }} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
