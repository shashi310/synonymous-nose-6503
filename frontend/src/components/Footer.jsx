import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-section">
        <div className="footer-column">
          <h3>Learn Something New</h3>
          <ul>
            <li>Learn a Language</li>
            <li>Learn Accounting</li>
            <li>Learn Coding</li>
            <li>Learn Copywriting</li>
            <li>Learn HR</li>
            <li>Learn Public Relations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Popular Topics</h3>
          <ul>
            <li>Accounting</li>
            <li>Cybersecurity</li>
            <li>Data Analysis</li>
            <li>Data Science</li>
            <li>Excel</li>
            <li>Google</li>
            <li>Machine Learning</li>
            <li>Project Management</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Popular Certificates</h3>
          <ul>
            <li>Google Data Analytics</li>
            <li>Google Digital Marketing & Ecommerce</li>
            <li>Google IT Automation with Python</li>
            <li>Google IT Support</li>
            <li>Google Project Management</li>
            <li>Google UX Design</li>
            <li>IBM Data Analyst</li>
            <li>IBM Data Science</li>
            <li>Intuit Bookkeeping</li>
            <li>Meta Front-End Developer</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>Connect with Us</h3>
        <ul id="social">
          <li>
            <a
              href="https://www.facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/your-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>

        <p>&copy; 2023 Skillvintage Inc. All rights reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.footer`
  width: 100%;
  align-self: center;
  /* border: 1px solid red; */
  background-color: #333;
  color: white;
  padding: 20px 0;
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    /* Additional styling for small screens */
    width: 150%;
  }

  #social {
    /* border:1px solid white; */
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* margin-left: 33%; */
    padding: 0;
    li {
      margin: 0 10px;
      align-self: center;
      /* border-bottom: 1px solid; */
      a {
        color: white;
        font-size: 1.5rem;

        &:hover {
          color: #66ccff; /* Change color on hover */
        }
      }
    }
  }

  .footer-section {
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-around;
    width: 100%;
    /* margin: 0 auto; */
    @media only screen and (max-width: 576px) {
      flex-direction: column;
      margin-left: 20px;
    }
  }

  .footer-column {
    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      margin: 5px 0;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-align: center;
  }

  .footer-bottom {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    /* Additional styling for small screens */
    width: 150%;
  }
`;
