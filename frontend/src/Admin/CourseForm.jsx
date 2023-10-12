import React, { useState,useEffect } from "react";
import { styled } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProduct } from "../redux/AdminReducer/action";
import { patchProduct } from "../redux/AdminReducer/action";
import { useParams } from 'react-router-dom';

const CourseForm = () => {
  const {id}= useParams()
  const [review, setReview] = useState([]);
  const [rName, setrName] = useState("");
  const [rRating, setrRating] = useState("");
  const [rBody, setrBody] = useState("");

  const [skills, setskills] = useState([]);
  const [skill, setSkill] = useState("");

  const [modules, setmodules] = useState([]);
  const [mod, setmod] = useState("");

  const [recommended, setRecommendend] = useState([]);
  const [reUniversity, setreUniversity] = useState(""); 
  const [reBody, setreBody] = useState("");

  const [degrees, setDegrees] = useState([]);
  const [dUniversity, setdUniversity] = useState("");
  const [dDegree, setdDegree] = useState("");

  const [img, setImg] = useState("");
  const [university, setUniversity] = useState("");
  const [start_from, setStart_from] = useState("");
  const [price, setPrice] = useState();
  const [total_enrolled, settotal_enrolled] = useState("");
  const [course, setcourse] = useState("");
  const [instructor, setInstructor] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setreviews] = useState("");
  const [course_duration, setcourse_duration] = useState("");

  const [formData, setFormData] = useState([]);




  // const courses=useSelector((store)=>{
  //   return store.AdminReducer.data
  // })
  const dispatch=useDispatch();

  const[courses,getCourses] =useState([])
  // console.log("course",courses);
  let user=JSON.parse(localStorage.getItem('user'));
  useEffect(()=>{
    dispatch(getProduct())
    fetch("https://energetic-wasp-hose.cyclic.cloud/courses",{
              headers:{
                  "Authorization":`Bearer ${user.token}`
              }
          }).then((res)=>{
              return res.json()
          }).then((res)=>{
              console.log(res)
              getCourses(res.Courses
                  )
          })
    
  },[])
   

  
  useEffect(()=>{
    dispatch(getProduct())
    
  },[])

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      img,
      university,
      start_from,
      price,
      total_enrolled,
      course,
      instructor,
      rating,
      reviews,
      course_duration,
      review,
      skills,
      modules,
      recommended,
      degrees,
    };
    setFormData([...formData, data]);
    console.log("formdata",data);
   
    dispatch(patchProduct(id,data));
  };

  console.log(formData);


const data =courses?.find((ele) => ele._id === id);


// console.log(data);
  
//update the whole input fields
useEffect(()=>{


if(data){
     
  setrName(data?.reviews_txt[0].name)
  setrRating(data?.reviews_txt[0].rate)
  setrBody(data?.reviews_txt[0].Body)

  setSkill(data?.skills[0])
  
  setmod(data?.modules[0])
 
  setreUniversity(data?.Recommended[0].university)
  setreBody(data?.Recommended[0].body)
  
  setdUniversity(data?.Degrees[0].university)
  setdDegree(data?.Degrees[0].deg)
  setImg(data?.img)
  setUniversity(data?.university)
  setStart_from(data?.start_from)
  setPrice(data?.price)
  settotal_enrolled(data?.total_enrolled)
  setcourse(data?.course)
  setInstructor(data?.instructor)
  setRating(data?.rating)
  setreviews(data?.reviews)
  setcourse_duration(data?.course_duration)
  }

},[data])


 
return (
  <Div>
    <center>
      <h2>Add Course Information</h2>
    </center>
    <form onSubmit={handleSubmit}>
      {/* ... Other fields */}

      <label>
        Image:
        <input
        value={img}
          type="text"
          
          onChange={(e) => setImg(e.target.value)}
        />
      </label>
      

      <label>
        University:
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
      </label>
      
      <br/>
      <label>
        Start_From:
        <input
          type="text"
          value={start_from}
          onChange={(e) => setStart_from(e.target.value)}
        />
      </label>
     

      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Total_Enrolled:
        <input
          type="number"
          value={total_enrolled}
          onChange={(e) => settotal_enrolled(e.target.value)}
        />
      </label>

      <label>
        Course:
        <input
          type="text"
          value={course}
          onChange={(e) => setcourse(e.target.value)}
        />
      </label>
      <br/>

      <label>
        Course_Duration:
        <input
          type="text"
          value={course_duration}
          onChange={(e) => setcourse_duration(e.target.value)}
        />
      </label>

      <label>
        Instructor:
        <input
          type="text"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        />
      </label>
      <br />

      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>

      <label>
        Reviews:
        <input
          type="number"
          value={reviews}
          onChange={(e) => setreviews(e.target.value)}
        />
      </label>
      <br/>
      
      <br/>
      {/* Reviews */}
      <h3>Add Reviews</h3>

      <label>
        Name:
        <input
          type="text"
          value={rName}
          onChange={(e) => setrName(e.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={rRating}
          onChange={(e) => setrRating(e.target.value)}
        />
      </label>
      <br/>
     
      <label>
        Body:
        <input value={rBody} onChange={(e) => setrBody(e.target.value)} />
      </label>
      
      <button
        type="button"
        onClick={() => {
          const data = {
            rName,
            rBody,
            rRating,
          };
          setReview([...review, data]);
        }}
      >
        Add Review
      </button>
      <br/>
      <br/>
      {/* Skills */}
      <h3>Add Skills</h3>

      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          const data = {
            skill,
          };
          setskills([...skills, data]);
        }}
      >
        Add Skill
      </button>
      <br/>
      <br/>
      {/* Modules */}
      <h3>Add Modules</h3>

      <input
        type="text"
        value={mod}
        onChange={(e) => setmod(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          const data = {
            mod,
          };
          setmodules([...modules, data]);
        }}
      >
        Add Module
      </button>
      <br/>
      <br/>
      {/* Recommended */}
      <h3>Add Recommended</h3>

      <label>
        University:
        <input
          type="text"
          value={reUniversity}
          onChange={(e) => setreUniversity(e.target.value)}
        />
      </label>
      <label>
        Body:
        <input
          type="text"
          value={reBody}
          onChange={(e) => setreBody(e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          const data = {
            reUniversity,
            reBody,
          };
          setRecommendend([...recommended, data]);
        }}
      >
        Add Recommended
      </button>
      <br/>
      {/* Degrees */}
      <h3>Add Degrees</h3>

      <label>
        University:
        <input
          type="text"
          value={dUniversity}
          onChange={(e) => setdUniversity(e.target.value)}
        />
      </label>
      <label>
        Degree:
        <input
          type="text"
          value={dDegree}
          onChange={(e) => setdDegree(e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          const data = {
            dUniversity,
            dDegree,
          };
          setDegrees([...degrees, data]);
        }}
      >
        Add Degree
      </button>

      <center>
        <button className="submit" type="submit">
          Submit
        </button>
      </center>
    </form>
  </Div>
);
};

export default CourseForm;

const Div = styled.div`
justify-content: center;
align-items: center;
//border: 1px solid black;
width: 45%;
margin: auto;
h2 {
  margin-bottom: 30px;
  color: blue;
  font-size: x-large;
  font-weight: 700;
  text-decoration: underline;
}
h3 {
  color: #1e96c8;
  font-size: large;
  font-weight: 700;
}
input {
  width: 95%;
  border: 1px solid black;
  padding: 0px 3px 0px 3px;
  margin: 10px;
  height: 32px;
}

label {
  width: 100px;
  color: #583204;
  font-weight: 600;
  margin-left: 10px;
}

button {
  background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
  border-radius: 0.5rem;
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  color: #ffffff;
  width: auto;
  border: 0;
  cursor: pointer;
}

button:hover {
  background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
}
.submit {
  background-image: linear-gradient(-180deg, #583204 0%, #c8621e 100%);
  border-radius: 0.5rem;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  color: #ffffff;
  width: auto;
  border: 0;
  cursor: pointer;
  font-size: larger;
  margin-top: 30px;
}
.submit:hover {
  background-image: linear-gradient(-180deg, #ed1010 0%, #a3070c 100%);
}
`;