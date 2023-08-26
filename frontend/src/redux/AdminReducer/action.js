import axios from "axios"
import { ADD_PRODUCT_SUCCESS, ADD_User_SUCCESS,  GET_PRODUCT_SUCCESS, GET_User_SUCCESS, PATCH_PRODUCT_SUCCESS, PATCH_User_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

const token = JSON.parse(localStorage.getItem('user'))?.token || "";

const BaseURL="http://localhost:8080";

export const addProduct=(data)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  fetch(`${BaseURL}/courses/add`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(data)
  }).then(res=>res.json()).then((res)=>{console.log(res);
      dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data})
  }).catch(e=>console.log(e))
}

export const addUser=(data)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  fetch(`${BaseURL}/users/register`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(data)
  }).then(res=>res.json()).then((res)=>{console.log("userData",res);
      dispatch({type:ADD_User_SUCCESS,payload:res.data})
  }).catch(e=>console.log(e))
}


export const getProduct=()=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`${BaseURL}/courses`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{console.log("getProduct",res);
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data.course})
    }).catch(e=>dispatch({type:PRODUCT_FAILURE}))
   
}
export const getUser=()=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`${BaseURL}/users`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{console.log("getUsers",res);
    dispatch({type:GET_User_SUCCESS,payload:res.data.users})
    }).catch(e=>dispatch({type:PRODUCT_FAILURE}))
   
}

export const patchProduct=(id,data)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  fetch(`${BaseURL}/courses/update/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(data)
  }).then(res=>res.json()).then((res)=>{console.log("patch data is",res.course);
      dispatch({type:PATCH_PRODUCT_SUCCESS,payload:res.course})
  }).catch(e=>console.log(e))
}
export const patchUser=(id,data)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  fetch(`${BaseURL}/users/update/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(data)
  }).then(res=>res.json()).then((res)=>{console.log("patch data is",res);
      dispatch({type:PATCH_User_SUCCESS,payload:res})
  }).catch(e=>console.log(e))
}


export const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    axios.delete(`${BaseURL}/courses/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{console.log(res,"deleted");
    dispatch(getProduct())}).catch(e=>dispatch({type:PRODUCT_FAILURE}))
}
export const deleteUsers=(id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    axios.delete(`${BaseURL}/users/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{console.log(res,"deleted");
    dispatch(getUser())}).catch(e=>dispatch({type:PRODUCT_FAILURE}))
}


export default function convertDateFormat(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear().toString().slice(-2);

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}