//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  //let myVar = "CAPITAL";
  const[myMode,setMode] = useState("light");

  const[myAlert,setAlert] = useState(null);

  const createAlert = (msg,type) =>
  {
    setAlert({msg,type});
    setTimeout(()=>
    {setAlert(null)},2000)
  }

  const toggleModel = () =>
  {
    if(myMode === 'light')
    {
      setMode('dark');
      createAlert("Dark Mode is enabled","success");
      //document.title = "SkyCrunch - Dark Mode"
    }
    else{
      setMode('light');
      createAlert("Light Mode is enabled","success");
      //document.title = "SkyCrunch - Light Mode"
    }
    // setInterval(()=>
    //   {
    //     document.title = "SkyCrunch is Amazing";}, 700
    //   );
    //   setInterval(()=>
    //     {
    //       document.title = "Install SkyCrunch Now";}, 900
        
    //     );
      
  }  
  
  return (
    <Router>
    <Navbar title="SkyCrunch" facility="Facilities" mode={myMode} toggleMode={toggleModel} createAlert={createAlert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element ={<TextForm heading = "Enter the data" mode={myMode}/>}/>
    </Routes>
    <Alert alert={myAlert}/>
    </div>
    </Router>
   
   /*<nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
   </nav>
   <div className="container">
    <p>Hello {myVar}  Antgiubng gxfigw0os w xw</p>
   </div>
   <div className="blank">My App</div>*/
   );
} 

export default App;
