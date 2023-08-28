
// import React from "react";
// import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import AdminCourses from "../Admin/AdminCourses";
import AdminUsers from "../Admin/AdminUsers";
// import Login from "../components/Login";
import CourseForm from "../Admin/CourseForm"
import UserEdit from "../Admin/UserEdit"




import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import SignUp from '../components/Signup'
import Login from '../components/Login'
import Dashboard from '../pages/Dashboard'
import SinglePage from '../pages/SinglePage'
import SingleCoursePage from '../pages/SingleCoursePage'
import PaymentPage from '../pages/Payment'
import Admin from "../Admin/Admin";


const MainRoute = () => {
  return (
    <div>

      
       <Routes>
         <Route path="/admin/dashboard" element= {<AdminDashboard />} />
        <Route path="/admin/courses" element= {<AdminCourses />} />
        <Route path="/admin/users" element= {<AdminUsers />} />
        <Route path="/admin/users" element= {<AdminUsers />} />
        <Route path="/admin/courses/update/:id" element= {<CourseForm/>} />\
        <Route path="/admin/users/update/:id" element= {<UserEdit/>} />
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/:id' element={<SingleCoursePage/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
      </Routes>

    </div>
  )
}

export default MainRoute