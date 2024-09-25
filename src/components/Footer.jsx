/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";

const Footer = () => {
  const { user, isAuthenticated } = useContext(Context);
  return (
    <footer className="footer">
      <div className="footer-1">
        <img src="/logo.png" alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        {!isAuthenticated && (
          <>
            <span>
              <Link to={"/login"}>Login</Link>
            </span>
            <span>
              <Link to={"/signup"}>Signup</Link>
            </span>
          </>
        )}
      </div>

      <div className="footer-3">
        <div className="footer-social">
          <span>
            <Link to={"/"}>Instagram</Link> |
          </span>
          <span>
            {" "}
            <Link to={"https://www.linkedin.com/in/pastamrahul/"}>
              Linkedin
            </Link>{" "}
            |
          </span>
          <span>
            {" "}
            <Link to={"/"}>Youtube</Link>
          </span>
        </div>
        <div className="footer-contact">
          <span>
            <Link to={"/"}>pastam.rahul@gmail.com </Link>
          </span>
          <span>
            | <Link to={"/"}>+91-8008157893</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
