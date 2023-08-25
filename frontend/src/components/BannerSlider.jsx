import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import banner1 from "../homeImg/b2.png"
import banner2 from "../homeImg/b1.png"


const BannerSlider = () => {
   const images = [
      banner1,
      banner2
   ]; // Replace with your image URLs
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
   useEffect(() => {
     const timer = setInterval(() => {
       setCurrentImageIndex(prevIndex =>
         prevIndex === images.length - 1 ? 0 : prevIndex + 1
       );
     }, 2000);
 
     return () => clearInterval(timer);
   }, [images.length]);
 
   return (
     <Div className="image-slider">
       <img
         src={images[currentImageIndex]}
         alt={`Image ${currentImageIndex + 1}`}
         className="slider-image"
       />
     </Div>
   );
};


export default BannerSlider;
 
const Div = styled.div `
   width: 100%;
  height: 110vh; /* Adjust to your desired image height */
  margin:10px;
  overflow: hidden;
  position: relative;
  .slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}
@media only screen and (max-width: 576px) {
    width:100%;
    .slider-image {
  width: fit-content;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}
    
  }
@media only screen and (min-width: 577px) and (max-width: 768px) {
    /* Additional styling for small screens */
    width: 150%;
  }
`