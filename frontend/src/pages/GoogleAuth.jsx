import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const clientId =
  "1932194339-ugmhoo66hgqio243b0p1mr92rk9i27s5.apps.googleusercontent.com"; // Replace with your actual client ID

const GoogleSignup = () => {
  const baseURL="http://localhost:8080"
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSuccess = async (response) => {
    const { credential } = response;
    const decodedToken = jwtDecode(credential);

    console.log(decodedToken);
    const data = {
      email: decodedToken.email,
      password: decodedToken.email,
      name: decodedToken.name,
      image: decodedToken.picture,
    };


    try {
      const isUser = await axios.post(
        `${baseURL}/users/register`,
        data
      );
      await axios
        .post(`${baseURL}/users/login`, {
          email: decodedToken.email,
          password: decodedToken.email,
        })
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          console.log(res.data.token);
        })
        .catch((err) => console.log(err));
      if (isUser) {
        // await dispatch(signInAuth(data));

       
      } else {
        throw Error;
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const handleFailure = () => {
    console.log("Google login failed");
    // Handle the failed login response
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          id="google-login-button"
          onSuccess={handleSuccess}
          onError={handleFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleSignup;
