import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import NotFound from '../Pages/NotFound'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoute
