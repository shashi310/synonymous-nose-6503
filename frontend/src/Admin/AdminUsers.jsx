import React,{useState,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


import { deleteUsers, getUser } from '../redux/AdminReducer/action';
import { patchUser } from '../redux/AdminReducer/action';

const AdminUsers = () => {

const dispatch=useDispatch();
const users=useSelector((store)=>{
  return store.AdminReducer.users
})
console.log(users);
useEffect(()=>{
  dispatch(getUser())
},[])
 

const handleEditClick = (userId) => {
  // Handle edit functionality here
  console.log(`Edit clicked for user with ID ${userId}`);

const data="updateData"

dispatch(patchUser(userId,data))

};

const handleDeleteClick = (userId) => {
  // Handle delete functionality here
  console.log(`Delete clicked for user with ID ${userId}`);
  dispatch(deleteUsers(userId))
};

  return (<>
    <AdminNavbar />
 
    <DIV>
        {users?.map((user)=>{
          return <div className='UserCard' key={user._id}>
    <div><span>Name</span>: {user.name}</div>
    <div><span>Email</span>: {user.email}</div>
    <div><span>City</span>: {user.city}</div>
    <div><span>Role</span>: {user.role}</div>
    {/* <button onClick={() => handleEditClick(user._id)}>Edit</button> */}
    {<Link to={`/admin/users/update/${user._id}`}><button>Edit</button></Link>}
    <button onClick={() => handleDeleteClick(user._id)}>Delete</button>
          </div>
        })}
      </DIV>
      </>
  )                                                              
}

export default AdminUsers

const DIV=styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 20px;
.UserCard{
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
    /* margin-left: 10px; */
    margin-right: 80px;
}
span{
  color: #1976D2;
}

`;
