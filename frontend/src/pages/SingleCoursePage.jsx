import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { Avatar, Badge } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const SingleCoursePage = () => {
  const [singleData, setSingleData] = useState(null);


  const { id } = useParams()

  const fetchData = async (dataId) => {
    try {
      const response = await fetch(`https://energetic-wasp-hose.cyclic.cloud/courses`, {
        headers: {
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGU4ZjI5MGVhZWRhNjFjZTJmOTliMWUiLCJ1c2VyTmFtZSI6InNoYXNoaSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MzEyODY1MCwiZXhwIjoxNjkzNzMzNDUwfQ.tAXBywpDLMOdIMRVbptGjStLb1t2IoQqjUBeL83pN3Y`
        }
      });
      const data = await response.json();
      console.log(dataId, data)
      const newData = data.Courses.find((ele) => ele._id === dataId)
      console.log("newdata", newData)
      setSingleData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {

    fetchData(id)
    
    

  }, []);


  const navigate = useNavigate();
  const handelClick=()=>{
    localStorage.setItem("price",singleData?.price)
    navigate("/payment");
  }
  
  return (
    <>
      <Divv >
        <Navbar />
      </Divv>

      <Div className="single-course">


        <div className="course-card">
          <h1>{singleData?.course}</h1>
          <img src={singleData?.img} alt="Course" />
          <p>University: {singleData?.university}</p>
          <p>Start Date: {singleData?.start_from}</p>
          <p>Total Enrolled: {singleData?.total_enrolled}</p>
          <p>Instructor: {singleData?.instructor}</p>
         
          <p>
            <i className="fas fa-star icon"></i>
            Rating: {singleData?.rating}
          </p>
          <p>Reviews: {singleData?.reviews}</p>
        </div>
        <div className="course-details">
          <h2>Course Details</h2>
          <p>Duration: {singleData?.course_duration}</p>
          <p>Skills: {singleData?.skills.join(', ')}</p>
          <h3>Modules:</h3>
          <ul className="modules-list">
            {singleData?.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>
        <h2>Student Reviews</h2>
        <div className="reviews">
          {singleData?.reviews_txt.map((review, index) => (
            <div key={index} className="review">
              <Avatar name={review.name} src='https://bit.ly/dan-abramovk' />
              <p>{review.name}</p>

              <p>Rating: {review.rate}</p>
              <p>{review.Body}</p>
            </div>
          ))}
        </div>
        <div className="sidebyside">
          <div className="recommended-courses">
            <h2>Recommended Courses</h2>
            <ul>
              {singleData?.Recommended.map((course, index) => (
                <li key={index}>
                  <p>University: {course.university}</p>
                  <p>{course.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="degrees">
            <h2>Degrees</h2>
            <ul>
              {singleData?.Degrees.map((degree, index) => (
                <li key={index}>
                  <p>University: {degree.university}</p>
                  <p>Degree: {degree.deg}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="vertical-card">
          <div className="card-content">
            <video controls>
              <source src="your-video-source.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2>₹{singleData?.price}</h2>
            <p>Original Price ₹3,299</p>

            <Badge colorScheme='purple'>Discount 87% off</Badge>
            <p>5 days left at this price!</p>
            <button className="enroll-button" onClick={handelClick}><Link to="/payment">Buy Now</Link></button>

            <p>30-Day Money-Back Guarantee</p>
            <p>This course includes:</p>
            <ul>
              <li>62 hours on-demand video</li>
              <li>Access on mobile and TV</li>
              <li>Full lifetime access</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </div>
      </Div>
    </>
  );
}
const Divv = styled.div`
  width:72%;
  position: sticky;
  top: 0;
  background-color:#E1F5FE;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a shadow for styling */
  z-index: 100;
`
const Div = styled.div`
  
  max-width: 70%;
  margin: 0px 40px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .course-card {
    width: 100%;
    background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  
    .course-container img {
      width: 129%;
      height: 100%;
      object-fit: cover;
    }
  

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }


  p {
    margin: 5px 0;
    color: #666;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #f39c12;
    margin-top: 10px;

    svg {
      margin-right: 5px;
    }
  }
}

 img {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

 h1 {
  font-size: 28px;
  margin-bottom: 15px;
}

 h2 {
  font-size: 24px;
  margin-top: 20px;
}

 h3 {
  font-size: 20px;
  margin-top: 15px;
}

 p {
  font-size: 18px;
  margin: 8px 0;
}

.reviews {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.review {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
}

.review p {
  margin: 10px 0;
}

.course-details {
  margin-top: 20px;

  h3 {
    font-size: 1.2rem;
    margin-top: 10px;
    color: #333;
  }

  ul.modules-list {
    list-style-type: disc;
    margin-left: 20px;
    color: #666;
  }

  ul.modules-list li {
    margin-bottom: 5px;
  }
}
ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 12px;
}

.icon {
  margin-right: 8px;
  font-size: 20px;
  color: #f39c12;
}
.sidebyside {
  display:flex;
  margin:20px;
  padding:10px;
  /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
.recommended-courses {
  margin-top: 20px;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  h3 {
    font-size: 1.2rem;
    
    margin-top: 10px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
}
  .degrees {
  margin: 20px;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  h3 {
    font-size: 1.2rem;
    margin-left: 20px;
    margin-top: 10px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }

}
}

.vertical-card {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 350px; /* Adjust the width as needed */
  background-color: #f9f9f9;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
 
}

.card-content {
  text-align: center;
}

h2 {
  font-size: 2rem;
  color: #e74c3c;
  margin-top: 10px;
}

p {
  margin: 5px 0;
  color: #666;
}

ul {
  text-align: left;
  margin-left: 20px;
  color: #666;
}

button.enroll-button {
  width: 100%;
  background-color:blue;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-bottom:8px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

button.enroll-button:hover {

  background-color: #2980b9;
}

video {
  width: 100%;
  max-height: 250px;
  margin-top: 30px;
}

/* Additional styling for the remaining details */
.remaining-details {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #888;
}

`
export default SingleCoursePage
