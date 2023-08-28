import React, { useState, useEffect } from 'react';
import './Payment.css'; // Make sure to import your CSS file
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  let price=localStorage.getItem("price")||799
  const [details, setDetails] = useState({
    totalMRP: price,
    totalDiscount: Math.floor(price*0.1),
    payableAmount: Math.floor(price-(price*0.1)),
  
  });

  const [customerDetails, setCustomerDetails] = useState([]);

  useEffect(() => {
    // Calculate and update the DOM with summary values here
  }, [details]);
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Payment successful!")
    toast.success("Payment successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    e.target.reset();

    navigate("/dashboard");
    
  };

  // const handlePaymentSubmit = (e) => {
  //   const latestCustomerDetail = customerDetails[customerDetails.length - 1];

  //   if (!latestCustomerDetail || !latestCustomerDetail.name || !latestCustomerDetail.cardNumber || !latestCustomerDetail.issueDate || !latestCustomerDetail.expiryDate) {
  //     alert("Please fill in the card details.");
  //   } else {
  //     // Clear the form
  //     e.target.reset();

  //     // Display a toast notification for successful payment
  //     toast.success("Payment successful!", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };

  return (
    <div>
   <div>  
   <Link to="/"><Button colorScheme='teal' variant='link' m="10px">
    Home
  </Button></Link> 
      <Heading as='h2' size='xl' textAlign="center" mb="50px">
      Payment Page
  </Heading>
   
  </div>
      <div id="main-container">
        <div className="container1">
          <form onSubmit={handleFormSubmit}>
            <div id="div1">
              <h2 id="Div1">Enter Your Card Details</h2>
              <div>
                <p>Card Holder Name*</p>
                <input id="name" type="text" placeholder="Enter Full name" />
              </div>
            </div>

            <div id="div2">
              <p>Card Number*</p>
              <input id="cardNumber" type="number" placeholder="Enter Card Number" />
            </div>

            <div id="div3">
              <div>
                <p>Issue date</p>
                <input id="issue" type="date" placeholder="Enter Issue Date" />
              </div>
              <div>
                <p>Expiry Date*</p>
                <input id="expiry" type="date" placeholder="Enter Expiry Date" />
              </div>
            </div>

            <input id="pay" type="submit" value="PAY" />
          </form>
        </div>
        <div className="container2">
          <div id="innerCont2">
            <div>
              <h2>Course Amount</h2>
            </div>

            <div id="Div1">
              <div>Total MRP</div>
              <div><span id="MRP">{details?.totalMRP}</span></div>
            </div>

            <div id="Div2">
              <div>Total Discount</div>
              <div><span id="totalDiscount">{details?.totalDiscount}</span></div>
            </div>

            <div id="Div3">
              <div>GST charges</div>
              <div id="green">FREE</div>
            </div>

            <div id="Div4">
              <div>Payable Amount</div>
              <div id="payableAmount">{details?.payableAmount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
