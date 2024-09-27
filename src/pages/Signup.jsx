/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const { setUser, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5000/api/user/register",
          {
            firstName,
            lastName,
            email,
            phone,
            houseNo,
            street,
            city,
            pincode,
            password,
            confirmPassword,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          navigate("/login");
          setIsAuthenticated(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setHouseNo("");
          setStreet("");
          setCity("");
          setPincode("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="auth-container ">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group form-row  signup-form ">
            <div>
              {" "}
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group form-row  signup-form ">
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group form-row  signup-form ">
            <div>
              <label>House-No</label>
              <input
                type="text"
                placeholder="H-No..,"
                value={houseNo}
                onChange={(e) => setHouseNo(e.target.value)}
              />
            </div>
            <div>
              <label>Street</label>
              <input
                type="text"
                placeholder="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group form-row  signup-form ">
            <div>
              <label>City</label>
              <input
                type="text"
                placeholder="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label>Pincode</label>
              <input
                type="text"
                placeholder="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group form-row  signup-form ">
            <div>
              {" "}
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <p className="auth-footer">
          Already have an account?
          <Link to={"/login"}> Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
