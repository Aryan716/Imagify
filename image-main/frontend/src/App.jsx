//import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify'

function App() {

  const {showLogin}= useContext(AppContext);
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-slate-50 overflow-hidden relative'>
      {/* Decorative blurred background circles */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
      <div className='absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>
      
      <div className="relative z-10">
        <ToastContainer position='bottom-right'/>
        <Navbar/>
        {showLogin && <Login/>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<BuyCredit/>} />
          <Route path='/result' element={ <Result />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App
