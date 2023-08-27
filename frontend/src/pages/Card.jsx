import React from 'react'
import { Link, useNavigate } from 'react-router-dom'





const Card=({ _id,img,rating,Degrees,university,
  course,Earn})=>{

 

  return (
  
    <Link to={`/dashboard/${_id}`}>

<div className="cart" >
        <img src={img} alt={"imag"} />
        <p className='university'>{university}</p>
        <p className='title'>{course}</p>
        <p className='earn'>Earn a {Earn}</p>
        <p className='type'>{Earn}</p>
    </div>
    </Link>
    
    
 


      
   
  )
}

export default Card
