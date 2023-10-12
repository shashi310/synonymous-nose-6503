// import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Spinner,
//   Text,
//   Toast,
//   keyframes,
//   useToast,
// } from "@chakra-ui/react";
// import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";

// import { useDispatch, useSelector } from "react-redux";

// import { Link, useNavigate } from "react-router-dom";
// import { signUpFetch } from "../redux/UserReducer/action";
// import {BiError} from 'react-icons/bi'
// import { actionsingUpError } from "../redux/UserReducer/actionType";

// const SignUp = () => {
//   const emailInput = useRef(null);
//   const backgroundRef = useRef(null);
//   const emailbox = useRef(null);
//   const passwordInput = useRef(null);
//   const passwordbox = useRef(null);
//   const nameInput = useRef(null);
//   const namebox = useRef(null);
//   const confirmPasswordInput = useRef(null);
//   const confirmPasswordbox = useRef(null);
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     name: "",
//     isPromotion: false,
//   });

//   const userStore = useSelector((store) => store.UserReducer);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isChecked, setIsChecked] = useState(false);
//   const [eyeclose, seteyeMoment] = useState(false);
//   const toast = useToast()
//   const [toastkey,setToastKey] = useState(true)

//   // will show the input element when click on element
//   function showInput(e) {
//     const ele = e.target.id;
//     if (ele === "email") {
//       emailInput.current.style.display = "block";
//       emailInput.current.focus();
//       emailbox.current.style.padding = "5px 20px";
//     } else if (ele === "password") {
//       passwordInput.current.style.display = "block";
//       passwordInput.current.focus();
//       passwordbox.current.style.padding = "5px 20px";
//     } else if (ele === "name") {
//       nameInput.current.style.display = "block";
//       nameInput.current.focus();
//       namebox.current.style.padding = "5px 20px";
//     } else if (ele === "confirmPassword") {
//       confirmPasswordInput.current.style.display = "block";
//       confirmPasswordInput.current.focus();
//       confirmPasswordbox.current.style.padding = "5px 20px";
//     }
//   }

//   // will block the input element when click on backgrond
//   function blockInput(event) {
//     if (event.target === backgroundRef.current && !form.email) {
//       emailInput.current.style.display = "none";
//       emailbox.current.style.padding = "20px";
//     }
//     if (event.target === backgroundRef.current && !form.password) {
//       passwordInput.current.style.display = "none";
//       passwordbox.current.style.padding = "20px";
//     }
//     if (event.target === backgroundRef.current && !form.confirmPassword) {
//       confirmPasswordInput.current.style.display = "none";
//       confirmPasswordbox.current.style.padding = "20px";
//     }

//     if (event.target === backgroundRef.current && !form.name) {
//       nameInput.current.style.display = "none";
//       namebox.current.style.padding = "20px";
//     }
//   }

//   // form management

//   function handleInput(e) {
//     const { value, name } = e.target;
//     setForm({ ...form, [name]: value });
//   }

//   // see password;

//   function showPassword() {
//     seteyeMoment(!eyeclose);
//     passwordInput.current.type === "password"
//       ? (passwordInput.current.type = "text")
//       : (passwordInput.current.type = "password");
//   }


//   // handle promotion
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     setForm({ ...form, isPromotion: !isChecked });
//   };

// // Error toast
//   const showToast = () => {
//     toast({
//         position: 'top-right',
//         top:'100px',
//       render: () => (
//         <Box color="white" p={3} bg="red.500">
//           {/* {userStore.isError} */}
//         </Box>
//       ),
//     });
//   };

//   // Sucess Toast
//   const showSucessToast = () => {
//     toast({
//         position: 'top-right',
//         top:'100px',
//       render: () => (
//         <Box color="white" p={3} bg="green.500">
//           Sign Up Sucess
//         </Box>
//       ),
//     });
//   };

//   if(userStore.isError && toastkey){
//     showToast();
//     setToastKey(false)
//   }

//   // SignUp function
//   function handleSignUp() {
//     setToastKey(true);
//     const { email, password, confirmPassword, name } = form;
//     if (!email || !password || !confirmPassword || !name) {
//       dispatch(actionsingUpError('All fields are required'));
//       return;
//     }
//     console.log("signUpData",form);
//     if (confirmPassword !== password) {
//       dispatch(actionsingUpError('Password does not match'));
//       return;
//     }

  

//     dispatch(signUpFetch(form))
//       .then((res) => {
//         setForm({ email: '', password: '', confirmPassword: '', name: '' });
//         showSucessToast();
//       })
//   }


//   return (
//     <Box>
//       <Box>
//         <Navbar />
//       </Box>
//       <Box
//         display="flex"
//         justifyContent="center"
//         onClick={blockInput}
//         ref={backgroundRef}
//         pt='100px'
//       >
//         <Box w={{ base: "90%", sm: "80%", md: "40%", lg: "30%" }}>
//           <Box mt='15px'>
//             <Heading size="md">Sign up And Start Learning</Heading>
//           </Box>
//           {/* 2nd box  */}
//           <Box  mt="35px">
//             {/* name */}
//             <Box
//               border="1px solid"
//               p="20px"
//               id="name"
//               m="5px 0"
//               onClick={showInput}
//               ref={namebox}
//             >
//               <Box>
//                 <Heading id="name" size="xs">
//                   Name
//                 </Heading>
//               </Box>
//               <Box>
//                 <Input
//                   type="text"
//                   display="none"
//                   ref={nameInput}
//                   border="none"
//                   size="sm"
//                   focusBorderColor="transparent"
//                   _focus={{ outline: "none" }}
//                   name="name"
//                   value={form.name}
//                   onChange={handleInput}
//                 />
//               </Box>
//             </Box>
//             {/* email  */}
//             <Box
//               border="1px solid"
//               p="20px"
//               id="email"
//               type="email"
//               m="5px 0"
//               onClick={showInput}
//               ref={emailbox}
//             >
//               <Box>
//                 <Heading id="email" size="xs">
//                   Email
//                 </Heading>
//               </Box>
//               <Box>
//                 <Input
//                   display="none"
//                   ref={emailInput}
//                   border="none"
//                   p="0px"
//                   focusBorderColor="transparent"
//                   _focus={{ outline: "none" }}
//                   name="email"
//                   value={form.email}
//                   onChange={handleInput}
//                 />
//               </Box>
//             </Box>
//             {/* password */}
//             <Box
//               border="1px solid"
//               p="20px"
//               id="password"
//               m="5px 0"
//               onClick={showInput}
//               ref={passwordbox}
//             >
//               <Box display="flex" justifyContent="space-between">
//                 <Box onClick={showInput} w="100%">
//                   <Heading id="password" size="xs">
//                     Password
//                   </Heading>
//                 </Box>
//                 <Box onClick={showPassword}>
//                   {eyeclose ? (
//                     <AiFillEye size="20px" />
//                   ) : (
//                     <AiOutlineEyeInvisible size="20px" />
//                   )}
//                 </Box>
//               </Box>
//               <Box>
//                 <Input
//                   type="password"
//                   display="none"
//                   ref={passwordInput}
//                   border="none"
//                   size="sm"
//                   focusBorderColor="transparent"
//                   _focus={{ outline: "none" }}
//                   name="password"
//                   value={form.password}
//                   onChange={handleInput}
//                 />
//               </Box>
//             </Box>
//             {/* confirm password */}
//             <Box
//               border="1px solid"
//               p="20px"
//               id="confirmPassword"
//               m="5px 0"
//               onClick={showInput}
//               ref={confirmPasswordbox}
//             >
//               <Box>
//                 <Heading id="confirmPassword" size="xs">
//                   Confirm Password
//                 </Heading>
//               </Box>
//               <Box>
//                 <Input
//                   type="password"
//                   display="none"
//                   ref={confirmPasswordInput}
//                   border="none"
//                   size="sm"
//                   focusBorderColor="transparent"
//                   _focus={{ outline: "none" }}
//                   name="confirmPassword"
//                   value={form.confirmPassword}
//                   onChange={handleInput}
//                 />
//               </Box>
//             </Box>

//             <Box display="flex">
//               <Box display="inline" p="15px">
//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                 />
//               </Box>
//               <Box display="inline">
//                 <Text p="10px">
//                   Send me special offers, personalized recommendations, and
//                   learning tips.
//                 </Text>
//               </Box>
//             </Box>

//             {/* button  */}
//             <Box mt="15px">
//               <Button
//                 w="100%"
//                 color="white"
//                 bg="#0056D2"
//                 _hover={{ background: "#1E88E5", color: "#CFD8DC" }}
//                 borderRadius="0"
//                 textAlign="center"
//                 onClick={handleSignUp}
//               >
//                 <Heading size="xs">
//                   {userStore.loading ? <Spinner color="white" /> : "Sign Up"}
//                 </Heading>
//               </Button>

//               <Text>Already Resistered <Link href={"/login"} color={'blue'} cursor={'pointer'}>Login Here</Link></Text>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default SignUp;




import React, { useState } from "react";
import { Input, Checkbox, Button, Box, Heading,Toast,useToast, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { signUpFetch } from "../redux/UserReducer/action";
import { actionsingUpError } from "../redux/UserReducer/actionType";
import { useDispatch, useSelector } from "react-redux";
const Signup = () => {
  const dispatch = useDispatch();
const navigate=useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    isPromotion: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  };

  const handleFocus = (name) => {
    setFocusedInput(name);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };



  const [toastkey,setToastKey] = useState(true)
  const toast = useToast()
  // Error toast
  const showToast = () => {
    toast({
        position: 'top-right',
        top:'100px',
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
        position: 'top-right',
        top:'100px',
      render: () => (
        <Box color="white" p={3} bg="green.500">
          Sign Up Sucess
        </Box>
      ),
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    setToastKey(true);
    const { email, password, confirmPassword, name } = form;
        if (!email || !password || !confirmPassword || !name) {
          dispatch(actionsingUpError('All fields are required'));
          return;
        }
        console.log("signUpData",form);
        if (confirmPassword !== password) {
          dispatch(actionsingUpError('Password does not match'));
          return;
        }
    
      
    
        dispatch(signUpFetch(form))
          .then((res) => {
            setForm({ email: '', password: '', confirmPassword: '', name: '' });
            showSucessToast();
            navigate("/login");
          })

  };

  return (
    <Box >
      <Navbar />
      <Heading mx="45%"   size="lg" marginTop="4">Register</Heading>
    <Box mx="32%" marginTop="4">
      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            placeholder="Name"
            isReadOnly={focusedInput !== "name"}
          />
        </Box>
        <Box mb={4}>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            placeholder="Email"
            isReadOnly={focusedInput !== "email"}
          />
        </Box>
        <Box mb={4}>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleInputChange}
            onFocus={() => handleFocus("password")}
            onBlur={handleBlur}
            placeholder="Password"
            isReadOnly={focusedInput !== "password"}
            onClick={togglePasswordVisibility}
          />
        </Box>
        <Box mb={4}>
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleInputChange}
            onFocus={() => handleFocus("confirmPassword")}
            onBlur={handleBlur}
            placeholder="Confirm Password"
            isReadOnly={focusedInput !== "confirmPassword"}
            onClick={togglePasswordVisibility}
          />
        </Box>
        <Box mb={4}>
          <Checkbox
            name="isPromotion"
            isChecked={form.isPromotion}
            onChange={handleCheckboxChange}
          >
            Subscribe to promotions
          </Checkbox>
        </Box>
        <Button mx="38%" type="submit" >Submit</Button>
        <Text mx="20%" marginTop="4">
  Already Registered?{" "}
  <Link to="/login" color="blue">
    Click Here
  </Link>
</Text>
      </form>
    </Box>
    </Box>
  );
};

export default Signup;
