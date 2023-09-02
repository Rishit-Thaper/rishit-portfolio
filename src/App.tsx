import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import './App.scss'
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/projects"  element={<Projects/>} />
        <Route path="/skills"  element={<Skills/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
