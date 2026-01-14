import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import './index.css';
import Nav from "./components/Nav";
function App() {
  
  return (
    <>
   <Nav/ >
   <div className="w-full h-screen justify-center items-center flex bg-blue-300 p-4">
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    </Routes>

   </div>
    </>
  )
}

export default App
