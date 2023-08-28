import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from "../homeImg/logo2.jpg";
import { Link } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";


const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user")) || {}
  
  useEffect(()=>{
    console.log(user)
  },[user])


  const handleChange=()=>{
    localStorage.setItem("user",null)
  }
  

  return (
    <Div>
      <div>
        <Link to="/" >
          <img src={logo} alt="logo" />
        </Link>
      </div>


      {/* <div>
        <button>Explore</button>
      </div> */}
      <div className="search">
        <input type="text"
          placeholder='what do you want to learn?'
        />
        <button> <SearchIcon>&#128269;</SearchIcon></button>
      </div>
      <div>
        <select name="" className="hover-select">
          <option value="">Online Degrees</option>
        </select>
      </div>
      <div><Link to="/dashboard">Find your New Career</Link></div>
      {/* <div>Login</div> */}
      <div >
        <button >
          <span className='login'>{user.isAuth ?
          <select value="">
          <option value="">{user.user}</option>
           <option value="2"> <Link onClick={handleChange}> Logout</Link></option>
           <option value="2">Admin</option>
         </select>
          : <Link to={"/login"}>Join for free</Link>}</span>

        </button>
      </div>

    </Div>
  );
};

export default Navbar;

const SearchIcon = styled.span`
  font-size: 0.7rm;
  margin-left: 4px;
  
`;
const Div = styled.nav`
  box-sizing: 0px;
  padding:0px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#E3F2FD;
  

  /* padding: 20px; */
 
  color: black;

  > div {
    width:20%;
    text-align:center;
    align-items: center;
    /* border: 1px solid black; */
    margin: 0 10px;
  }
  .search {
    display: flex;
    align-items: center;
  }
  img {
   width: 100%;
  }

  button,
  input,
  select {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color:blue;
    color: white;
    cursor: pointer;
  }

  button {
    font-weight: bold;
  }

  input[type='text'] {
    background-color:white;
    border: 1px solid blue;
    width: 70%;
  }

  select {
    width: 70%;
  }

  .search {
    display: flex;
    align-items: center;
  }

  
  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .login{
    margin-right:30px;
    width: 20%;
   
  }

  
  

  @media only screen and (max-width: 576px) {
    flex-direction: column;

    > div {
      width: 90%;
      margin:auto;
      /* border: 1px solid black; */
      margin: 10px 0;
    }

    input[type='text'] {
      width: 100%;
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    /* Additional styling for small screens */
    width: 150%;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    /* Additional styling for medium screens */
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    /* Additional styling for large screens */
  }

  @media only screen and (min-width: 1201px) {
    /* Additional styling for extra large screens */
  }
`;
