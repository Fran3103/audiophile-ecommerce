import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Earphones from "./Components/Home/category/Earphones"
import Headphones from "./Components/Home/category/Headphones"
import Speakers from "./Components/Home/category/Speakers"


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/earphones" element={<Earphones/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
      </Routes>
    </>
  )
}

export default App
