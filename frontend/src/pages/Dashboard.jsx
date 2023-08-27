import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Card from './Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../redux/UserReducer/action'





const Dashboard = () => {
    const [showAll, setShowAll] = useState(false);
    const [data,setData]=useState([])
  

    const stData=useSelector((store)=>{
        console.log(store)
        return store
    })
    console.log("stroe",stData)

    const dispatch=useDispatch()

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };


    useEffect(()=>{
       
        fetch("https://energetic-wasp-hose.cyclic.cloud/courses",{
            headers:{
                "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGU4ZjI5MGVhZWRhNjFjZTJmOTliMWUiLCJ1c2VyTmFtZSI6InNoYXNoaSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MzEyODY1MCwiZXhwIjoxNjkzNzMzNDUwfQ.tAXBywpDLMOdIMRVbptGjStLb1t2IoQqjUBeL83pN3Y`
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            setData(res.Courses
                )
        })


        dispatch(getCourses())
    
        
        
    },[])



    return (
        <DIV>

            <div>
                <Navbar/>
            </div>

            <div className='welcome'>
                <div className='welcome_sub'>
                    <div className='wlc_txt'><h1>Welcome!</h1></div>
                    <div className='about_yourself'>
                        <div className='about_yourself_1'>
                            <p ><b>tell about yourself</b></p>
                            <p className='currently'><span>I am currenlty a <input placeholder='software /..' /></span></p>
                            <p className='savetoprofile'>save to profile</p>
                        </div>
                        <div className='about_yourself_2'>
                            <p>SET YOUR LEARNING GOALS</p>
                            <p className='option'>⛑️Land My First Job</p>
                            <p className='option'>🔧 Advanced in My current Role</p>
                            <p className='option'>🔄Switch To a different role</p>
                            <p className='option'>😄Expolre topics outside of Work</p>
                        </div>

                    </div>
                </div>

            </div>


            {/* ---------------Earn Your Degree */}
            <div className="App">
                <p className='App-earn'>Earn Your Degree</p>
                <div className="card-container">
                    {data.slice(0, showAll ? data.length : 4).map((course, index) => (
                        <Card 
                        key={index}
                        {...course}
                        Earn="Degrees 🎓"
                        />
                    ))}
                </div>
                <button onClick={toggleShowAll} className="show-button">
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>


            {/* --------------------------Most Popular Certificates---------------------- */}
            <div className="App">
                <p className='App-earn'>Most Popular Certificates</p>
                <div className="card-container">
                    {data.reverse().slice(0, showAll ? data.length : 4).map((course, index) => (
                        <Card
                         key={index}
                        {...course}
                        Earn="Cetificates 📜"
                        />
                    ))}
                </div>
                <button onClick={toggleShowAll} className="show-button">
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>



            {/* -------------------------------------------------New on Coursera--------------------------- */}
            <div className="App">
                <p className='App-earn'></p>
                <div className="card-container">
                    {data.slice(0, showAll ? data.length : 4).map((course, index) => (
                        <Card key={index} {...course} />
                    ))}
                </div>
                <button onClick={toggleShowAll} className="show-button">
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>



            {/* -------------------------------------------------New on Coursera--------------------------- */}
            <div className="App">
                <p className='App-earn'></p>
                <div className="card-container">
                    {data.slice(0, showAll ? data.length : 4).map((course, index) => (
                        <Card key={index} {...course} />
                    ))}
                </div>
                <button onClick={toggleShowAll} className="show-button">
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>








{/* ----------------------------------------------footer----------------------------- */}

            <div>
                <Footer/>
            </div>
            




        </DIV>

    )
}

export default Dashboard

const DIV = styled.div`
    *{
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing:0
    }
    .welcome{
        background-color:blue;
        height: 230px;
        width: 100%;
        background-color:#E3F2FD;
    }
    .welcome_sub{
        position: relative;
        height: 100%;
    }
    .wlc_txt{
        color: #166dd1;
        position:absolute;
        bottom:10px;
        left: 20%;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size:20px;
    }
    .about_yourself{
        display: flex;
        gap:10px;
        margin:auto;
        position: absolute;
        width: 40%;
        height: 80%;
        right:11%;
        top:25px;
        box-shadow: rgba(77, 112, 219, 0.2) 0px 2px 8px 0px;
        white-space: pre;

       
    }
    .about_yourself div{
       
        width: 50%;
        padding:10px;

    }
    
    .about_yourself input{
        outline:none;
        padding:3px;
        width: 90px;
        border: none;
    }
    .currently{
        margin-top:15px;
    }
    .savetoprofile{
        color: #166dd1;
        margin-top:25px;
        cursor: pointer;
    }


    .about_yourself_2{
        padding: 10px;
    }
    .about_yourself_2 p{
        font-weight:lighter;
    }
    .about_yourself_2 .option{
        color: #166dd1;
        margin-top:8px;
        cursor: pointer;
    }


   


    /* ----------------------------card---------------------------------- */

.App{
    padding:20px;
}

.App-earn{
 text-align: left;
 margin-left:110px;
 font-size:24px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.cart {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius:6px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.cart:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.card-image {
  max-width: 100%;
  height: auto;
  border-radius:6px;
}
.university{
    text-align:center;
    margin-top:6px;
    font-weight:lighter
}
.title{
    text-align:left;
    font-size:large;
    margin-top:10px;
    font-weight:bolder;
    flex-wrap: wrap;
    white-space: nowrap; 
  width: max-content; 
  overflow: hidden;
  text-overflow: ellipsis; 
  
}
.earn{
    text-align:left;
    font-weight:lighter;
    margin-top:20px;
    color:blue;
   
}
.type{
    margin-top:8px;
    text-align:left
}

.show-button {
  margin-top: 20px;
  margin-left:-77%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  
}

.show-button:hover {
  background-color: #0056b3;
}




@media only screen and (min-width: 450px){

    .welcome_sub{
        position: relative;
        height: 100%;
    }

    .wlc_txt{
        color: #166dd1;
        position:absolute;
        top:10px;
        left: 20%;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size:20px;
    }
    .about_yourself{
        display: flex;
        gap:10px;
        margin:auto;
        position: absolute;
        width: 40%;
        height: 80%;
        right:11%;
        top:25px;
        box-shadow: rgba(77, 112, 219, 0.2) 0px 2px 8px 0px;
        white-space: pre;

       
    }

}

    
`