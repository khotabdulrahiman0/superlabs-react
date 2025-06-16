import React from 'react'
import { Route, Routes } from 'react-router'
// import './index.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { axiosInstance } from './lib/axios'
import HomePage from './Pages/HomePage'
import './index.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Footersup from './Components/Footersup'
import About from './Pages/About'
import StoryPage from './Pages/StoryPage'
import PricingPage from './Pages/PricingPage'
import FloatingActionButtons from './Components/FloatingActionButtons'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/our-story' element={<StoryPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
    </Routes>
    <FloatingActionButtons/>
    <Footer/>
    <Footersup/>
    </div>
  )
}

export default App