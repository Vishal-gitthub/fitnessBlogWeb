import "./App.css";
import Navbar from "../src/component/navbar";
import Content from "./component/content";
import About from "./component/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      
    </>
  );
}

export default App;
