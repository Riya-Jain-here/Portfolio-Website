import "./App.css";
import Header from "./Components/Header";
import HomeContent from "./Components/HomeContent";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="App">
          <Routes>
            <Route path="/" element={<HomeContent />}></Route>
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Certificates" element={<Certificates />} />
          </Routes>
          <Footer />
        </div>
    </>
  );
}

export default App;
