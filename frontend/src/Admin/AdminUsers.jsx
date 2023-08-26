import {React,useState} from 'react'
import GetUser from './GetUser'
import UpdateUser from './UpdateUser'
import Deluser from './Deluser'

const AdminUsers = () => {
    const [getUsers, setGetUsers] =useState(true)
    const [active, setActive] = useState(1)
    const [updateUser,setUpdateUser]=useState(false)
    const [delUser,setDelUser]=useState(false)
  
    const handleClickGet =()=>{
     setGetUsers(true)
      setUpdateUser(false)
      setDelUser(false)
      setActive(1)
    }
    const handleClickUpdate =()=>{
      setDelUser(false)
      setGetUsers(false)
      setUpdateUser(true)
      setActive(2)
    }
    const handleClickDelete =()=>{
      setGetUsers(false)
      setUpdateUser(false)
      setDelUser(true)
      setActive(3)
    }
    const btnStyle = {
      width: '180px',
      padding:  '8px 15px',
      color: '#333',
      border:  '#ccc 1px  solid ',
      backgroundColor: '#fff',
      marginRight: '0px',
      fontSize: '16px200px',
     }
  
    return (
      <div >
        <div style={{display: 'flex' , justifyContent: 'center', margin: '.7rem 0'}}>
        <button style={btnStyle} className={active==1?'active-acc-tab':''} onClick={handleClickGet}>All users</button>
        <button style={btnStyle} className={active==2?'active-acc-tab':''} onClick={handleClickUpdate}>update User</button>
        <button style={btnStyle} className={active==3?'active-acc-tab':''} onClick={handleClickDelete}>Delete User</button>
        </div>
        {getUsers &&  <GetUser />}
        {updateUser &&  <UpdateUser />}
        {delUser && <Deluser />}
      </div>
    )
}

export default AdminUsers