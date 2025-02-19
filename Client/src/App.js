import './App.css';
import Header from "./Components/Header";
import HomeContent from "./Components/HomeContent";
import About from "./Components/About";
import Contact  from './Components/Contact';
import Certificates from "./Components/Certificates";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
  <Route path='/' element={<Header/>}></Route>
  </Routes>
   <div className="App">
    <div className="container-items">
      <Routes> 
      <Route path='/' element={<HomeContent/>}></Route>
      {/*<Route path="/About" element={<About src="https://www.w3schools.com/html/mov_bbb.mp4"/>} />*/}
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Certificates" element={<Certificates/>} />
      </Routes> 
         </div>
    </div>
</>
  );
}

export default App;
