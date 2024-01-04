import React from 'react'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

