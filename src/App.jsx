import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Login from './pages/Login'
import Product from './pages/Product'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const  App = () => {
  
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };


  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <SearchBox/>
        
        <hr className="w-full text-gray-300 "/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Collection' element={<Collection/>}/>
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Product/:productId' element={<Product/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/PlaceOrder' element={<PlaceOrder/>} />
          <Route path='/Order' element={<Order/>} />

        </Routes>

        <Footer/>
      </div>
    </>
  )
}

export default App
