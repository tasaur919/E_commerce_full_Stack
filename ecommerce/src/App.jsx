import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router-dom"
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Men from './Pages/Men'
import Women from './Pages/Women'
import BabyColle from './Pages/BabyColle'
import About from './Pages/About'
import './App.css'
import AddToCart from './Components/AddToCart'
import LogReg from './Components/LogReg'
import PaymentOption from './Components/PaymentOption'
function App() {
  const [query,setQuery]=useState('')
  const [cart,setCart]=useState([])
  const addToCart=(product)=>{
    setCart((prev)=>[...prev,product])
  }
  return (
    
    <div>
 
      <BrowserRouter>
      <NavBar query={query} setQuery={setQuery} cart={cart.length} cart1={cart}/>
       
        <Routes>
          {/* <Route path='/' element={<LogReg/>}/> */}
          <Route path='/' element={<Home query={query} addToCart={addToCart}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/men' element={<Men query={query}  addToCart={addToCart}/>} />
          <Route path='/women' element={<Women query={query} addToCart={addToCart}/>} />
          <Route path='/baby' element={<BabyColle query={query} addToCart={addToCart}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/cart' element={<AddToCart cart1={cart} setCart1={setCart}/>} />
          <Route path='/payment' element={<PaymentOption cart1={cart} setCart1={setCart}/>} />


          </Routes>
       
         <Footer/>
         
      </BrowserRouter>
  
    </div>
  )
}

export default App