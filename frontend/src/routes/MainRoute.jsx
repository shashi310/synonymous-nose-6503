import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import AdminCourses from "../Admin/AdminCourses";
import AdminUsers from "../Admin/AdminUsers";





const MainRoute = () => {
  return (
    <div>
      <h1>MainRoute</h1>
      <Routes>
        <Route path="/admin/dashboard" element= {AdminDashboard} />
        <Route path="/admin/courses" element= {AdminCourses} />
        <Route path="/admin/users" element= {AdminUsers} />
      </Routes>
<AdminUsers />

    </div>
  )
}

export default MainRoute