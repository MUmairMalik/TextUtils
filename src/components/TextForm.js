import React, { useState } from 'react'

export default function TextForm(prop) {
    const handleUpClick = () =>
    {
        console.log("Button is clicked")
        //setText("You have clicked button")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) =>
        {
            console.log("On Change")
            setText(event.target.value)
        }
        
    const [text,setText] = useState("Enter Text here");

        return (
        <div>
            <h1>{prop.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Enter your destination</label>
            <textarea className="form-control" value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase </button>
        </div>
    )
}
