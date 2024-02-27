import { Button, Form } from "react-bootstrap";
import "../styles/Loginpage.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const LoginPage = () => {

  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

 const handleUsername=(e)=>{
    setUsername(e.target.value);
 }

 const handlePassword=(e)=>{
  setPassword(e.target.value);
 }

  const welcomeMessage=()=>{
    Swal.fire("Hi "+username+"!"+" Welcome Back");

  }

  const handleUserLogin=async(e)=>{
     e.preventDefault();

     const data={
      "username":username,
      "password":password
     }

     try {
      const response=await axios.post("http://localhost:8081/auth/login",data);
      localStorage.setItem("token",response.data);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
      welcomeMessage();
      navigate("/place/order");
     } catch (error) {
        console.log(error);
     }
  }

  return (
    <div className="loginpage">
      <form onSubmit={handleUserLogin}>
       <div className="shop-name">
        <p>Food Mart</p>
      </div>
      <div className="logo">
      <i class="bi bi-cup-hot-fill"></i>
      </div>
      <div className="welcome-back-txt">
        <p>WELCOME BACK 👋🏻</p>
      </div>
      <div className="title">
        <p>Continue to your Account.</p>
      </div>
      <div className="input-fields">
         <div className="username-field">
         <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Enter username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={handleUsername}/>
      </Form.Group>
         </div>
         <div className="password-field">
         <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
      </Form.Group>
         </div>
      </div>
      <div className="login-btton">
         <Button type="submit">Continue</Button>
      </div>
      <div className="register-link-and-text">
        <div className="text">
          <p>Are you a Newbie?</p>
        </div>
        <div className="register-link">
          <Link to="/create/account">GET STARTED - IT'S FREE</Link>
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
      </form>
    </div>
  );
};

export default LoginPage;
