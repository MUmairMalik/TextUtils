//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  //let myVar = "CAPITAL";
  return (
    <>
    <Navbar title="SkyCrunch" facility="Facilities"/>
    <div className="container my-3">
    {/* <About/> */}
    
    <TextForm heading = "Enter the data"/>
    </div>
    </>
   
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
