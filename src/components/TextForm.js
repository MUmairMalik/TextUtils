import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>
    {
        console.log("Button is clicked")
        //setText("You have clicked button")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>
        {
            console.log("Button is clicked")
            //setText("You have clicked button")
            let newText = text.toLowerCase();
            setText(newText)
        }
    const handleClearText = () =>
        {
            console.log("Button is clicked")
            //setText("You have clicked button")
            let newText = '';
            setText(newText)
        }
    const handleOnChange = (event) =>
        {
            console.log("On Change")
            setText(event.target.value)
        }
            
    const handleCopyText = (event) =>
        {
            console.log("I am copying")
            var myText = document.getElementById("exampleFormControlTextarea1");
            myText.select();
            navigator.clipboard.writeText(myText.value);

        }
    const handleExtraSpaces = (event) =>
        {
            console.log("I am removing extra spaces")
            let newText = text.split(/[ ]+/);
            setText(newText.join(" ")) ;

        }
        
        
    const [text,setText] = useState("");

        return (
        <>
        <div className='container' style={{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'black'
        }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Enter your destination</label>
            <textarea className="form-control"  value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3" style={{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'black'
        }}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase </button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase </button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'black'
        }}>
            <h1>YOUR TEXT SUMMARY</h1>
            <p>Word Count: {text.split(" ").length-1} and Characters: {text.length}</p>
            <p>{0.008* text.split(" ").length} minutes read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter text to Preview"}</p>
        </div>
        </>
    )
}
