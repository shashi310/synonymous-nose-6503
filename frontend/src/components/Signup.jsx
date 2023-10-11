import React, { useRef, useState } from "react";

import Navbar from "./Navbar";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  Toast,
  keyframes,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import "boxicons";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { signUpFetch } from "../redux/UserReducer/action";
import { BiError } from "react-icons/bi";
import { actionsingUpError } from "../redux/UserReducer/actionType";
import styled from "styled-components";

const SignUp = () => {
  const emailInput = useRef(null);
  const backgroundRef = useRef(null);
  const emailbox = useRef(null);
  const passwordInput = useRef(null);
  const passwordbox = useRef(null);
  const nameInput = useRef(null);
  const namebox = useRef(null);
  const confirmPasswordInput = useRef(null);
  const confirmPasswordbox = useRef(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    isPromotion: false,
  });

  const userStore = useSelector((store) => store.UserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [eyeclose, seteyeMoment] = useState(false);
  const toast = useToast();
  const [toastkey, setToastKey] = useState(true);

  // will show the input element when click on element
  function showInput(e) {
    const ele = e.target.id;
    if (ele === "email") {
      emailInput.current.style.display = "block";
      emailInput.current.focus();
      emailbox.current.style.padding = "5px 20px";
    } else if (ele === "password") {
      passwordInput.current.style.display = "block";
      passwordInput.current.focus();
      passwordbox.current.style.padding = "5px 20px";
    } else if (ele === "name") {
      nameInput.current.style.display = "block";
      nameInput.current.focus();
      namebox.current.style.padding = "5px 20px";
    } else if (ele === "confirmPassword") {
      confirmPasswordInput.current.style.display = "block";
      confirmPasswordInput.current.focus();
      confirmPasswordbox.current.style.padding = "5px 20px";
    }
  }

  // will block the input element when click on backgrond
  function blockInput(event) {
    if (event.target === backgroundRef.current && !form.email) {
      emailInput.current.style.display = "none";
      emailbox.current.style.padding = "20px";
    }
    if (event.target === backgroundRef.current && !form.password) {
      passwordInput.current.style.display = "none";
      passwordbox.current.style.padding = "20px";
    }
    if (event.target === backgroundRef.current && !form.confirmPassword) {
      confirmPasswordInput.current.style.display = "none";
      confirmPasswordbox.current.style.padding = "20px";
    }

    if (event.target === backgroundRef.current && !form.name) {
      nameInput.current.style.display = "none";
      namebox.current.style.padding = "20px";
    }
  }

  // form management

  function handleInput(e) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }

  // see password;

  function showPassword() {
    seteyeMoment(!eyeclose);
    passwordInput.current.type === "password"
      ? (passwordInput.current.type = "text")
      : (passwordInput.current.type = "password");
  }

  // handle promotion
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setForm({ ...form, isPromotion: !isChecked });
  };

  // Error toast
  const showToast = () => {
    toast({
      position: "top-right",
      top: "100px",
      render: () => (
        <Box color="white" p={3} bg="red.500">
          {/* {userStore.isError} */}
        </Box>
      ),
    });
  };

  // Sucess Toast
  const showSucessToast = () => {
    toast({
      position: "top-right",
      top: "100px",
      render: () => (
        <Box color="white" p={3} bg="green.500">
          Sign Up Sucess
        </Box>
      ),
    });
  };

  if (userStore.isError && toastkey) {
    showToast();
    setToastKey(false);
  }

  // SignUp function
  function handleSignUp() {
    setToastKey(true);
    const { email, password, confirmPassword, name } = form;
    if (!email || !password || !confirmPassword || !name) {
      dispatch(actionsingUpError("All fields are required"));
      return;
    }

    if (confirmPassword !== password) {
      dispatch(actionsingUpError("Password does not match"));
      return;
    }

    dispatch(signUpFetch(form)).then((res) => {
      setForm({ email: "", password: "", confirmPassword: "", name: "" });
      showSucessToast();
    });
  }

  return (
    <div>
      <Box>
        <Navbar />
      </Box>

      <h1 style={{ textAlign: "center", marginTop: "3%", fontSize: "2rem" }}>
        Sign up And Start Learning
      </h1>

      <Div id="form">
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />

        <div id="pass">
          <input
            style={{ width: "90%", margin: "auto" }}
            type="password"
            placeholder="Password"
          />

          <span id="icon">
            <box-icon name="hide"> </box-icon>
          </span>
        </div>

        <br />
        <input type="password" placeholder="Confirm Password" />
        <br />
        <button id="submit">SignUp</button>
      </Div>
    </div>
  );
};

export default SignUp;

const Div = styled.div`
  margin: auto;
  width: 35%;
  padding: 5% 2%;
  /* border: 1px solid blue; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin-top: 2%;
  input {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 550;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 3rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    margin: auto;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  #submit {
    width: 100%;
    padding: 2%;
    margin-top: 5%;
    background-color: blue;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
  }
  #pass {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    margin: auto;
    margin-top: 3%;
    height: 3rem;
  }
  #icon {
    padding: 2%;
  }
`;
