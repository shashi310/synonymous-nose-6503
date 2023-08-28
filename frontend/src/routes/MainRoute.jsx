import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import AdminCourses from "../Admin/AdminCourses";
import AdminUsers from "../Admin/AdminUsers";
import Login from "../components/Login";





const MainRoute = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/admin/dashboard" element= {AdminDashboard} />
        <Route path="/admin/courses" element= {AdminCourses} />
        <Route path="/admin/users" element= {AdminUsers} />
        <Route path="/users" element= {<Login/>} />
      </Routes>


    </div>
  )
}

export default MainRoute