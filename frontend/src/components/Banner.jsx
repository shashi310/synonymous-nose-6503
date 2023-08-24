import React from 'react';

import { styled } from 'styled-components';

const Banner = ({ imageSrc, heading, text,buttontext }) => {
  return (
    <Div className="banner">
      <div className="banner-image">
        <img src={imageSrc} alt="Banner" />
      </div>
      <div className="banner-content">
        <h2>{heading}</h2>
        <p>{text}</p>
        <button>
       {  buttontext }
        
        </button>
      </div>
    </Div>
  );
};

export default Banner;

const Div = styled.div`
    display: flex;
  align-items: center;
  justify-content:space-around;
  padding: 20px;
  background-color: #f5f5f5;
  .banner-image img {
  max-width: auto;
  height: auto;
  margin:auto;
}
button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color:blue;
    color: white;
    cursor: pointer;
  }
.banner-content {
  flex: 2;
  margin:auto;
  padding:auto;
  text-align:center;
}

.banner-content h2 {
  font-size: 50px;
  margin-bottom: 10px;
}

.banner-content p {
  font-size: 20px;
}
`