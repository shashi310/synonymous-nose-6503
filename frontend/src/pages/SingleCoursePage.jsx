import React from 'react'
import { styled } from 'styled-components';
import { Avatar } from '@chakra-ui/react'
const SingleCoursePage = () => {
   const {
      img,
      university,
      start_from,
      total_enrolled,
      course,
      instructor,
      rating,
      reviews,
      reviews_txt,
      course_duration,
      skills,
      modules,
      Recommended,
      Degrees,
    } = courseData;
  
  return (
   <Div className="single-course">
   <img src={img} alt="Course" />
   <h1>{course}</h1>
   <p>University: {university}</p>
   <p>Start Date: {start_from}</p>
   <p>Total Enrolled: {total_enrolled}</p>
   <p>Instructor: {instructor}</p>
   <p>
  <i className="fas fa-star icon"></i>
  Rating: {rating}
</p>
   <p>Reviews: {reviews}</p>

   <h2>Course Details</h2>
   <p>Duration: {course_duration}</p>
   <p>Skills: {skills.join(', ')}</p>
   <h3>Modules:</h3>
   <ul>
     {modules.map((module, index) => (
       <li key={index}>{module}</li>
     ))}
   </ul>

   <h2>Student Reviews</h2>
   <div className="reviews">
     {reviews_txt.map((review, index) => (
       <div key={index} className="review">
          <Avatar name={review.name} src='https://bit.ly/dan-abramovk' />
         <p>{review.name}</p>
         
         <p>Rating: {review.rate}</p>
         <p>{review.Body}</p>
       </div>
     ))}
   </div>

   <h2>Recommended Courses</h2>
   <ul>
     {Recommended.map((course, index) => (
       <li key={index}>
         <p>University: {course.university}</p>
         <p>{course.body}</p>
       </li>
     ))}
   </ul>

   <h2>Degrees</h2>
   <ul>
     {Degrees.map((degree, index) => (
       <li key={index}>
         <p>University: {degree.university}</p>
         <p>Degree: {degree.deg}</p>
       </li>
     ))}
   </ul>
 </Div>
);
}

const Div = styled.div`
  
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;


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
`
export default SingleCoursePage
const courseData={
   "_id": {
     "$oid": "64e8572311f200d0280a0974"
   },
   "img": "https://imgs.search.brave.com/Mp2eqLqqOcDIX7gOEu6Ov9zK9q79LAaOzn1NS6Nl6Ek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kM2Qw/bHF1MDBsbnF2ei5j/bG91ZGZyb250Lm5l/dC9tZWRpYS9tZWRp/YS85MzZjMmI5OS0x/N2Q1LTQyYWItODRm/Mi1hMzA5YmMzMDIy/YzkuanBn",
   "university": "University of ALBERTA",
   "start_from": "24 Aug",
   "total_enrolled": 55424,
   "course": "Gain insight into a topic and learn the fundamentals",
   "instructor": "Dr. Paul L. Gareau",
   "rating": 4.8,
   "reviews": 23432,
   "reviews_txt": [
     {
       "name": "VK",
       "rate": 5,
       "Body": "Good course! I am so grateful to have had the opportunity to learn the material presented. Thanks you so much! All the work that was evident in putting this course together was worth the effort!"
     },
     {
       "name": "JB",
       "rate": 5,
       "Body": "This is a must for anyone, non-indigenous to Indigenous to complete. Should also be a part of the process to become a Canadian citizen. Very well done. I thank you for opening my eyes, mind and heart."
     }
   ],
   "course_duration": "3 weeks",
   "skills": [
     "Politics",
     "Art",
     "Human Rights and Allyship",
     "History",
     "Indigenous Studies"
   ],
   "modules": [
     "Worldview",
     "Fur Trade",
     "Trick or Treaty",
     "New Rules",
     "Killing the Indian in the Child",
     "A Modern Indian",
     "Red power",
     "Sovereign Lands",
     "Indigenous Women",
     "Indigenous in the City",
     "Current Social Movements",
     "Living Traditions"
   ],
   "Recommended": [
     {
       "university": "University of Toronto",
       "body": "Aboriginal Worldviews and Education"
     },
     {
       "university": "Check Pint Software",
       "body": "Check point jump Start: Product Deployment"
     }
   ],
   "Degrees": [
     {
       "university": "Georgetown University",
       "deg": "Bachelor of Arts in Liberal Studies"
     },
     {
       "university": "Louisiana State University",
       "deg": "Master in Arts in Education -Higher Education"
     }
   ]
 }