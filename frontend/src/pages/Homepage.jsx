import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import Banner from "../components/Banner";
import banner from "../homeImg/b3.png";
import banner1 from "../homeImg/b5.png";
import { styled } from "styled-components";
import CategoryList from "../components/CategoryList";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      {/* <div className="b4">
      <img src={`${banner1}`} alt=""  />
      </div> */}
      <Banner
        imageSrc={`${banner1}`}
        heading="Take the next step toward your personal and professional goals with Skillvintage."
        text="Join now to receive personalized recommendations from the full skillvintage catalog."
        buttontext="Join for Free"
      />
      <CategoryList />
      <Banner
        imageSrc={`${banner}`}
        heading="Become an instructor"
        text="Instructors from around the world teach millions of students on skillvintage. We provide the tools and skills to teach what you love."
        buttontext=" Start teaching today"
      />
      <Footer />
    </div>
  );
};

export default Homepage;

const Div = styled.div`
  .b4 {
    width: 100%;
    border: 1px solid red;
    margin: auto;
    text-align: center;
    align-items: center;
    img {
      width: 50%;
      margin: auto;
    }
  }
`;
