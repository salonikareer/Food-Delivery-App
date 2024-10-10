
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Fotter'
import LoginPopup from './components/LoginPopup/LoginPopup'
import React from 'react'
function App() {
   const [showlogin, setshowlogin] =React.useState(false)

  return (
    <>
  {showlogin ? <LoginPopup setshowlogin={setshowlogin}/>:<></>}
    <div className="app">
     <Navbar setshowlogin={setshowlogin}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='order' element={<PlaceOrder/>}/>
     </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App