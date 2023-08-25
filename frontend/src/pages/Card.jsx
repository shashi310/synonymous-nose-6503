import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Card=({ image, university, title, earn, type })=>{

  const navigate=useNavigate()


  return (
  
    <Link to={`/dashboard/${1}`}>

<div className="cart" >
        <img src={image} alt={title} />
        <p className='university'>{university}</p>
        <p className='title'>{title}</p>
        <p className='earn'>{earn}</p>
        <p className='type'>{type}</p>
    </div>
    </Link>
    
    
 


      
   
  )
}

export default Card
