import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import SignUp from '../components/Signup'
import Login from '../components/Login'
import Dashboard from '../pages/Dashboard'
import SinglePage from '../pages/SinglePage'
import SingleCoursePage from '../pages/SingleCoursePage'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/:id' element={<SingleCoursePage/>}/>
      </Routes>
    </div>
  )
}

export default MainRoute