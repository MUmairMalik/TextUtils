import React, { useState } from 'react'

export default function TextForm(prop) {
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
        
    const [text,setText] = useState("Enter Text here");

        return (
        <>
        <div className='container'>
            <h1>{prop.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Enter your destination</label>
            <textarea className="form-control" value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase </button>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase </button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h1>YOUR TEXT SUMMARY</h1>
            <p>Word Count: {text.split(" ").length-1} and Characters: {text.length}</p>
            <p>{0.008* text.split(" ").length} minutes read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>
    )
}
