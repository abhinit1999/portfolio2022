import "./App.css";
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import {Routes,Route} from "react-router-dom";
import About from "./components/About/index"
import Contact from "./components/ContactMe/index"
import Experience from "./components/Experience/index"
import Skills from "./components/Skills/index"
import Projects from "./components/Projects/index"
import Home from "./components/Home/index";
function App() {
  return (
    <div className="App">
    <Header/>
    
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/experience" element={<Experience/>}/>
<Route path="/skill" element={<Skills/>}/>
<Route path="/project" element={<Projects/>}/>

      </Routes>
    
      <Footer/>
      
    </div>
  );
}

export default App;
