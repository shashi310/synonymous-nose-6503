import React,{useState,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct, patchProduct } from '../redux/AdminReducer/action';




const AdminCourses = () => {

const dispatch=useDispatch();
// const courses=useSelector((store)=>{
//   return store.AdminReducer.data
// })
const[courses,getCourses] =useState([])
// console.log("course",courses);
let user=JSON.parse(localStorage.getItem('user'));
useEffect(()=>{
  dispatch(getProduct())
  fetch("https://energetic-wasp-hose.cyclic.cloud/courses",{
            headers:{
                "Authorization":`Bearer ${user.token}`
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            getCourses(res.Courses
                )
        })
  
},[])
 

const handleEditClick = (courseID) => {
  
  console.log(`Edit clicked for user with ID ${courseID}`);
  const data="updateData"
dispatch(patchProduct(courseID,data))

};

const handleDeleteClick = (courseID) => {

  console.log(`Delete clicked for user with ID ${courseID}`);
  dispatch(deleteProduct(courseID));
};

  return (<>
    <AdminNavbar />
 
    <DIV>
        {courses?.map((course)=>{
          return <div className='CourseCard' key={course._id}>
    <h2><span>Course</span>: {course.course}</h2>
    <div><span>Instructor</span>i: {course.instructor}</div>
    <div><span>rating</span>: {course.rating}</div>
    <div><span>university</span>: {course.university}</div>
    {<Link to={`/admin/courses/update/${course._id}`}><button>Edit</button></Link>}
    <button onClick={() => handleDeleteClick(course._id)}>Delete</button>
          </div>
        })}
      </DIV>
      </>
  )                                                              
}

export default AdminCourses

const DIV=styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 20px;
.CourseCard{
  border: 1px solid #ccc;
  padding: 10px;
}
button{
  width: 80px;
    height: 32px;
    font-size: larger;
    padding:  5px ,5px, 5px, 5px;
    background-color:#0CAFFF;
    border:none;
    color: white;
    border-radius: 5%;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 80px;
}
span{
  color: #1976D2;
}
`;
