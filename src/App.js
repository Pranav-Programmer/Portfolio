import Navbar from "./Components/Navbar/Navbar";
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {  
  
  return (
    <div className="App">
      <Navbar/>
      <MobileNavbar/>
      <Intro/>
      <Skills/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
