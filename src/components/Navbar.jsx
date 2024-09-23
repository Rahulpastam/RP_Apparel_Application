/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isAuthenticated, user, setUser, setIsAuthenticated } =
    useContext(Context);
    const [show, setShow] = useState(false)
    

    const handleLogout = async () => {
      await axios
        .get("http://localhost:4000/api/user/logout", {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    };
    const navigate = useNavigate();
    const goToLogin = () => {
      navigate("/login")
    }
    return (
      <>
        <nav className={"container"}>
          <div className="logo">
            <Link to={"/"}>
              <img src="/logo.png" alt="logo" className="logo-img" />{" "}
            </Link>
          </div>
          <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
              <Link to={"/"} onClick={() => setShow(!show)}>
                Home
              </Link>
              <Link to={"/"} onClick={() => setShow(!show)}>
                Contact
              </Link>
              <Link to={"/"} onClick={() => setShow(!show)}>
                About
              </Link>
            </div>
            {isAuthenticated ? (
              <button className="logoutBtn btn" onClick={handleLogout}>
                LOGOUT
              </button>
            ) : (
              <button className="loginBtn btn" onClick={goToLogin}>
                LOGIN
              </button>
            )}
          </div>
          <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </div>
        </nav>
      </>
    );
};

export default Navbar;
