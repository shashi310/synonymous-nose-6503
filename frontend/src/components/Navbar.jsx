import React from 'react';
import styled from 'styled-components';
import logo from "../homeImg/logo2.jpg";
const Navbar = () => {
  return (
    <Div>
     <div>
     <img src={logo} alt="logo" />
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
        <select name=""  className="hover-select">
          <option value="">Online Degrees</option>
        </select>
      </div>
      <div>Find your New Career</div>
      {/* <div>Login</div> */}
      <div>
        <button>Join for free</button>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
 
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
    width: 60%;
  }

  .search {
    display: flex;
    align-items: center;
  }

  
  

  @media only screen and (max-width: 576px) {
    flex-direction: column;

    > div {
      margin: 10px 0;
    }

    input[type='text'] {
      width: 100%;
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    /* Additional styling for small screens */
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