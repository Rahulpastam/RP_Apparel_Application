
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="auth-container ">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group form-row  signup-form ">
            <div> <label>First Name</label>
            <input type="text" placeholder="Enter your first name" required /></div>
            <div><label>Last Name</label>
            <input type="text" placeholder="Enter your last name" required />
            </div>
          </div>

          <div className="form-group form-row  signup-form ">
            <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            </div>
            <div> 
              <label>Phone</label>
            <input type="text" placeholder="Enter your phone number" required /></div>
          </div>

          <div className="form-group form-row  signup-form ">
            <div>
               <label>House-No</label>
            <input type="text" placeholder="H-No..," required /></div>
            <div><label>Street</label>
            <input type="text" placeholder="street" required />
            </div>
          </div>

          <div className="form-group form-row  signup-form ">
            <div> 
              <label>City</label>
            <input type="text" placeholder="city" required /></div>
            <div><label>Pincode</label>
            <input type="text" placeholder="pincode" required />
            </div>
          </div>

          <div className="form-group form-row  signup-form ">
            <div> <label>Password</label>
            <input type="password" placeholder="Password" required /></div>
            <div><label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" required />
            </div>
          </div>
          
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? 
          <Link to={"/login"}>Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
