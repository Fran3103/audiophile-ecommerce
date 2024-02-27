import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Earphones from "./Components/Home/category/Earphones"
import Headphones from "./Components/Home/category/Headphones"

import Footer from "./Components/Home/Footer"
import Speakers from "./Components/Home/category/Speakers"
import XX99Mark2 from "./Components/Products/XX99Mark2"
import Yx1Earphones from "./Components/Products/Yx1Earphones"
import XX99Mark1 from "./Components/Products/XX99Mark1"
import Zx7Speaker from "./Components/Products/Zx7Speaker"
import Zx9Speaker from "./Components/Products/Zx9Speaker"
import XX59 from "./Components/Products/XX59"
import {  useState } from "react"
import Checkout from "./Components/Checkout"


function App() {

    const [productos , setProductos] = useState ([])
    const [total , setTotal] = useState(0)
    const remove = ()=> setProductos([])

   
    

   

  return (
    <>
      <Navbar productos={productos} setProductos={setProductos} remove={remove} total={total} setTotal={setTotal} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/earphones" element={<Earphones/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/speakers" element={<Speakers /> }/>
        <Route path="/xx99Mark2" element={<XX99Mark2 productos={productos} setProductos={setProductos}  />}/>      
        <Route path="/xx99Mark1" element={<XX99Mark1 productos={productos} setProductos={setProductos}  />}/>      
        <Route path="/yx1Earphones" element={<Yx1Earphones productos={productos} setProductos={setProductos}  />}/>      
        <Route path="/zx9speaker" element={<Zx9Speaker productos={productos} setProductos={setProductos}  />}/>      
        <Route path="/zx7speaker" element={<Zx7Speaker productos={productos} setProductos={setProductos}  />}/>      
        <Route path="/xx59" element={<XX59 productos={productos} setProductos={setProductos} />}/>    
        <Route path="/checkout" element={<Checkout productos={productos} total={total} />}/>  
        
        
        </Routes>
      <Footer/>
    </>
  )
}

export default App
