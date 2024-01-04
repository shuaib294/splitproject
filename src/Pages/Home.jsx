import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Navbar />
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="p-10 text-4xl font-semibold">Click on the button to explore Categories</p>
      <Link to="/categories"><button className="text-white bg-black p-10 text-2xl rounded-2xl">Categories</button></Link>  
    </div>
    </div>
    
  )
}

export default Home
