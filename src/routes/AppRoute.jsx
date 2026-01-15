import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import NotFound from '../Pages/NotFound'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoute
