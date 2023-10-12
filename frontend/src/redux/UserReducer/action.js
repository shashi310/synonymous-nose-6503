import axios from "axios";

import {
  COURSE_ERROR,
  COURSE_LOADING,
  COURSE_SUCESS,
  actionLoginError,
  actionLoginLoading,
  actionLoginSuccess,
  actionsignUpLoading,
  actionsingUpError,
  actionsingUpSuccess,
} from "./actionType";

let baseURL = "https://energetic-wasp-hose.cyclic.cloud/";
let user=localStorage.getItem('user');

// export const loginFetch = (value) => (dispatch) => {
//   dispatch(actionLoginLoading());
//   return axios
//     .post(`${baseURL}users/login`, value)
//     .then((res) => {
//       dispatch(actionLoginSuccess(res.data));
//       localStorage.setItem(
//         "user",
//         JSON.stringify({email: res.data.user.email,name: res.data.user.name,role:res.data.user.role,token: res.data.token,isAuth: true})
//       );
//       console.log(res);
//     })
//     .catch((err) => {
//       dispatch(actionLoginError(err.message));
//       console.log(err);
//     });
// };



export const loginFetch = (value) => (dispatch) => {
  dispatch(actionLoginLoading());
  return axios
    .post(`${baseURL}/users/login`, value)
    .then((res) => {
      console.log(res.data);
      dispatch(actionLoginSuccess(res.data));
      localStorage.setItem(
        "user",
        JSON.stringify({token: res.data.token,isAuth: true,user:value.password})
      );
      console.log("loginres",res);
    })
    .catch((err) => {
      dispatch(actionLoginError(err.message));
      console.log(err);
    });
};


export const signUpFetch = (value) => (dispatch) => {
   dispatch(actionsignUpLoading())
  return  axios.post(`${baseURL}/users/register`,value)
    .then((res)=>{
    dispatch(actionsingUpSuccess())
        console.log(res);
    })
    .catch((err)=>{
    dispatch(actionsingUpError(err.response.data.msg))
        console.log(err.response.data.msg);
    })
}


// conver 1 letter to upper case and rest to lower 
export function capitalizeFirstLetter(string) {
  console.log(string);
  const words = string?.split(' ');
  const capitalizedWords = words?.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return capitalizedWords?.join(' ');
}



// get all courses

export const getCourses=()=>(dispatch)=>{

    dispatch({type:COURSE_LOADING})

  fetch("https://energetic-wasp-hose.cyclic.cloud/courses",{
            headers:{
              "Authorization":`Bearer ${user.token}`
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            console.log(res.Courses)
           
            dispatch({type:COURSE_SUCESS,payload:res.Courses})
            dispatch({type:COURSE_LOADING})
            return res.Courses
        }).catch((err)=>{
          dispatch({type:COURSE_ERROR})
        })

}
