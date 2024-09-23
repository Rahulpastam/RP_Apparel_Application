/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
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
