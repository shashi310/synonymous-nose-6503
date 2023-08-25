import React from 'react';
import styled from 'styled-components';
import img1 from "../homeImg/Design.png";
import img2 from "../homeImg/developement.png";
import img3 from "../homeImg/marketing.png";
import img4 from "../homeImg/Music.png";

import img5 from "../homeImg/IT.png";
import img6 from "../homeImg/P.png";
import img7 from "../homeImg/Business.png";
import img8 from "../homeImg/photography.png";
const categories = [
  {img:img1,title:"Design"},
  {img:img2,title:"Development"},
  {img:img3,title:"Marketing"},
  {img:img4,title:"Music"},
  {img:img5,title:"IT"},
  {img:img6,title:"Personal development"},
  {img:img7,title:"Bussiness"},
  {img:img8,title:"photography"},
  
];

const CategoryList = () => {
  return (
   <Wrapper>
      <Heading>Top Categories</Heading>
      <CardContainer>
        {categories.map(category => (
          <Card key={category}>
            <CardImage src={`${category.img}`} alt={category.title} />
            <CardContent>{category.title}</CardContent>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    /* Additional styling for small screens */
    padding: 10px;
  }
`;

const Heading = styled.h2`
font-size:30px;
font-weight:bold;
  text-align: center;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    /* Additional styling for small screens */
    width: 150%;
  }
`;

const Card = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  
`;

const CardContent = styled.div`
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 0 0 5px 5px;
  text-align: center;
 
 
`;
export default CategoryList;
