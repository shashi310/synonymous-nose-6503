import React from 'react'
import styled from "styled-components"
const Dashboard = () => {
  return (
    <DIV>

        <div className='welcome'>
            <div className='welcome_sub'>
                <div className='wlc_txt'><h1>Wecome!</h1></div>
                <div className='about_yourself'>
                    <div><p>tell about yourself</p></div>
                    <div></div>
                </div>
            </div>

        </div>
        
    </DIV>
  )
}

export default Dashboard

const DIV=styled.div`
    *{
        padding: 0px;
        margin: 0px;
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
        color:blue;
        position:absolute;
        bottom:10px;
        left: 20%;
    }
    .about_yourself{
        border: 1px solid;
        position: absolute;
        width: 40%;
        height: 80%;
        right:11%;
        top:25px;
       
    }
    .about_yourself div{
       
    }
    
`
