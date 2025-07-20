import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div className='w-full bg-gradient-to-b from-[#7cc5f5] via-[#46a3f8] to-[#7cc5f5]   flex flex-col  items-center justify-between p-2'>
      <Navbar ></Navbar>
      <HeroSection/>
    </div>
  )
}

export default App
