import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {  getUser } from '../redux/AdminReducer/action';
import { patchUser } from '../redux/AdminReducer/action';
import { useParams } from 'react-router-dom';
const initialFormData = {
  name: '',
  email: '',
//   educationalBackground: '',
//   password: '',
  role: '',
  age: '',
  
  city: '',
  isPromotion: false,
};

const UserEdit = () => {

const {id}= useParams()

    // let id="64eb6860527fb0c018fed42c"
    const users=useSelector((store)=>{
        return store.AdminReducer.users
      })
      console.log(users);
      const dispatch=useDispatch();
      useEffect(()=>{
        dispatch(getUser())
      },[])
      const data =users?.find((ele) => ele._id === id);
      console.log("userData",data);

initialFormData.name=data?.name
initialFormData.email=data?.email
initialFormData.age=data?.age
initialFormData.city=data?.city

      

  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === 'select-one') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

    } else if (type === 'select-multiple') {
      const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedOptions,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    dispatch(patchUser(id,formData));

    setFormData(initialFormData);
  };



  
  return (
    <DIV>
      <h1>Update User Details</h1>
      <form onSubmit={handleSubmit}>
        <label className='customLabel'>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label className='customLabel'>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        {/* <label className='customLabel'>
          Educational Background:
          <input
            type="text"
            name="educationalBackground"
            value={formData.educationalBackground}
            onChange={handleInputChange}
          />
        </label>
        <br /> */}
        
        
        <label className='customLabel'>
          Role:
          <select name="role" value={formData.role} onChange={handleInputChange}>
          <option value="user">select</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <br />
        <label className='customLabel'>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        </label>
        <br />
        {/* <label>
          Courses:
          <select multiple name="courses" value={formData.courses} onChange={handleInputChange}>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            <option value="course3">Course 3</option>
          </select>
        </label>
        <br /> */}
        <label className='customLabel'>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
        </label>
        <br />
        <label className='check'>
          Promotion:
          <input
            type="checkbox"
            name="isPromotion"
            checked={formData.isPromotion}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

export default UserEdit;

const DIV=styled.div`

 
 width: 35%;
 justify-content: center;
  align-items: center;
margin: auto;


form{
  padding: 20px;
}

label{
    width: 100%;
    size: 22px;
}
input {
    margin-top: 10px;
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.4);
}
  button {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    font-size: large;
    background-color: orange;
    font-size: 22px;
    border: none;
    justify-content: center;
    
  }
  .check{
    size: 10px;
  }
h1{
font-size:28px;
text-align: center;
}
select{
    width:  100%;
    height: 35px;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 3px;
}
`;













 
    
