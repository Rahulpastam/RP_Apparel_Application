/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
  const { setUser, setIsAuthenticated } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email, password)
    try {
      await axios
        .post(
          "http://localhost:4000/api/user/login",
          { email, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          // console.log(res.data);
          setIsAuthenticated(true);
          setUser(res.data.user);
          // console.log("from login",res.data.user.firstName)
          if (res.data.success) {
            // Save user data to local storage
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setUser(res.data.user); // Assuming you have a setUser function in context
            setIsAuthenticated(true); // Set authenticated state
          }
          navigate("/");
          toast.success(res.data.message);
          setEmail("");
          setPassword("");
        });
    } catch (error) {
      // console.log(error.response.data)
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>user1@gmail.com</label>
            <input 
            type="text" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
            type="password" 
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="auth-footer">
          Do not have an account? <Link to={"/signup"}> Signup here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
