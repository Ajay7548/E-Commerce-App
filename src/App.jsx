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


const  App = () => {
  
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };


  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        
      {/* <div className='px-[10%]'> */}
        {/* Navbar will be display in all pages */}
        <Navbar toggleSearch={toggleSearch} />
        {isSearchVisible && (
          <SearchBox isSearchVisible={isSearchVisible} toggleSearch={toggleSearch} />
        )}
        {/* <div 
        className= "bg-gray-100 py-4 ">
          <div className='flex items-center justify-center gap-3'>
            <input type="search " className='bg-white rounded-xl p-1 w-1/3' />
            <img src="/src/assets/cross_icon.png" alt="" className='h-4' />
          </div>
        </div> */}
        <hr className="w-full text-gray-300 "/>
        

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Collection' element={<Collection/>}/>
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Product/ProductID' element={<Product/>} />
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
