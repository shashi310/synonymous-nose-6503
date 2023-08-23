import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Learn Something New</FooterTitle>
          <ul>
            <li>Learn a Language</li>
            <li>Learn Accounting</li>
            <li>Learn Coding</li>
            <li>Learn Copywriting</li>
            <li>Learn HR</li>
            <li>Learn Public Relations</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Popular Topics</FooterTitle>
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
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Popular Certificates</FooterTitle>
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
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2023 Coursera Inc. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin: 5px 0;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;
