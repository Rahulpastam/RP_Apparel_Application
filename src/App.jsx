/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Apparel from "./pages/Apparel";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";
import axios from "axios";

const App = () => {
  const { setUser, setIsAuthenticated } = useContext(Context);

  useEffect(() => {
    axios
      .get("https://rp-apparel-backend-1.onrender.com/api/user/me", {
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setIsAuthenticated(false);
        console.log(error);
      });
  }, [setUser, setIsAuthenticated]);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </>
  );
};

export default App;
