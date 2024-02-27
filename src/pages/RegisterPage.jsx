import { Button, Form } from "react-bootstrap";
import "../styles/Registerpage.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const RegisterPage = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  const messageAccountCreate=()=>{
    Swal.fire({
      title: "Good job!",
      text: "Your Account Created Successfully.",
      icon: "success"
    });
  }

  const handleName=(e)=>{
    setName(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handleUsername=(e)=>{
    setUsername(e.target.value);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  }

  const handleUserRegistration=async(e)=>{
   
    e.preventDefault();

   const data={
    "name":name,
    "email":email,
    "username":username,
    "password":password
   }
    try {
      const response=await axios.post("http://localhost:8081/auth/register",data);
     console.log(response.data);
     navigate("/login/account");
    } catch (error) {
       console.log(error);
    }   
  }

  return (
    <div className="registerpage">
      <Form onSubmit={handleUserRegistration}>
      <div className="shop-name">
        <p>Food Mart</p>
      </div>
      <div className="logo">
      <i class="bi bi-cup-hot-fill"></i>
      </div>
      <div className="short-desc">
        <p>Start Your 14-Day Free <br /> <span>Dilivery Today.</span></p>
      </div>
      <div className="short-title">
        <p>NO CREDIT CARD REQUIRED!</p>
      </div>
     <div className="input-fields">
     <div className="name-field">
     <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Full name" onChange={handleName}/>
      </Form.Group>
     </div>
     <div className="email-field">
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
      </Form.Group>
     </div>
     <div className="username-field">
     <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Enter username</Form.Label>
        <Form.Control type="text" placeholder="Create username" onChange={handleUsername}/>
      </Form.Group>
     </div>
     <div className="password-field">
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password" placeholder="Create password" onChange={handlePassword}/>
      </Form.Group>
     </div>
     <div className="register-button">
      <Button type="submit">Create Account</Button>
     </div>
     </div>
     <div className="privacy-policy">
       <p>By Signing up to uBrand, means you agree to our Privacy Policy and Terms <br />of Service</p>     
      </div>
      <div className="already-and-login-link">
        <div className="already">
          <p>Already a Member?</p>
        </div>
        <div className="login-link">
        <Link to="/login/account">LOGIN HERE</Link>
        </div>
      </div>
      <div className="style-group">
        <div className="style-group-1">
          <div className="style-group-1-child" />
          <div className="style-group-1-item" />
          <div className="style-group-1-inner" />
          <div className="rectangle-div" />
          <div className="style-group-1-child1" />
          <div className="style-group-1-child2" />
          <div className="style-group-1-child3" />
          <div className="style-group-1-child4" />
          <div className="style-group-1-child5" />
          <div className="style-group-1-child6" />
          <div className="style-group-1-child7" />
          <div className="style-group-1-child8" />
        </div>
        <div className="style-group-2">
          <div className="style-group-1-child" />
          <div className="style-group-1-item" />
          <div className="style-group-1-inner" />
          <div className="rectangle-div" />
          <div className="style-group-1-child1" />
          <div className="style-group-1-child2" />
          <div className="style-group-1-child3" />
          <div className="style-group-1-child4" />
          <div className="style-group-1-child5" />
          <div className="style-group-1-child6" />
          <div className="style-group-1-child7" />
          <div className="style-group-1-child8" />
        </div>
      </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
