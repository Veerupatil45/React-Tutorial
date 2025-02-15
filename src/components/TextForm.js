
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("onchange")
        setText(event.target.value)
    }
    const [text, setText]=useState('Enter text here');
    
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" id="mybox" value={text} 
           onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}
