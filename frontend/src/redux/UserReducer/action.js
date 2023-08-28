import axios from "axios";

import {
  actionLoginError,
  actionLoginLoading,
  actionLoginSuccess,
  actionsignUpLoading,
  actionsingUpError,
  actionsingUpSuccess,
} from "./actionType";

let baseURL = "https://energetic-wasp-hose.cyclic.cloud";

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
      console.log(res);
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
