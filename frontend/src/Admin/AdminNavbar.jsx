import React, { useEffect, useRef, useState } from "react";
import logo from "../homeImg/logo2.jpg";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export const AdminNavbar = () => {
let user=JSON.parse(localStorage.getItem("user"));
console.log(user.user);
const navigate= useNavigate();

const handleChange=(e)=>{
   
  // localStorage.setItem("user",null)
  if(e.target.value=="2"){
    localStorage.clear();
  }else if(e.target.value=="3"){
    navigate("/admin")
  }else if(e.target.value=="1"){
    navigate("/dashboard")
  }

}


  return (
    <DIV>
      {/* <h2 style={{
        paddingLeft:"30px",
      }}>ADMIN PANNEL</h2> */}
      <Link to="/"  >
          <img src={logo} alt="logo" style={{
            height:"80px"
          }}/>
        </Link>
     
      <Link to={"/admin/dashboard"}><button>Dashboard</button> </Link>
      
      <Link to={"/admin/users"}><button>Users</button> </Link>

      
      <Link to={"/admin/courses"}><button>Courses</button> </Link>
   <span>{user.user}</span>
      {/* <div >
        <button >
         

          <select value="" onChange={handleChange}>
          <option value="1"><span>Home</span></option>
           <option value="2">  <span>Logout</span></option>
           <option value="3"><span>Admin</span></option>
         </select>
          

        </button>
      </div> */}

    </DIV>
  );
};

export default AdminNavbar;

const DIV = styled.div`
  display: flex;
  align-items: space-between;
  border-bottom: 1px solid gray;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 576px) {
  grid-template-columns: repeat(1, 1fr);
}

/* On medium screens */
@media (min-width: 810px) {
  grid-template-columns: repeat(2, 15% 85%);
}

/* On large screens */
@media (min-width: 992px) {
  grid-template-columns: repeat(2, 15% 85%);
}

/* On extra-large screens */
@media (min-width: 1200px) {
  grid-template-columns: repeat(2, 15% 85%);
}



  h2{
    padding-right: 175px;
  }
  button {
    width: 150px;
    height: 45px;
    font-size: larger;
    padding:  5px ,5px, 5px, 5px;
    background-color:#0CAFFF;
    border:none;
    color: white;
    border-radius: 2px;
  }
  span{
    height: 40px;
    width: 100px;
    margin-left:300px;
    background-color: #FFAB91;
    color: black;
    padding-left: 20px;
    padding-top: 7px;
    border-radius: 2px;
  }
  select{
    color: black;
  }
`;
